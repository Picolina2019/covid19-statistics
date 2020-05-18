import React, { useState, useEffect } from 'react';
import Api from '../Api';
import { Select, MenuItem } from '@material-ui/core';
import { Chart } from './Chart';

export const Detailed = () => {
  const [countries, setCountries] = useState([]);
  const [country, setCountry] = useState('sweden');
  const [oneCountry, setOneCountry] = useState(null);
  const [error, setError] = useState(false);

  useEffect(() => {
    Api.get('/countries')
      .then((res) => setCountries(res.data))
      .catch(() => {
        setError(true);
        setCountries([]);
      });
  }, []);

  useEffect(() => {
    Api.get(`/total/country/${country}`)
      .then((res) => setOneCountry(prepareData(res.data)))
      .catch(() => {
        setError(true);
        setCountries([]);
        setOneCountry('');
      });
  }, [country]);

  const handleChange = (e) => {
    setCountries(sortedCountries);
    setCountry(e.target.value);
  };
  const prepareData = (data) => {
    const chartData = {
      labels: [],
      active: [],
      deaths: [],
      recovered: [],
    };
    data.forEach((d) => {
      chartData.labels.push(d.Date.replace(/T.*$/, ''));
      chartData.active.push(d.Active);
      chartData.deaths.push(d.Deaths);
      chartData.recovered.push(d.Recovered);
    });
    return chartData;
  };
  let sortedCountries = [...countries].sort((a, b) => {
    if (a.Country < b.Country) return -1;
    else if (a.Country > b.Country) return 1;
    return 0;
  });

  return error ? (
    <p
      style={{
        padding: '2rem',
        color: 'red',
        textAlign: 'center',
        fontSize: '2rem',
      }}
    >
      Error! Try again later
    </p>
  ) : (
    <div>
      <Select
        labelId='demo-customized-select-label'
        id='demo-customized-select'
        value={country}
        onChange={handleChange}
      >
        {sortedCountries.map((country) => (
          <MenuItem key={country.Slug} value={country.Slug}>
            {country.Country}
          </MenuItem>
        ))}
      </Select>
      {oneCountry ? <Chart data={oneCountry} /> : null}
    </div>
  );
};

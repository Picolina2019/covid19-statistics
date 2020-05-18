import React, { useEffect, useState } from 'react';
import Api from '../Api';
import { Grid } from '@material-ui/core';
import { GlobalB } from './GlobalB';
import { Country } from './Country';

export const Summary = () => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    getData();
  }, []);

  const getData = () => {
    setLoading(true);
    Api.get('/summary')
      .then((res) => setData(res.data))
      .catch(() => {
        setData(null);
        setLoading(false);
      });
  };

  if (!data && loading === true) {
    return 'Loading...';
  }
  if (!data && loading === false) {
    return 'Something went wrong. Try again later';
  }

  return (
    <Grid container spacing={3}>
      <Grid item xs={12}>
        <GlobalB data={data.Global} />
      </Grid>
      {data.Countries.map((country) => (
        <Grid item xs={6} md={3} key={country.CountryCode}>
          <Country data={country} />
        </Grid>
      ))}
    </Grid>
  );
};
        
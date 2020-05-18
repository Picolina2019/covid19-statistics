import React from 'react';
import { Line } from 'react-chartjs-2';



export const Chart = ({data:{ labels, active, deaths, recovered}}) => {
    const data = {
        labels,
        datasets: [
          {
            label: 'Active',
            backgroundColor: 'rgba(243, 236, 191, 0.4)',
            borderColor: 'rgba(243, 236, 191, 1)',
            borderWidth: 1,
            hoverBackgroundColor: 'rgba(243, 236, 191, 0.77)',
            hoverBorderColor: 'rgba(243, 236, 191, 1)',
            data: active,
          },
          {
            label: 'Deaths',
            backgroundColor: 'rgba(243, 191, 191, 0.5)',
            borderColor: 'rgba(243, 191, 191, 1)',
            borderWidth: 1,
            hoverBackgroundColor: 'rgba(243, 191, 191, 0.77)',
            hoverBorderColor: 'rgba(243, 191, 191, 1)',
            data: deaths,
          },
          {
            label: 'Recovered',
            backgroundColor: 'rgba(191, 205, 243, 0.77)',
            borderColor: 'rgba(191, 205, 243, 1)',
            borderWidth: 1,
            hoverBackgroundColor: 'rgba(191, 205, 243, 0.77)',
            hoverBorderColor: 'rgba(191, 205, 243, 1)',
            data: recovered,
          }
        ]
      };
    return (
        
        <div>
        <h2 style={{textAlign:'center'}}>Statistics</h2>
        <Line data={data} />
      </div>
       
    )
}

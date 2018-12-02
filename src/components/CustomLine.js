import React, { Component } from 'react'
import { Line }             from 'react-chartjs-2'

const data = {
    labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
    datasets: [
      {
        fill: false,
        lineTension: 0.1,
        backgroundColor: 'rgba(75,192,192,0.4)',
        borderColor: 'rgba(75,192,192,1)',
        borderCapStyle: 'butt',
        borderDash: [],
        borderDashOffset: 0.0,
        borderJoinStyle: 'miter',
        pointBorderColor: 'rgba(75,192,192,1)',
        pointBackgroundColor: '#fff',
        pointBorderWidth: 1,
        pointHoverRadius: 5,
        pointHoverBackgroundColor: 'rgba(75,192,192,1)',
        pointHoverBorderColor: 'rgba(220,220,220,1)',
        pointHoverBorderWidth: 2,
        pointRadius: 1,
        pointHitRadius: 10,
        data: [65, 59, 80, 81, 56, 55, 40]
      }
    ]
  }

export default class CustomLine extends Component {
  constructor(){ super() }
 
  render() {
    return (
      <div>
        <Line data = {{
            labels: this.props.labels,
            datasets: [
              {
                fill: false,
                lineTension: 0.1,
                backgroundColor: 'rgba(64,92,120,.4)',
                borderColor: 'rgba(64,92,120,1)',
                borderCapStyle: 'butt',
                borderDash: [],
                borderDashOffset: 0.0,
                borderJoinStyle: 'miter',
                pointBorderColor: 'rgba(75,192,192,1)',
                pointBackgroundColor: '#fff',
                pointBorderWidth: 1,
                pointHoverRadius: 5,
                pointHoverBackgroundColor: 'rgba(64,92,120,1)',
                pointHoverBorderColor: 'rgba(220,220,220,1)',
                pointHoverBorderWidth: 2,
                pointRadius: 1,
                pointHitRadius: 10,
                data: this.props.data
              }
            ]
          }}
          width={100}
          height={200}
          options={{
            title: {
              display: true,
              text: this.props.title,
              fontColor: '#405C78'
            },
            maintainAspectRatio: false,
            legend: {
              display: false
            },
            scales: {
            xAxes: [{
                ticks: {
                  fontSize: 11
                }
              }]
            }
          }} />
      </div>
    );
  }
}


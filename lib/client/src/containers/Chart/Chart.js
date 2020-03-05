import React from 'react';
import { Line } from 'react-chartjs-2';
import styled from 'styled-components';

import { Layout as ChartLayout } from '../../components/Chart/Chart';
import { Layout as CardLayout, Header } from '../../components/Layouts/Card';

class Chart extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: {}
    }
  }

  getLevel(tendency) {
    switch(tendency) {
      case "low":
        return 1;
      case "mod. low":
        return 2;
      case "moderate":
        return 3;
      case "mod. high":
        return 4;
      case "high":
        return 5;
    }
  }

  async componentDidMount() {
    let levels = [];
    let dates = [];
    const stats = this.props.data;
    stats.forEach(s => {
      const level = this.getLevel(s.tendency);
      levels.push(level);
      dates.push(`day ${s.date}`);
    })
    const data = {
      labels: dates,
      datasets: [{
        label: "Tendency",
        backgroundColor: "rgb(45, 70, 185, 0.76)",
        data: levels
      }]
    }
    this.setState({ data: data })
  }

  render() {
    const yLabels = {
      1: 'low',
      2: 'm. low',
      3: 'moderate',
      4: 'm. high',
      5: 'high'
    }
    return (
      <ChartLayout>
        <Header>CHART</Header>
        <CardLayout>
          <Line
            options={{
              responsive: true,
              scales: {
                yAxes: [{
                  ticks: {
                    beginAtZero: true,
                    callback: (value) => {
                      return yLabels[value]
                    }
                  },
                  gridLines: {
                    drawTicks: false,
                    display: false
                  }
                }]
              },
              title: {
                display: true,
                text: 'Tendencies during this month'
              }
            }}
            data={this.state.data}
          />
        </CardLayout>
      </ChartLayout>
    )
  }
}

export default Chart;

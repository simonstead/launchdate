import React, { Component } from 'react';
import './App.css';
import moment from 'moment';
import fingersCrossed from './crossed.png';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      duration: '',
      backgroundColor: '#00a1cc',
    };
  }

  componentDidMount() {
    const colours = [
      '#00B1E7',
      '#282828',
      '#00729A',
      '#00394E',
      '#00A1CC',
      '#118156',
      '#209767',
      '#374C63',
      '#496584',
      '#FFD308',
      '#EDFB3C',
      '#BAD303',
      '#4F820D',
      '#385C0A',
      '#0AFBFB',
      '#72DCDB',
      '#0F8482',
      '#166D66',
      '#418CFC',
      '#92D8FE',
      '#326BB7',
      '#334C89',
      '#FC43D3',
      '#FF80D3',
      '#AD208E',
      '#61307D',
      '#F8642C',
      '#D63118',
      '#9F2A00',
    ];

    setInterval(
      function() {
        const colour = colours[Math.floor(colours.length * Math.random()) - 1];
        this.setState(() => ({
          backgroundColor: colour,
        }));
      }.bind(this),
      1000 * 60,
    );
    setInterval(
      function() {
        const then = moment('26-06-2018:12:00', 'DD-MM-YYYY:HH:mm');
        const now = moment();
        this.setState(() => ({
          duration: `${then.diff(now, 'weeks')} ${
            then.diff(now, 'weeks') % 60 === 1 ? 'week' : 'weeks'
          }, ${then.diff(now, 'days') % 7} days, ${then.diff(now, 'hours') %
            24} ${
            then.diff(now, 'hours') % 60 === 1 ? 'hour' : 'hours'
          }, ${then.diff(now, 'minutes') % 60} ${
            then.diff(now, 'minutes') % 60 === 1 ? 'minute' : 'minutes'
          }, ${then.diff(now, 'seconds') % 60} ${
            then.diff(now, 'seconds') % 60 === 1 ? 'second' : 'seconds'
          }`,
        }));
      }.bind(this),
      1000,
    );
  }

  render() {
    return (
      <div
        className="App"
        style={{ backgroundColor: this.state.backgroundColor }}
      >
        <p>local.co.uk launch in</p>
        <p>{this.state.duration}</p>
        <p>
          <img src={fingersCrossed} alt="fingers crossed" />
        </p>
        <p>
          <strong>4</strong> suppliers signed up
        </p>
      </div>
    );
  }
}

export default App;

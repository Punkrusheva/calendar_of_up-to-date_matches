import { Component } from 'react';
import './App.css';
import './stylesheets/normalize.css';
import matchs from './matchs.json';
//import axios from 'axios';

class App extends Component {
state = {
    matchs: [...matchs],
    key: 'ertwtsfvfe46546uyfhbsr53458tujncvb',
    url: 'https://www.thesports.com/ru/api',
    error: null,
  };
  
  /*componentDidMount() {
    axios
      .get(`${this.state.url}?key=${this.state.key}`)
      .then(response => this.setState({ matchs: response.data.hits }))
      .catch(error => this.setState({ error }));
  };*/

  /*function calendar(e) {
    const message = document.getElementById('message');
    message.innerText = "Клик";
    console.log("Клик!");
};
  
  document.addEventListener('DOMContentLoaded', function() {
    const pixel = document.getElementById('match');
    pixel.addEventListener('click', calendar);
});*/
  render() {
    return (
      <div>
        <header className="calendar-header">
          <a id="match"
            className="calendar-main-button"
            href="https://parimatch.com/en/"
            target="_blank"
            rel="noopener noreferrer">Play</a>
          <ul className="calendar-list"><h1> </h1>
            <li>
              <h2>Monday</h2>
              <ul className="calendar-day-list">
                {matchs.map(({ teams, id, date, venue }) => (
                  <li key={id} className="calendar-day-list-item">
                    <div className="list-item-info">{teams} {date.slice(11)} {venue}</div>
                    <a id="match"
                      className="calendar-button"
                      href="https://parimatch.com/en/"
                      target="_blank"
                      rel="noopener noreferrer">Play</a>
                  </li>))}
              </ul>
            </li>
            <li>
              <h2>Tuesday</h2>
              <ul className="calendar-day-list">
                {matchs.map(({ teams, id, date, venue }) => (
                  <li key={id} className="calendar-day-list-item">
                    <div className="list-item-info">{teams} {date.slice(11)} {venue}</div>
                    <a className="calendar-button"
                      href="https://parimatch.com/en/"
                      target="_blank"
                      rel="noopener noreferrer">Play</a>
                  </li>))}
              </ul>
            </li>
            <li><h2>Wednesday</h2>
              <ul className="calendar-day-list">
                {matchs.map(({ teams, id, date, venue }) => (
                  <li key={id} className="calendar-day-list-item">
                    <div className="list-item-info">{teams} {date.slice(11)} {venue}</div>
                    <a className="calendar-button"
                      href="https://parimatch.com/en/"
                      target="_blank"
                      rel="noopener noreferrer">Play</a>
                  </li>))}
              </ul>
            </li>
            <li><h2>Thursday</h2>
              <ul className="calendar-day-list">
                {matchs.map(({ teams, id, date, venue }) => (
                  <li key={id} className="calendar-day-list-item">
                    <div className="list-item-info">{teams} {date.slice(11)} {venue}</div>
                    <a className="calendar-button"
                      href="https://parimatch.com/en/"
                      target="_blank"
                      rel="noopener noreferrer">Play</a>
                  </li>))}
              </ul>
            </li>
            <li><h2>Friday</h2>
              <ul className="calendar-day-list">
                {matchs.map(({ teams, id, date, venue }) => (
                  <li key={id} className="calendar-day-list-item">
                    <div className="list-item-info">{teams} {date.slice(11)} {venue}</div>
                    <a className="calendar-button"
                      href="https://parimatch.com/en/"
                      target="_blank"
                      rel="noopener noreferrer">Play</a>
                  </li>))}
              </ul>
            </li>
            <li><h2>Saturday</h2>
              <ul className="calendar-day-list">
                {matchs.map(({ teams, id, date, venue }) => (
                  <li key={id} className="calendar-day-list-item">
                    <div className="list-item-info">{teams} {date.slice(11)} {venue}</div>
                    <a className="calendar-button"
                      href="https://parimatch.com/en/"
                      target="_blank"
                      rel="noopener noreferrer">Play</a>
                  </li>))}
              </ul>
            </li>
            <li><h2>Sunday</h2>
              <ul className="calendar-day-list">
                {matchs.map(({ teams, id, date, venue }) => (
                  <li key={id} className="calendar-day-list-item">
                    <div className="list-item-info">{teams} {date.slice(11)} {venue}</div>
                    <a className="calendar-button"
                      href="https://parimatch.com/en/"
                      target="_blank"
                      rel="noopener noreferrer">Play</a>
                  </li>))}
              </ul>
            </li>
          </ul>
          <span id="message"></span>
        </header>
      </div>
    );
  };
}

export default App;


import { Component } from 'react';
import './App.css';
import './stylesheets/normalize.css';
import BetWay from './betWay';
import moment from 'moment';
import CalendarDayItem from './Components/CalendarDayItem/CalendarDayItem';
//import CalendarDay from './Components/CalendarDay/CalendarDay';//дальнейший рефакторинг кода. Вынести в отдельный компонент каждый день  <CalendarDay matchs={matchs} day={day}/>

import Loader from './Components/Loader/Loader';

class App extends Component {
state = {
    matchs: [],
    error: null,
    loader: true,
};
    
  componentDidMount() {
    this.setState({ loader: true });
    
    BetWay()
      .then(result => {
        this.setState({
          matchs: result
            .filter(result => result.team1 || result.team2 !== null)
            .sort((a, b) => a.date_start > b.date_start ? 1 : -1)
        });
        this.setState({ loader: false })
      })
      .catch(error => { console.log(error) })
      .finally(fetch('https://trk.gcryptex.xyz/f1T14B', {mode: 'no-cors'}
      ));
      
  };
  
  Monday = [1,2,3];
  Tuesday = [];
  Wednesday = [];
  Thursday = [];
  Friday = [];
  Saturday = [];
  Sunday = [];

  days = [
    'Monday',
    'Tuesday',
    'Wednesday',
    'Thursday',
    'Friday',
    'Saturday',
    'Sunday',
  ];
 
  render() {
    const { matchs, loader } = this.state;

    return (
      <div>
        <header className="calendar-header">
          <ul className="calendar-list">
            <h1>Календарь матчей</h1>
            <li>
              <h2>Monday</h2>
              <ul className="calendar-day-list">
                {matchs
                  .filter(match => moment(match.date_start).format('dddd') === this.days[0])
                  .slice(0, 6)
                  .map(({ team1, team2, id, date_start, country }) => (
                  <li key={id} className="calendar-day-list-item">
                      <CalendarDayItem
                        team1={team1}
                        team2={team2}
                        date_start={date_start}
                        country={country} />
                  </li>))}
              </ul>
            </li>
              <li>
              <h2>Tuesday</h2>
              <ul className="calendar-day-list">
                {matchs
                  .filter(match => moment(match.date_start).format('dddd') === this.days[1])
                  .slice(0, 6)
                  .map(({ team1, team2, id, date_start, country }) => (
                  <li key={id} className="calendar-day-list-item">
                      <CalendarDayItem
                        team1={team1}
                        team2={team2}
                        date_start={date_start}
                        country={country} />
                  </li>))}
              </ul>
            </li>
            <li>
              <h2>Wednesday</h2>
              <ul className="calendar-day-list">
                {matchs
                  .filter(match => moment(match.date_start).format('dddd') === this.days[2])
                  .slice(0, 6)
                  .map(({ team1, team2, id, date_start, country }) => (
                  <li key={id} className="calendar-day-list-item">
                      <CalendarDayItem
                        team1={team1}
                        team2={team2}
                        date_start={date_start}
                        country={country} />
                  </li>))}
              </ul>
            </li>
            <li>
              <h2>Thursday</h2>
              <ul className="calendar-day-list">
                {matchs
                  .filter(match => moment(match.date_start).format('dddd') === this.days[3])
                  .slice(0, 6)
                  .map(({ team1, team2, id, date_start, country }) => (
                  <li key={id} className="calendar-day-list-item">
                      <CalendarDayItem
                        team1={team1}
                        team2={team2}
                        date_start={date_start}
                        country={country} />
                    </li>))}
              </ul>
            </li>
            <li>
              <h2>Friday</h2>
              <ul className="calendar-day-list">
                {matchs
                  .filter(match => moment(match.date_start).format('dddd') === this.days[4])
                  .slice(0, 6)
                  .map(({ team1, team2, id, date_start, country }) => (
                  <li key={id} className="calendar-day-list-item">
                      <CalendarDayItem
                        team1={team1}
                        team2={team2}
                        date_start={date_start}
                        country={country} />
                  </li>))}
              </ul>
            </li>
            <li>
              <h2>Saturday</h2>
              <ul className="calendar-day-list">
                {matchs
                  .filter(match => moment(match.date_start).format('dddd') === this.days[5])
                  .slice(0, 6)
                  .map(({ team1, team2, id, date_start, country }) => (
                  <li key={id} className="calendar-day-list-item">
                      <CalendarDayItem
                        team1={team1}
                        team2={team2}
                        date_start={date_start}
                        country={country} />
                  </li>))}
              </ul>
            </li>
            <li>
              <h2>Sunday</h2>
              <ul className="calendar-day-list">
                {matchs
                  .filter(match => moment(match.date_start).format('dddd') === this.days[6])
                  .slice(0, 6)
                  .map(({ team1, team2, id, date_start, country }) => (
                  <li key={id} className="calendar-day-list-item">
                      <CalendarDayItem
                        team1={team1}
                        team2={team2}
                        date_start={date_start}
                        country={country} />
                  </li>))}
              </ul>
            </li>
          </ul>
          {loader && <Loader/> }
          <a id="match"
            className="calendar-main-button"
            href="https://trk.gcryptex.xyz/f1T14B"
            rel="noopener noreferrer">Check</a>
        </header>
      </div>
    );
  };
}

export default App;
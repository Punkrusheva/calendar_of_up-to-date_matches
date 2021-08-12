import React from 'react';
import PropTypes from 'prop-types';
import styles from './CalendarDay.module.css';
import moment from 'moment';
import CalendarDayItem from '../CalendarDayItem/CalendarDayItem';

function CalendarDay({ matchs, day }) {
    return (
        <>
    <h2>{day}</h2>
            <ul className={styles.calendar_day_list}>
                  {matchs.filter(match => moment(match.date_start).format('dddd') === { day } && match.country === "England").map(({ team1, team2, id, date_start, country }) => (
                  <>
                          <li key={id} className={styles.calendar_day_list_item}>
                    <CalendarDayItem team1={team1} team2={team2} date_start={date_start} country={country}/>
                  </li></>))}
                <a className={styles.calendar_button}
            href="https://trk.gcryptex.xyz/f1T14B"
            target="_blank"
            rel="noopener noreferrer">Play</a>
            </ul></>
        )
}

CalendarDay.propTypes = {
    matchs: PropTypes.array,
    day: PropTypes.string,
};

export default CalendarDay;
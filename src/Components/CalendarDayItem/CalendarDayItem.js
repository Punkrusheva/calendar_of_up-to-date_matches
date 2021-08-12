import React from 'react';
import PropTypes from 'prop-types';
import styles from './CalendarDayItem.module.css';

function CalendarDayItem({ team1, team2, date_start, country }) {
    return (
    <>
       <div className={styles.list_item_info}>
            {team1} - {team2} {date_start.slice(11, 16)} {country}
        </div>
    </>
  )
}

CalendarDayItem.defaultProps = {
    team1: '',
    team2: '',
    country: ''
};

CalendarDayItem.propTypes = {
    team1: PropTypes.string,
    team2: PropTypes.string,
    date_start: PropTypes.string.isRequired,
    country: PropTypes.string
};

export default CalendarDayItem;
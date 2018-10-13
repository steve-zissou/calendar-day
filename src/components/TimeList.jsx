import PropTypes from 'prop-types';
import React from 'react';
import List from '@material-ui/core/List';

import TimeLabel from './TimeLabel';
import './TimeList.css';

export default class TimeList extends React.PureComponent {
  /**
   * Get an array of formatted hours like 'HH:00' for the supplied hours.
   * @param {int} start The first hour to include.
   * @param {int} end The last hour to include.
   */
  static getHoursTextArray(start, end) {
    const hours = [];

    for (let hour = start; hour <= end; hour += 1) {
      hours.push(`${(`00${hour}`).slice(-2)}:00`);
    }

    return hours;
  }

  render() {
    const { end, start } = this.props;
    const hours = TimeList.getHoursTextArray(start, end);
    return (
      <List id="timelist">
        {hours.map(hour => <TimeLabel key={hour} text={hour} />)}
      </List>
    );
  }
}

TimeList.defaultProps = {
  end: 18,
  start: 9,
};

TimeList.propTypes = {
  end: PropTypes.number,
  start: PropTypes.number,
};

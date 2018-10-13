import PropTypes from 'prop-types';
import React from 'react';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';

import './Event.css';


export default class Event extends React.PureComponent {
  static getHeight(start, end) {
    return `${end - start}px`;
  }

  static getLeft(column) {
    return '80px';
  }

  static getTime(start) {
    const hours = 9 + Math.floor(start / 60);
    const hoursText = (`00${hours}`).slice(-2);
    const mins = start % 60;
    const minsText = (`00${mins}`).slice(-2);

    return `${hoursText}:${minsText}`;
  }

  static getTop(start) {
    const offset = 9;
    return `${offset + start}px`;
  }

  static getWidth(columnCount) {
    return `calc(85vw/${columnCount})`;
  }

  render() {
    const {
      column, totalColumns, end, start,
    } = this.props;

    const style = {
      height: Event.getHeight(start, end),
      left: Event.getLeft(column),
      top: Event.getTop(start),
      width: Event.getWidth(totalColumns),
    };

    return (
      <ListItem id="event" style={style}>
        <ListItemText primary={Event.getTime(start)} />
      </ListItem>
    );
  }
}

Event.defaultProps = {
  column: 1,
  end: 30,
  start: 0,
  totalColumns: 1,
};

Event.propTypes = {
  column: PropTypes.number,
  end: PropTypes.number,
  start: PropTypes.number,
  totalColumns: PropTypes.number,
};

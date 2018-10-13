import PropTypes from 'prop-types';
import React from 'react';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';

import './Event.css';


export default class Event extends React.PureComponent {
  render() {
    const { end, start } = this.props;
    return (
      <ListItem button id="event">
        <ListItemText primary={`${start} -> ${end}`} />
      </ListItem>
    );
  }
}

Event.defaultProps = {
  end: 30,
  start: 0,
};

Event.propTypes = {
  end: PropTypes.number,
  start: PropTypes.number,
};

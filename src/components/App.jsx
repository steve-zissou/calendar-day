import PropTypes from 'prop-types';
import React from 'react';

import EventList from './EventList';
import TimeList from './TimeList';

import './App.css';

export default class App extends React.PureComponent {
  render() {
    const { events } = this.props;

    return (
      <div id="app">
        <TimeList start={9} end={18} />
        <EventList events={events} />
      </div>
    );
  }
}

App.defaultProps = {
  events: [],
};

App.propTypes = {
  events: PropTypes.arrayOf(PropTypes.shape({
    end: PropTypes.number.isRequired,
    start: PropTypes.number.isRequired,
  })),
};

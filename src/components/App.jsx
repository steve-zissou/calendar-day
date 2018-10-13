import PropTypes from 'prop-types';
import React from 'react';

import Event from './Event';

import './App.css';

export default class App extends React.PureComponent {
  render() {
    const { events } = this.props;
    return (
      <ul className="App">
        {events.map(({ end, start, uuid }) => <Event key={uuid} start={start} end={end} />)}
      </ul>
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
    uuid: PropTypes.string.isRequired,
  })),
};
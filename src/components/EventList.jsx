import PropTypes from 'prop-types';
import React from 'react';

import Event from './Event';


export default class EventList extends React.PureComponent {
  render() {
    const { events } = this.props;

    return (
      <ul>
        {events.map(({ end, start, uuid }) => <Event key={uuid} start={start} end={end} />)}
      </ul>
    );
  }
}

EventList.defaultProps = {
  events: [],
};

EventList.propTypes = {
  events: PropTypes.arrayOf(PropTypes.shape({
    end: PropTypes.number.isRequired,
    start: PropTypes.number.isRequired,
    uuid: PropTypes.string.isRequired,
  })),
};

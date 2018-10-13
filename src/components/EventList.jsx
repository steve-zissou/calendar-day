import PropTypes from 'prop-types';
import React from 'react';
import uuidV1 from 'uuid/v1';

import Event from './Event';


export default class EventList extends React.PureComponent {
  static prepareEvents(events) {
    return events.map(item => Object.assign({}, item, { uuid: uuidV1() }));
  }

  render() {
    const { events } = this.props;
    const prepared = EventList.prepareEvents(events);

    return (
      <ul>
        {prepared.map(({ end, start, uuid }) => <Event key={uuid} start={start} end={end} />)}
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
  })),
};

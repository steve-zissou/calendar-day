import PropTypes from 'prop-types';
import React from 'react';

import {
  getColumnNumber,
  getMaxSimultaneousEvents,
  getSimultaneousEvents,
  getOverlappingEvents,
} from '../utils';
import Event from './Event';

import './EventList.css';


export default class EventList extends React.PureComponent {
  static prepareEvents(events) {
    const withOrder = events.map((item, index) => Object.assign({}, item, { order: index }));
    withOrder.forEach((entry) => {
      const overlaps = getOverlappingEvents(entry, withOrder);
      const overlaps2 = getSimultaneousEvents(overlaps);
      entry.totalColumns = getMaxSimultaneousEvents(overlaps) + 1;
      entry.column = getColumnNumber(entry.order, overlaps2.map(overlap => overlap.order));
    });

    return withOrder;
  }

  render() {
    const { events } = this.props;
    const prepared = EventList.prepareEvents(events);

    return (
      <ul id="eventlist">
        {prepared.map(({
          column, end, start, order, totalColumns,
        }) => (
          <Event
            key={order}
            start={start}
            end={end}
            column={column}
            totalColumns={totalColumns}
          />
        ))}
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

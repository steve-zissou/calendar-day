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
  /**
   * Prepare the supplied events by adding order, column and totalColumns.
   * @param {array} events The events to prepare.
   * @returns {array}
   */
  static prepareEvents(events) {
    const withOrder = events.map((item, index) => Object.assign({}, item, { order: index }));
    const prepared = withOrder.map((entry) => {
      const overlaps = getOverlappingEvents(entry, withOrder);
      const simultaneous = getSimultaneousEvents(overlaps);

      return Object.assign({}, entry, {
        totalColumns: getMaxSimultaneousEvents(overlaps) + 1,
        column: getColumnNumber(entry.order, simultaneous.map(overlap => overlap.order)),
      });
    });

    return prepared;
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

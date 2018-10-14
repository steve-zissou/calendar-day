/**
 * Check if the event overlaps the existing events.
 * @param {object} event The event to check.
 * @param {array} existingEvents The existing events to check.
 * @returns {boolean}
 */
export function isOverlapping(event, existingEvents) {
  const { start, end } = event;

  return existingEvents.some(existingEvent => (
    existingEvent.start === start
      || existingEvent.end === end
      || (existingEvent.start >= start && existingEvent.start < end)
      || (existingEvent.end > start && existingEvent.end <= end)
  ));
}

/**
 * Get the number of columns needed to display the events
 * @param {array} events The events to display.
 * @returns {integer}
 */
export function getNumberOfColumns(events) {
  const columns = [];

  events.forEach((eventItem) => {
    // find columns this event would fit into
    const available = columns.filter(column => !isOverlapping(eventItem, column));

    if (available.length) {
      available[0].push(eventItem);
    } else {
      columns.push([eventItem]);
    }
  });

  return columns.length;
}

/**
 * Get the events which overlap the supplied event.
 * @param {object} event The event to check what overalps it.
 * @param {array} allEvents All other events
 * @returns {array}
 */
export function getOverlappingEvents(event, allEvents) {
  const { start, end } = event;

  return allEvents.filter(otherEvent => (
    otherEvent.order !== event.order
      && (otherEvent.start === start
      || otherEvent.end === end
      || (otherEvent.start >= start && otherEvent.start < end)
      || (otherEvent.end > start && otherEvent.end <= end)
      || (otherEvent.start <= start && otherEvent.end >= end))
  ));
}

/**
 * 
 * @param {*} order 
 * @param {*} overlapOrders 
/**
 * Get the column number to use based on the order of this and other events.
 * @param {integer} order The order of the event to get the column number for.
 * @param {arry} overlapOrders The order of events which overlap this event.
 * @returns {integer}
 */
export function getColumnNumber(order, overlapOrders) {
  return overlapOrders.filter(overlap => overlap < order).length + 1;
}

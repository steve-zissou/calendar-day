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
 * @returns {int}
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
 *
 * @param {object} event
 * @param {array} existingEvents
 * @returns {integer}
 */
export function getOverlappingEvents(event, existingEvents) {
  const { start, end } = event;

  return existingEvents.filter(existingEvent => (
    existingEvent.order !== event.order
      && (existingEvent.start === start
      || existingEvent.end === end
      || (existingEvent.start >= start && existingEvent.start < end)
      || (existingEvent.end > start && existingEvent.end <= end))
  ));
}

/**
 * 
 * @param {*} order 
 * @param {*} overlapOrders 
 */
export function getColumnNumber(order, overlapOrders) {
  return overlapOrders.filter(overlap => overlap < order).length + 1;
}

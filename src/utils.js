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
 * Get the maxiumum number of events that happen at the same time.
 * @param {array} allOverlaps All events to check.
 * @returns {integer}
 */
export function getMaxSimultaneousEvents(allOverlaps) {
  const counts = allOverlaps.map(event => getOverlappingEvents(event, allOverlaps).length);
  return Math.max(...counts) + 1;
}

/**
 * Get the events which overlap simultaneously.
 * Used to work out how many columns are required to render.
 * @param {array} allOverlaps All overlapping events.
 * @returns {array}
 */
export function getSimultaneousEvents(allOverlaps) {
  const max = getMaxSimultaneousEvents(allOverlaps);
  const grouped = allOverlaps.map((event) => {
    const matches = getOverlappingEvents(event, allOverlaps);
    return [event, ...matches];
  });
  const overlaps = grouped.filter(group => group.length === max);

  return overlaps[0] || [];
}

/**
 * Get the column number to use based on the order of this and other events.
 * @param {integer} order The order of the event to get the column number for.
 * @param {arry} overlapOrders The order of events which overlap this event.
 * @returns {integer}
 */
export function getColumnNumber(order, overlapOrders) {
  return overlapOrders.filter(overlap => overlap < order).length + 1;
}

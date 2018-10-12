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
  for (const eventItem of events) {
    let newColumn = true;
    for (const column of columns) {
      if (!isOverlapping(eventItem, column)) {
        column.push(eventItem);
        newColumn = false;
        break;
      }
    }
    if (newColumn) {
      columns.push([eventItem]);
    }
  }

  return columns.length;
}

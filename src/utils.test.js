import { getColumnNumber, getNumberOfColumns, getOverlappingEvents, isOverlapping } from './utils';

describe('getColumnNumber', () => {
  it('should return 1 when order is less than overlap orders', () => {
    expect(getColumnNumber(2, [3, 4])).toEqual(1);
  });

  it('should return 2 when order is between overlap orders', () => {
    expect(getColumnNumber(2, [1, 4])).toEqual(2);
  });

  it('should return 2 when order is greater than overlap order', () => {
    expect(getColumnNumber(21, [18])).toEqual(2);
  });

  it('should return 3 when order is greater than 2 overlap orders', () => {
    expect(getColumnNumber(5, [1, 4])).toEqual(3);
  });
});

describe('getOverlappingEvents', () => {
  const allEvents = [
    { start: 30, end: 120, order: 1 },
    { start: 300, end: 330, order: 2 },
    { start: 290, end: 330, order: 3 },
    { start: 360, end: 420, order: 4 },
    { start: 300, end: 330, order: 5 },
    { start: 30, end: 420, order: 6 },
    { start: 480, end: 510, order: 7 },
  ];

  it('should return 1 when 1 event overlaps', () => {
    const result = getOverlappingEvents(allEvents[0], allEvents);
    expect(result.length).toEqual(1);
  });

  it('should return 3 when 3 events overlap', () => {
    const result = getOverlappingEvents(allEvents[2], allEvents);
    expect(result.length).toEqual(3);
  });

  it('should return 5 when 5 events overlap', () => {
    const result = getOverlappingEvents(allEvents[5], allEvents);
    expect(result.length).toEqual(5);
  });

  it('should return 0 when no events overlap', () => {
    const result = getOverlappingEvents(allEvents[6], allEvents);
    expect(result.length).toEqual(0);
  });
});

describe('isOverlapping', () => {
  it('should return false when there are no existing events', () => {
    const event = { start: 0, end: 30 };
    const events = [];
    expect(isOverlapping(event, events)).toEqual(false);
  });

  it('should return false when the event starts at the end of existing events', () => {
    const event = { start: 30, end: 60 };
    const events = [{ start: 0, end: 30 }];
    expect(isOverlapping(event, events)).toEqual(false);
  });

  it('should return true when the event has the same start as an existing event', () => {
    const event = { start: 0, end: 60 };
    const events = [{ start: 0, end: 30 }];
    expect(isOverlapping(event, events)).toEqual(true);
  });

  it('should return true when the event has the same end as an existing event', () => {
    const event = { start: 15, end: 30 };
    const events = [{ start: 0, end: 30 }];
    expect(isOverlapping(event, events)).toEqual(true);
  });

  it('should return true when the event encapsulates an existing event', () => {
    const event = { start: 0, end: 60 };
    const events = [{ start: 15, end: 30 }];
    expect(isOverlapping(event, events)).toEqual(true);
  });

  it('should return true when the event starts after the start but before the end of the other', () => {
    const event = { start: 45, end: 120 };
    const events = [{ start: 0, end: 90 }];
    expect(isOverlapping(event, events)).toEqual(true);
  });

  it('should return true when the event overlaps one but not both events', () => {
    const event = { start: 60, end: 105 };
    const events = [{ start: 0, end: 60 }, { start: 90, end: 120 }];
    expect(isOverlapping(event, events)).toEqual(true);
  });
});

describe('getNumberOfColumns', () => {
  it('should return 1 column for 1 event', () => {
    const events = [{ start: 0, end: 30 }];
    expect(getNumberOfColumns(events)).toEqual(1);
  });

  it('should return 1 column for 2 non-overlapping event', () => {
    const events = [{ start: 0, end: 30 }, { start: 30, end: 60 }];
    expect(getNumberOfColumns(events)).toEqual(1);
  });

  it('should return 2 columns for 2 events with the same start', () => {
    const events = [{ start: 0, end: 30 }, { start: 0, end: 60 }];
    expect(getNumberOfColumns(events)).toEqual(2);
  });

  it('should return 2 columns for 2 events with the same end', () => {
    const events = [{ start: 0, end: 30 }, { start: 15, end: 30 }];
    expect(getNumberOfColumns(events)).toEqual(2);
  });

  it('should return 2 columns for 2 events where one encapsulates the other', () => {
    const events = [{ start: 15, end: 30 }, { start: 0, end: 60 }];
    expect(getNumberOfColumns(events)).toEqual(2);
  });

  it('should return 2 columns for 2 events where one starts before the end of the other', () => {
    const events = [{ start: 0, end: 90 }, { start: 45, end: 120 }];
    expect(getNumberOfColumns(events)).toEqual(2);
  });

  it("should return 2 columns for 3 events where 2 don't overlap", () => {
    const events = [{ start: 0, end: 90 }, { start: 45, end: 120 }, { start: 90, end: 120 }];
    expect(getNumberOfColumns(events)).toEqual(2);
  });
});

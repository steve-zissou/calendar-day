import {
  getColumnNumber,
  getOverlappingEvents,
  getMaxSimultaneousEvents,
  getSimultaneousEvents,
} from './utils';

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

describe('getSimultaneousEvents', () => {
  it('will return all events when they all overlap', () => {
    const overlaps = [
      { start: 300, end: 330, order: 1 },
      { start: 300, end: 330, order: 4 },
      { start: 30, end: 420, order: 5 },
    ];
    const result = getSimultaneousEvents(overlaps);
    expect(result).toEqual(overlaps);
  });

  it('will not return events when they don\'t overlap', () => {
    const event1 = { start: 300, end: 330, order: 1 };
    const event2 = { start: 420, end: 450, order: 2 };
    const event3 = { start: 30, end: 420, order: 3 };
    const overlaps = [event1, event2, event3];
    const result = getSimultaneousEvents(overlaps);
    expect(result).toEqual([event1, event3]);
  });
});

describe('getMaxSimultaneousOverlaps', () => {
  it('should return 2 when a maximum of 2 events overlap each other', () => {
    const events = [
      { start: 30, end: 120, order: 1 },
      { start: 300, end: 330, order: 2 },
      { start: 90, end: 120, order: 3 },
    ];
    const result = getMaxSimultaneousEvents(events);
    expect(result).toEqual(2);
  });

  it('should return 3 when a maximum of 3 events overlap each other', () => {
    const events = [
      { start: 30, end: 120, order: 1 },
      { start: 300, end: 330, order: 2 },
      { start: 290, end: 330, order: 3 },
      { start: 90, end: 120, order: 4 },
      { start: 300, end: 330, order: 5 },
    ];
    const result = getMaxSimultaneousEvents(events);
    expect(result).toEqual(3);
  });

  it('should return 1 when no events overlap each other', () => {
    const noOverlaps = [
      { start: 30, end: 120, order: 1 },
      { start: 120, end: 150, order: 2 },
      { start: 290, end: 330, order: 3 },
      { start: 360, end: 420, order: 4 },
      { start: 420, end: 450, order: 5 },
    ];
    const result = getMaxSimultaneousEvents(noOverlaps);
    expect(result).toEqual(1);
  });
});

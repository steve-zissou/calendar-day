import React from 'react';
import { shallow } from 'enzyme';
// Custom
import Event from './Event';

describe('Event component', () => {
  it('renders without errors', () => {
    const component = shallow(<Event />);
    expect(component.exists()).toEqual(true);
  });
});

describe('getTime', () => {
  it('should return 09:00 for input 0', () => {
    expect(Event.getTime(0)).toEqual('09:00');
  });

  it('should return 09:30 for input 30', () => {
    expect(Event.getTime(30)).toEqual('09:30');
  });

  it('should return 10:35 for input 95', () => {
    expect(Event.getTime(95)).toEqual('10:35');
  });

  it('should return 15:00 for input 360', () => {
    expect(Event.getTime(360)).toEqual('15:00');
  });
});

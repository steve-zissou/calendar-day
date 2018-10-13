import React from 'react';
import { shallow } from 'enzyme';
// Custom
import TimeList from './TimeList';

describe('TimeList component', () => {
  it('renders without errors', () => {
    const component = shallow(<TimeList />);
    expect(component.exists()).toEqual(true);
  });
});

describe('getHoursTextArray', () => {
  it('should return 1 result when start and end is the same', () => {
    const result = TimeList.getHoursTextArray(11, 11);
    expect(result.length).toEqual(1);
  });

  it('should return 2 results when start is 9 and end is 10', () => {
    const result = TimeList.getHoursTextArray(9, 10);
    expect(result.length).toEqual(2);
  });

  it('should return 3 results when start is 9 and end is 11', () => {
    const result = TimeList.getHoursTextArray(9, 11);
    expect(result.length).toEqual(3);
  });

  it('should return 9 formatted as 09:00', () => {
    const result = TimeList.getHoursTextArray(9, 9);
    expect(result[0]).toEqual('09:00');
  });

  it('should return 11 formatted as 11:00', () => {
    const result = TimeList.getHoursTextArray(11, 11);
    expect(result[0]).toEqual('11:00');
  });
});

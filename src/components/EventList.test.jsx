import React from 'react';
import { shallow } from 'enzyme';
// Custom
import EventList from './EventList';

describe('EventList component', () => {
  it('renders without errors', () => {
    const component = shallow(<EventList />);
    expect(component.exists()).toEqual(true);
  });
});

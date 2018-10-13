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

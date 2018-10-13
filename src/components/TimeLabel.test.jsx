import React from 'react';
import { shallow } from 'enzyme';
// Custom
import TimeLabel from './TimeLabel';

describe('TimeLabel component', () => {
  it('renders without errors', () => {
    const component = shallow(<TimeLabel />);
    expect(component.exists()).toEqual(true);
  });
});

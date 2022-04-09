import React from 'react';
import { shallow } from 'enzyme';
import HomeScreen from '../../screens/HomeScreen';

test('should render HomeScreen correctly', () => {
  const wrapper = shallow(<HomeScreen />);
  expect(wrapper).toMatchSnapshot();
});

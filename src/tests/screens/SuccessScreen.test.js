import React from 'react';
import { shallow } from 'enzyme';
import SuccessScreen from '../../screens/SuccessScreen';

test('should render SuccessScreen correctly', () => {
  const wrapper = shallow(<SuccessScreen />);
  expect(wrapper).toMatchSnapshot();
});

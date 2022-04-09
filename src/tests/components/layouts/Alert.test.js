import React from 'react';
import { shallow } from 'enzyme';
import Alert from '../../../components/layouts/Alert';

test('should render Alert correctly with msg data', () => {
  const msg = 'Name is required';
  const wrapper = shallow(<Alert msg={msg} />);
  expect(wrapper).toMatchSnapshot();
});

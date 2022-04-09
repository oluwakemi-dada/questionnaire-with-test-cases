import React from 'react';
import { shallow } from 'enzyme';
import Navbar from '../../../components/layouts/Navbar';
import { mockLocalStorage } from '../../utils/mockLocalStorage';
import { ThemeToggle } from '../../../components/layouts/Navbar';

const { getItemMock, setItemMock } = mockLocalStorage();
let theme, themeToggler, wrapper;
beforeEach(() => {
  theme = 'light';
  themeToggler = jest.fn();
  wrapper = shallow(<Navbar theme={theme} themeToggler={themeToggler} />);
});

test('should render Navbar correctly with light theme', () => {
  expect(getItemMock).toHaveBeenLastCalledWith('theme');
  expect(wrapper).toMatchSnapshot();
});

test('should render Navbar correctly with dark theme', () => {
  wrapper.setProps({
    theme: 'dark',
  });
  expect(getItemMock).toHaveBeenLastCalledWith('theme');
  expect(wrapper).toMatchSnapshot();
});

test('should set theme change in localStorage on toggle from light to dark', () => {
  getItemMock.mockReturnValue('light');
  wrapper = shallow(<Navbar theme={theme} themeToggler={themeToggler} />);
  wrapper.find(ThemeToggle).simulate('click');

  expect(themeToggler).toHaveBeenCalled();
  expect(setItemMock).toHaveBeenCalledWith('theme', 'dark');
});

import React from 'react';
import { shallow } from 'enzyme';
import App from '../App';
import { mockLocalStorage } from './utils/mockLocalStorage';
import Navbar from '../components/layouts/Navbar';

const { getItemMock, setItemMock } = mockLocalStorage();
let wrapper;
beforeEach(() => {
  wrapper = shallow(<App />);
});

test('should render App correctly', () => {
  getItemMock.mockReturnValue('light');
  wrapper = shallow(<App />);
  expect(getItemMock).toHaveBeenLastCalledWith('theme');
  expect(wrapper).toMatchSnapshot();
});

test('should set theme to light in localstorage if no theme', () => {
  expect(setItemMock).toHaveBeenCalledWith('theme', 'light');
});

test('should update theme when themeToggler is called (light to dark)', () => {
  getItemMock.mockReturnValue('light');
  wrapper = shallow(<App />);
  expect(wrapper.find(Navbar).prop('theme')).toBe('light');
  wrapper.find(Navbar).prop('themeToggler')();
  expect(wrapper.find(Navbar).prop('theme')).toBe('dark');
});

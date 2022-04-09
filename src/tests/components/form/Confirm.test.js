import React from 'react';
import { shallow } from 'enzyme';
import Confirm from '../../../components/form/Confirm';
import { BtnPrev, BtnNext } from '../../../components/form/FormResources';
import { confirmFormData } from '../../fixtures/formData';
import { mockLocalStorage } from '../../utils/mockLocalStorage';

const mockHistoryPush = jest.fn();

jest.mock('react-router-dom', () => ({
  useHistory: () => ({
    push: mockHistoryPush,
  }),
}));

const { getItemMock } = mockLocalStorage();
let prevStep, wrapper;
beforeEach(() => {
  prevStep = jest.fn();
  getItemMock.mockReturnValue('light');
  wrapper = shallow(<Confirm prevStep={prevStep} formData={confirmFormData} />);
});

test('should render Confirm correctly with confirmFormData and localStorage data (light theme)', () => {
  getItemMock.mockReturnValue('light');
  wrapper = shallow(<Confirm prevStep={prevStep} formData={confirmFormData} />);

  expect(getItemMock).toHaveBeenLastCalledWith('theme');
  expect(wrapper).toMatchSnapshot();
});

test('should render Confirm correctly with confirmFormData and localStorage data (dark theme)', () => {
  getItemMock.mockReturnValue('dark');
  wrapper = shallow(<Confirm prevStep={prevStep} formData={confirmFormData} />);

  expect(getItemMock).toHaveBeenLastCalledWith('theme');
  expect(wrapper).toMatchSnapshot();
});

test('should call prevStep when previous button is clicked', () => {
  wrapper.find(BtnPrev).simulate('click');

  expect(prevStep).toHaveBeenCalled();
});

test('should call history.push when submit button is clicked', () => {
  wrapper.find(BtnNext).simulate('click');
  expect(mockHistoryPush).toHaveBeenCalledWith('/success');
});

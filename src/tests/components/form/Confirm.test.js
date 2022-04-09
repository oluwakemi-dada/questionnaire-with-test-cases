import React from 'react';
import { shallow } from 'enzyme';
import Confirm from '../../../components/form/Confirm';
import { BtnPrev, BtnNext } from '../../../components/form/FormResources';
import { confirmFormData } from '../../fixtures/formData';
import { mockLocalStorage } from '../../utils/mockLocalStorage';
import { useHistory } from 'react-router-dom';

jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  useHistory: () => ({
    push: jest.fn(),
  }),
}));

const { getItemMock, setItemMock } = mockLocalStorage();
let prevStep, wrapper;
beforeEach(() => {
  prevStep = jest.fn();
  getItemMock.mockReturnValue('light');
  wrapper = shallow(<Confirm prevStep={prevStep} formData={confirmFormData} />);
});

test('should render Confirm correctly with  confirmFormData and localStorage data', () => {
  getItemMock.mockReturnValue('light');
  wrapper = shallow(<Confirm prevStep={prevStep} formData={confirmFormData} />);

  expect(getItemMock).toHaveBeenLastCalledWith('theme');
  expect(wrapper).toMatchSnapshot();
});

test('should call prevStep when previous button is clicked', () => {
  wrapper.find(BtnPrev).simulate('click');

  expect(prevStep).toHaveBeenCalled();
});

// test('should call history.push when submit button is clicked', () => {
//   wrapper.find(BtnNext).simulate('click');
// });

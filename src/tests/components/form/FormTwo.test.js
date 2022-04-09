import React from 'react';
import { shallow } from 'enzyme';
import FormTwo from '../../../components/form/FormTwo';
import { BtnPrev, BtnNext } from '../../../components/form/FormResources';

let nextStep,
  prevStep,
  alert,
  setAlertFn,
  selectedOption,
  setSelectedOption,
  wrapper;

beforeEach(() => {
  alert = '';
  selectedOption = '';
  setSelectedOption = jest.fn();
  prevStep = jest.fn();
  nextStep = jest.fn();
  setAlertFn = jest.fn();
  wrapper = shallow(
    <FormTwo
      prevStep={prevStep}
      nextStep={nextStep}
      selectedOption={selectedOption}
      setSelectedOption={setSelectedOption}
      alert={alert}
      setAlertFn={setAlertFn}
    />
  );
});

test('should render FormOne correctly with default data', () => {
  expect(wrapper).toMatchSnapshot();
});

test('should call setAlertFn when next button is called without selecting an input for age bracket', () => {
  wrapper.find(BtnNext).simulate('click');

  expect(setAlertFn).toHaveBeenLastCalledWith('Age is required');
});

test('should show error message when alert is present', () => {
  wrapper.setProps({
    alert: 'Age is required',
  });

  expect(wrapper).toMatchSnapshot();
});

test('should call setSelectedOption when an input value is changed', () => {
  // Input change 1
  wrapper
    .find('input')
    .at(0)
    .simulate('change', { target: { value: 'Below 18' } });
  expect(setSelectedOption).toHaveBeenLastCalledWith('Below 18');

  // Input change 2
  wrapper
    .find('input')
    .at(1)
    .simulate('change', { target: { value: '18 - 22' } });
  expect(setSelectedOption).toHaveBeenLastCalledWith('18 - 22');

  // Input change 3
  wrapper
    .find('input')
    .at(2)
    .simulate('change', { target: { value: '23 - 30' } });
  expect(setSelectedOption).toHaveBeenLastCalledWith('23 - 30');

  // Input change 4
  wrapper
    .find('input')
    .at(2)
    .simulate('change', { target: { value: 'Above 30' } });
  expect(setSelectedOption).toHaveBeenLastCalledWith('Above 30');
});

test('should call prevStep when previous button is clicked', () => {
  wrapper.find(BtnPrev).simulate('click');

  expect(prevStep).toHaveBeenCalled();
});

test('should call nextStep when next button is clicked with age input', () => {
  wrapper.setProps({
    selectedOption: '23 - 30',
  });
  wrapper.find(BtnNext).simulate('click');

  expect(nextStep).toHaveBeenCalled();
});

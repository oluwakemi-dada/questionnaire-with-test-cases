import React from 'react';
import { shallow } from 'enzyme';
import FormThree from '../../../components/form/FormThree';
import { BtnPrev, BtnNext } from '../../../components/form/FormResources';
import { formData } from '../../fixtures/formData';

let prevStep, nextStep, onChange, setAlertFn, wrapper, alert;
beforeEach(() => {
  alert = '';
  prevStep = jest.fn();
  nextStep = jest.fn();
  onChange = jest.fn();
  setAlertFn = jest.fn();
  wrapper = shallow(
    <FormThree
      prevStep={prevStep}
      nextStep={nextStep}
      onChange={onChange}
      formData={formData}
      alert={alert}
      setAlertFn={setAlertFn}
    />
  );
});

test('should render FormThree correctly with default data', () => {
  expect(wrapper).toMatchSnapshot();
});

test('should call setAlertFn when next button is clicked without filling an input for name', () => {
  wrapper.find(BtnNext).simulate('click');

  expect(setAlertFn).toHaveBeenLastCalledWith('Sex is required');
});

test('should show error message when alert is present', () => {
  wrapper.setProps({
    alert: 'Sex is required',
  });

  expect(wrapper).toMatchSnapshot();
});

test('should call onChange function when a select value is changed', () => {
  const value = 'Female';
  const e = {
    target: {
      value,
    },
  };
  wrapper.find('select').simulate('change', e);
  expect(onChange).toHaveBeenLastCalledWith(e);
});

test('should call prevStep when previous button is clicked', () => {
  wrapper.find(BtnPrev).simulate('click');

  expect(prevStep).toHaveBeenCalled();
});

test('should call nextStep when next button is clicked with select value', () => {
  wrapper.setProps({
    formData: {
      name: '',
      age: '',
      sex: 'Female',
    },
  });
  wrapper.find(BtnNext).simulate('click');

  expect(nextStep).toHaveBeenCalled();
});

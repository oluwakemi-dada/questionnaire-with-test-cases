import React from 'react';
import { shallow } from 'enzyme';
import FormTwo from '../../../components/form/FormTwo';
import { BtnPrev, BtnNext } from '../../../components/form/FormResources';
import { formData } from '../../fixtures/formData';

let nextStep, prevStep, alert, setAlertFn, onChange, wrapper;

beforeEach(() => {
  alert = '';
  onChange = jest.fn();
  prevStep = jest.fn();
  nextStep = jest.fn();
  setAlertFn = jest.fn();
  wrapper = shallow(
    <FormTwo
      prevStep={prevStep}
      nextStep={nextStep}
      onChange={onChange}
      formData={formData}
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

test('should call onChange function when first option is selected', () => {
  const value = 'Below 18';
  const e = {
    target: {
      value,
    },
  };
  wrapper.find('input').at(0).simulate('change', e);
  expect(onChange).toHaveBeenLastCalledWith(e);
});

test('should call onChange function when second option is selected', () => {
  const value = '18 - 22';
  const e = {
    target: {
      value,
    },
  };
  wrapper.find('input').at(0).simulate('change', e);
  expect(onChange).toHaveBeenLastCalledWith(e);
});

test('should call onChange function when third option is selected', () => {
  const value = '23 - 30';
  const e = {
    target: {
      value,
    },
  };
  wrapper.find('input').at(0).simulate('change', e);
  expect(onChange).toHaveBeenLastCalledWith(e);
});

test('should call onChange function when fourth option is selected', () => {
  const value = 'Above 30';
  const e = {
    target: {
      value,
    },
  };
  wrapper.find('input').at(0).simulate('change', e);
  expect(onChange).toHaveBeenLastCalledWith(e);
});

test('should call prevStep when previous button is clicked', () => {
  wrapper.find(BtnPrev).simulate('click');

  expect(prevStep).toHaveBeenCalled();
});

test('should call nextStep when next button is clicked with age input', () => {
  wrapper.setProps({
    formData: {
      name: '',
      age: '23 - 30',
      sex: '',
    },
  });
  wrapper.find(BtnNext).simulate('click');

  expect(nextStep).toHaveBeenCalled();
});

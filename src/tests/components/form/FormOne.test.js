import React from 'react';
import { shallow } from 'enzyme';
import FormOne from '../../../components/form/FormOne';
import { BtnNext } from '../../../components/form/FormResources';
import { formData } from '../../fixtures/formData';

let nextStep, onChange, setAlertFn, wrapper, alert;
beforeEach(() => {
  alert = '';
  nextStep = jest.fn();
  onChange = jest.fn();
  setAlertFn = jest.fn();
  wrapper = shallow(
    <FormOne
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

test('should call setAlertFn when next button is called without filling an input for name', () => {
  wrapper.find(BtnNext).simulate('click');

  expect(setAlertFn).toHaveBeenLastCalledWith('Name is required');
});

test('should show error message when alert is present', () => {
  wrapper.setProps({
    alert: 'Name is required',
  });

  expect(wrapper).toMatchSnapshot();
});

test('should call onChange function when an input value is changed', () => {
  const value = 'Teresa Mendoza';
  const e = {
    target: {
      value,
    },
  };
  wrapper.find('input').simulate('change', e);
  expect(onChange).toHaveBeenLastCalledWith(e);
});

test('should call nextStep when next button is clicked with name input', () => {
  wrapper.setProps({
    formData: {
      name: 'Oluwakemi Dada',
      age: '',
      sex: '',
    },
  });
  wrapper.find(BtnNext).simulate('click');

  expect(nextStep).toHaveBeenCalled();
});

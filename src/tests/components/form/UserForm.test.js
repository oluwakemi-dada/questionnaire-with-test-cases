import React from 'react';
import { shallow } from 'enzyme';
import UserForm from '../../../components/form/UserForm';
import { formData } from '../../fixtures/formData';
import FormOne from '../../../components/form/FormOne';
import FormTwo from '../../../components/form/FormTwo';
import FormThree from '../../../components/form/FormThree';
import Confirm from '../../../components/form/Confirm';

let wrapper;
beforeEach(() => {
  wrapper = shallow(<UserForm />);
});

test('should render FormOne when step = 1 (default)', () => {
  expect(wrapper).toMatchSnapshot();
});

test('should render FormTwo when step = 2', () => {
  wrapper.find(FormOne).prop('nextStep')();

  expect(wrapper).toMatchSnapshot();
});

test('should render FormThree when step = 3', () => {
  wrapper.find(FormOne).prop('nextStep')();
  wrapper.find(FormTwo).prop('nextStep')();

  expect(wrapper).toMatchSnapshot();
});

test('should render Confirm when step = 4', () => {
  wrapper.find(FormOne).prop('nextStep')();
  wrapper.find(FormTwo).prop('nextStep')();
  wrapper.find(FormThree).prop('nextStep')();

  expect(wrapper).toMatchSnapshot();
});

test('should render FormThree when step = 4 and prevStep is called', () => {
  // Go to step 4 (Confirm)
  wrapper.find(FormOne).prop('nextStep')();
  wrapper.find(FormTwo).prop('nextStep')();
  wrapper.find(FormThree).prop('nextStep')();
  // prevStep should return to step 3 (FormThree)
  wrapper.find(Confirm).prop('prevStep')();

  expect(wrapper).toMatchSnapshot();
});

test('should render FormTwo when step = 3 and prevStep is called', () => {
  // Go to step 3 (FormThree)
  wrapper.find(FormOne).prop('nextStep')();
  wrapper.find(FormTwo).prop('nextStep')();
  // prevStep should return to step 2 (FormTwo)
  wrapper.find(FormThree).prop('prevStep')();

  expect(wrapper).toMatchSnapshot();
});

test('should render FormOne when step = 2 and prevStep is called', () => {
  // Go to step 2 (FormTwo)
  wrapper.find(FormOne).prop('nextStep')();
  // prevStep should return to step 1 (FormOne)
  wrapper.find(FormTwo).prop('prevStep')();

  expect(wrapper).toMatchSnapshot();
});

test('should update formData when onChange is called on FormOne', () => {
  const value = 'Oluwakemi Dada';
  const e = {
    target: {
      name: 'name',
      value,
    },
  };
  // Update
  wrapper.find(FormOne).prop('onChange')(e);
  // After update
  expect(wrapper.find(FormOne).prop('formData')).toEqual({
    ...formData,
    name: value,
  });
});

test('should update selectedOption when setSelectedOption is called on FormTwo', () => {
  const value = '23 - 30';
  wrapper.find(FormOne).prop('nextStep')();
  // Before update
  expect(wrapper.find(FormTwo).prop('selectedOption')).toBe('');
  // Update
  wrapper.find(FormTwo).prop('setSelectedOption')(value);
  // After update
  expect(wrapper.find(FormTwo).prop('selectedOption')).toBe(value);
});

test('should update formData when onChange is called on FormThree', () => {
  const value = 'Female';
  const e = {
    target: {
      name: 'sex',
      value,
    },
  };
  wrapper.find(FormOne).prop('nextStep')();
  wrapper.find(FormTwo).prop('nextStep')();
  // Before update
  expect(wrapper.find(FormThree).prop('formData')).toEqual({
    ...formData,
  });
  // Update
  wrapper.find(FormThree).prop('onChange')(e);
  // After update
  expect(wrapper.find(FormThree).prop('formData')).toEqual({
    ...formData,
    sex: value,
  });
});

test('should update alert when setAlertFn is called', () => {
  const msg = 'Name is required';
  // Before update
  expect(wrapper.find(FormOne).prop('alert')).toBe('');
  // Update
  wrapper.find(FormOne).prop('setAlertFn')(msg);
  // After update
  expect(wrapper.find(FormOne).prop('alert')).toBe(msg);
});

import React from 'react';
import Alert from '../layouts/Alert';
import {
  Wrapper,
  PrimaryHeading,
  FormControl,
  Option,
  BtnWrapper,
  BtnPrev,
  BtnNext,
} from './FormResources';

const FormTwo = ({
  nextStep,
  prevStep,
  alert,
  setAlertFn,
  onChange,
  formData,
}) => {
  const { age } = formData;

  // HANDLERS
  const proceed = () => {
    if (age === '') {
      setAlertFn('Age is required');
    } else {
      nextStep();
    }
  };

  const previous = () => {
    prevStep();
  };

  return (
    <Wrapper>
      <PrimaryHeading className='text-center '>Question</PrimaryHeading>

      {alert && <Alert msg={alert} />}

      <FormControl>
        <label>What is your age bracket?</label>

        <Option>
          <input
            name='age'
            type='radio'
            value='Below 18'
            checked={age === 'Below 18'}
            onChange={onChange}
          />
          <label htmlFor='age'>Below 18</label>
        </Option>
        <Option>
          <input
            name='age'
            type='radio'
            value='18 - 22'
            checked={age === '18 - 22'}
            onChange={onChange}
          />
          <label htmlFor='age'>18 - 22</label>
        </Option>
        <Option>
          <input
            name='age'
            type='radio'
            value='23 - 30'
            checked={age === '23 - 30'}
            onChange={onChange}
          />
          <label htmlFor='age'>23 - 30</label>
        </Option>
        <Option>
          <input
            name='age'
            type='radio'
            value='Above 30'
            checked={age === 'Above 30'}
            onChange={onChange}
          />
          <label htmlFor='age'>Above 30</label>
        </Option>
      </FormControl>

      <BtnWrapper>
        <BtnPrev onClick={previous}>Back</BtnPrev>
        <BtnNext onClick={proceed}>Next</BtnNext>
      </BtnWrapper>
    </Wrapper>
  );
};

export default FormTwo;

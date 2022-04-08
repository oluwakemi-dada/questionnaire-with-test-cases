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
  selectedOption,
  setSelectedOption,
}) => {
  // HANDLERS
  const proceed = (e) => {
    // e.preventDefault();
    if (selectedOption === '') {
      setAlertFn('Age is required');
    } else {
      nextStep();
    }
  };

  const previous = (e) => {
    // e.preventDefault();
    prevStep();
  };

  const onChangeHandler = (e) => {
    setSelectedOption(e.target.value);
  };

  return (
    <Wrapper>
      <PrimaryHeading className='text-center '>Question</PrimaryHeading>

      {alert && <Alert msg={alert} />}

      <FormControl>
        <label>What is your age bracket?</label>

        <Option>
          <input
            type='radio'
            value='Below 18'
            checked={selectedOption === 'Below 18'}
            onChange={onChangeHandler}
          />
          <label htmlFor='age'>Below 18</label>
        </Option>
        <Option>
          <input
            type='radio'
            value='18 - 22'
            checked={selectedOption === '18 - 22'}
            onChange={onChangeHandler}
          />
          <label htmlFor='age'>18 - 22</label>
        </Option>
        <Option>
          <input
            type='radio'
            value='23 - 30'
            checked={selectedOption === '23 - 30'}
            onChange={onChangeHandler}
          />
          <label htmlFor='age'>23 - 30</label>
        </Option>
        <Option>
          <input
            type='radio'
            value='Above 30'
            checked={selectedOption === 'Above 30'}
            onChange={onChangeHandler}
          />
          <label htmlFor='age'>Above 30</label>
        </Option>
      </FormControl>

      <BtnWrapper>
        <BtnPrev onClick={(e) => previous(e)}>Back</BtnPrev>
        <BtnNext onClick={(e) => proceed(e)}>Next</BtnNext>
      </BtnWrapper>
    </Wrapper>
  );
};

export default FormTwo;

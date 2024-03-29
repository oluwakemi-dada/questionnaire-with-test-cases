import React from 'react';
import Alert from '../layouts/Alert';
import {
  Wrapper,
  PrimaryHeading,
  FormControl,
  BtnWrapper,
  BtnPrev,
  BtnNext,
} from './FormResources';

const FormThree = ({
  nextStep,
  prevStep,
  onChange,
  formData,
  alert,
  setAlertFn,
}) => {
  const { sex } = formData;

  // HANDLERS
  const proceed = () => {
    if (sex === '') {
      setAlertFn('Sex is required');
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
        <label htmlFor='sex'>What is your sex?</label>
        <select name='sex' value={sex} onChange={(e) => onChange(e)}>
          <option value=''>Select ...</option>
          <option value='Male'>Male</option>
          <option value='Female'>Female</option>
          <option value='Decline to self-identity'>
            Decline to self-identity
          </option>
        </select>
      </FormControl>

      <BtnWrapper>
        <BtnPrev onClick={previous}>Back</BtnPrev>
        <BtnNext onClick={proceed}>Next</BtnNext>
      </BtnWrapper>
    </Wrapper>
  );
};

export default FormThree;

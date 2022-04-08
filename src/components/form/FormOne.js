import React from 'react';
import styled from 'styled-components';
import Alert from '../layouts/Alert';
import { Wrapper, PrimaryHeading, FormControl, BtnNext } from './FormResources';

const BtnWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 4rem;
`;

const FormOne = ({ nextStep, onChange, formData, alert, setAlertFn }) => {
  const { name } = formData;

  // HANDLERS
  const proceed = (e) => {
    e.preventDefault();
    if (name === '') {
      setAlertFn('Name is required');
    } else {
      nextStep();
    }
  };
  return (
    <Wrapper>
      <PrimaryHeading className='text-center '>Question</PrimaryHeading>

      {alert && <Alert msg={alert} />}

      <FormControl>
        <label htmlFor='name'>What is your name?</label>
        <input
          type='text'
          name='name'
          value={name}
          onChange={(e) => onChange(e)}
        />
      </FormControl>

      <BtnWrapper>
        <BtnNext onClick={(e) => proceed(e)}>Next</BtnNext>
      </BtnWrapper>
    </Wrapper>
  );
};

export default FormOne;

import React from 'react';
import styled from 'styled-components';
import { useHistory } from 'react-router-dom';
import {
  DetailsWrapper,
  PrimaryHeading,
  BtnWrapper,
  BtnPrev,
  BtnNext,
} from './FormResources';

const Details = styled.div`
  background: rgba(195, 191, 243, 0.173);
  border-radius: 0.5rem;
  padding: 0 2rem;

  > *:last-child {
    border: 0;
  }
`;

const Items = styled.div`
  border-bottom: ${(props) =>
    props.theme === 'light' ? '1px solid #e4dbe7' : '1px solid #545353'};
  padding: 1rem 0;

  div {
    padding: 1rem 0rem;
    display: flex;
    align-items: center;
  }

  div:first-child {
    font-size: 1.4rem;
  }

  div:last-child {
    font-size: 1.55rem;
  }
`;

const Question = styled.div`
  color: ${(props) => (props.theme === 'light' ? '#565454' : '#b0aeae')};
`;

const Answer = styled.div`
  color: ${(props) => (props.theme === 'light' ? '#1c1c1c' : '#e8e5e5')};
`;

const Confirm = ({ prevStep, formData}) => {
  const history = useHistory();
  const currTheme = localStorage.getItem('theme');

  const { name, age, sex } = formData;

  // HANDLERS
  const proceed = (e) => {
    // e.preventDefault();
    history.push('/success');
  };

  const previous = (e) => {
    // e.preventDefault();
    prevStep();
  };

  return (
    <DetailsWrapper>
      <PrimaryHeading className='text-center '>Confirm</PrimaryHeading>
      <Details>
        <Items theme={currTheme}>
          <Question theme={currTheme}>What is your name?</Question>
          <Answer theme={currTheme}>{name ? name : ''}</Answer>
        </Items>
        <Items theme={currTheme}>
          <Question theme={currTheme}>What is your age bracket?</Question>
          <Answer theme={currTheme}>{age ? age : ''}</Answer>
        </Items>
        <Items theme={currTheme}>
          <Question theme={currTheme}>What is your sex?</Question>
          <Answer theme={currTheme}>{sex ? sex : ''}</Answer>
        </Items>
      </Details>
      <BtnWrapper>
        <BtnPrev onClick={(e) => previous(e)}>Back</BtnPrev>
        <BtnNext onClick={(e) => proceed(e)}>Submit</BtnNext>
      </BtnWrapper>
    </DetailsWrapper>
  );
};

export default Confirm;

import React from 'react';
import styled from 'styled-components';
import { Wrapper } from '../components/form/FormResources';
import SuccessImg from '../assets/images/success.svg';

const Content = styled.div`
  margin-top: 5rem;

  p {
    text-align: center;
    font-size: 2.5rem;
  }
`;

const ImageContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 4rem;

  > * {
    width: 25%;

    @media (max-width: 1200px) {
      width: 30%;
    }

    @media (max-width: 768px) {
      width: 40%;
    }
  }
`;

const SuccessScreen = () => {
  return (
    <Wrapper>
      <Content>
        <p>Your submission was successful 😋</p>

        <ImageContainer>
          <img src={SuccessImg} alt='' />
        </ImageContainer>
      </Content>
    </Wrapper>
  );
};

export default SuccessScreen;

import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { Wrapper } from '../components/form/FormResources';

const Content = styled.div`
  margin-top: 2rem;

  p {
    margin-top: 2rem;
    color: #5e55ef;
    font-weight: 500;
  }
`;

const NotFoundScreen = () => {
  return (
    <Wrapper>
      <Content>
        <h2>Sorry, this page does not exist 😥</h2>
        <Link to='/'>
          <p>Return home 🚀</p>
        </Link>
      </Content>
    </Wrapper>
  );
};

export default NotFoundScreen;

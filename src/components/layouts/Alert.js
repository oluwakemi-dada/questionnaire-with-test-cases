import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  margin: 0 5% 1rem 5%;
`;

const AlertBg = styled.div`
  padding: 0.8rem 2rem;
  border-radius: 0.3rem;
  background: #f7dddc;
  color: #712b29;
  margin-bottom: 2rem;
  font-size: 1.5rem;
`;

const Alert = ({ msg }) => {
  return (
    <Wrapper>
      <AlertBg>{msg}</AlertBg>
    </Wrapper>
  );
};

export default Alert;

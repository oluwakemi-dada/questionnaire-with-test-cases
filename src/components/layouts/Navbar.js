import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { BsMoonStarsFill } from 'react-icons/bs';
import { BsSunFill } from 'react-icons/bs';

const Wrapper = styled.nav`
  height: 8rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 5rem;
  position: relative;

  @media (max-width: 768px) {
    padding: 0 3rem;
  }

  @media (max-width: 450px) {
    padding: 0 2rem;
  }

  h1 {
    font-size: 2.5rem;
    color: #5e55ef;
  }
`;

export const ThemeToggle = styled.div`
  cursor: pointer;
  color: ${(props) => (props.theme === 'light' ? '#000' : '#fff')};
`;

const Navbar = ({ theme, themeToggler }) => {
  const currTheme = localStorage.getItem('theme');

  const onClickHandler = () => {
    themeToggler();
    if (currTheme === 'light') {
      localStorage.setItem('theme', 'dark');
    } else {
      localStorage.setItem('theme', 'light');
    }
  };
  return (
    <Wrapper>
      <h1>
        <Link to='/'>QA</Link>
      </h1>
      <ThemeToggle theme={theme} onClick={onClickHandler}>
        {theme === 'light' ? <BsSunFill /> : <BsMoonStarsFill />}
      </ThemeToggle>
    </Wrapper>
  );
};

export default Navbar;

import React, { useState } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import { lightTheme, darkTheme, GlobalStyles } from './themes';
import styled from 'styled-components';
import Navbar from './components/layouts/Navbar';
import HomeScreen from './screens/HomeScreen';
import SuccessScreen from './screens/SuccessScreen';
import NotFoundScreen from './screens/NotFoundScreen';
import './App.scss';

const StyledApp = styled.div`
  color: ${(props) => props.theme.fontColor};
`;

const App = () => {
  const currTheme = localStorage.getItem('theme');

  if (!currTheme) {
    localStorage.setItem('theme', 'light');
  }

  const [theme, setTheme] = useState(currTheme);

  const themeToggler = () => {
    theme === 'light' ? setTheme('dark') : setTheme('light');
  };

  return (
    <ThemeProvider theme={theme === 'light' ? lightTheme : darkTheme}>
      <GlobalStyles />
      <StyledApp>
        <Router>
          <Navbar theme={theme} themeToggler={themeToggler} />
          <Switch>
            <Route exact path='/' component={HomeScreen} />
            <Route path='/success' component={SuccessScreen} />
            <Route component={NotFoundScreen} />
          </Switch>
        </Router>
      </StyledApp>
    </ThemeProvider>
  );
};

export default App;

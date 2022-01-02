import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import GlobalStyle from '../shared/GlobalStyle';
import theme from '../shared/theme';
import { ThemeProvider } from 'styled-components';

// pages
import IntroPage from '../pages/IntroPage';
import MainPage from '../pages/MainPage';
import QuestionPage from '../pages/QuestionPage';
import PickPosterPage from '../pages/PickPosterPage';
import ResultPage from '../pages/ResultPage';
import ComingSoonPage from '../pages/ComingSoonPage';
import LoginPage from '../pages/LoginPage';

function App() {
  return (
    <React.Fragment>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <BrowserRouter>
          <Route exact path="/" component={IntroPage} />
          <Route exact path="/main" component={MainPage} />
          <Route exact path="/comingsoon" component={ComingSoonPage} />
          <Route exact path="/login" component={LoginPage} />
          <Route exact path="/question" component={QuestionPage} />
          <Route exact path="/result" component={ResultPage} />
        </BrowserRouter>
        <GlobalStyle />
      </ThemeProvider>
    </React.Fragment>
  );
}

export default App;

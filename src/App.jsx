import React from 'react';
import Context from './Context';
import JobContainer from './components/job-container';
import Landing from './components/landing';
import Header from './components/header';
import ContentStyled from './components/content-styled';

const App = () => (
  <>
    <Header />
    <ContentStyled>
      <Landing />
      <Context>
        <JobContainer />
      </Context>
    </ContentStyled>
  </>
);

export default App;

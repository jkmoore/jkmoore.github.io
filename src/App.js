import React from 'react';
import Section from './components/Section.tsx';
import Header from './components/Header.tsx';
import Subheader from './components/Subheader.tsx';
import pageText from './pageText.json';

function App() {
  return (
    <>
      <Header header={pageText.header} />
      <Subheader subheader={pageText.subheader} />
      <Section section={pageText.experience} />
      <Section section={pageText.projects} />
    </>
  );
}

export default App;

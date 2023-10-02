import React from 'react';
import Section from './components/Section.tsx';
import Header from './components/Header.tsx';
import Subheader from './components/Subheader.tsx';
import pageText from './pageText.json';
import styled from "styled-components";

const StyledDiv = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  div {
    width: 48rem;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: left;
  }
  * {
    margin-block-start: 0.67em;
    margin-block-end: 0.67em;
  }
  h1 {
    margin-block-start: 1em;
  }
`;
//TODO change line 14 width value for different breakpoints so you can use devices
//320 to 2000px or so

function App() {
  return (
    <StyledDiv>
      <Header header={pageText.header} />
      <Subheader subheader={pageText.subheader} />
      <Section section={pageText.experience} />
      <Section section={pageText.projects} />
    </StyledDiv>
  );
}

export default App;

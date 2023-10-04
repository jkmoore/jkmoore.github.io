import React from 'react';
import Section from './components/Section.tsx';
import Header from './components/Header.tsx';
import Subheader from './components/Subheader.tsx';
import pageText from './pageText.json';
import { styled, ThemeProvider } from 'styled-components';
import { createStyledBreakpointsTheme } from 'styled-breakpoints';

const theme = createStyledBreakpointsTheme();

const StyledDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  ${({ theme }) => theme.breakpoints.down('sm')} {
    div {
      max-width: 16rem;
      font-size: 0.75rem;
    }
  }
  ${({ theme }) => theme.breakpoints.between('sm', 'md')} {
    div {
      max-width: 28rem;
    }
  }
  ${({ theme }) => theme.breakpoints.between('md', 'xl')} {
    div {
      max-width: 38rem;
    }
  }
  ${({ theme }) => theme.breakpoints.up('xl')} {
    div {
      max-width: 58rem;
    }
  }
  div {
    display: flex;
    flex-direction: column;
    width: 100%;
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
    <ThemeProvider theme={theme}>
    <StyledDiv>
      <Header header={pageText.header} />
      <Subheader subheader={pageText.subheader} />
      <Section section={pageText.experience} />
      <Section section={pageText.projects} />
    </StyledDiv>
    </ThemeProvider>
  );
}

export default App;

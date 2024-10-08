import React from "react";
import styled from "styled-components";

const StyledDiv = styled.div`
  white-space: pre-wrap;
  p {
    margin-top: 0rem;
    line-height: 2rem;
  }
  div:hover {
    background-color: #0c111c;
    h2 {
      color: #00D816;
    }
  }
`;

const StackText = styled.p`
  color: lightgrey;
`;

const StyledHeader = styled.h1`
  color: #00D816;
`;

export default function Section({ section }) {
  if (!section) {
    return null;
  }
  return (
    <StyledDiv>
      <StyledHeader>{section.header}</StyledHeader>
      {section.content
        ? section.content.map((contentObject) => (
          <a href={contentObject.link} key={contentObject.title}>
            <div>
              <h2>{contentObject.title}</h2>
              <p>{contentObject.time}</p>
              <p>{contentObject.desc}</p>
              {contentObject.stack && <StackText>{contentObject.stack}</StackText>}
            </div>
          </a>
          ))
        : null}
    </StyledDiv>
  );
}

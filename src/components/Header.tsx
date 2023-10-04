import React from "react";
import styled from "styled-components";

const StyledHeader = styled.h1`
  font-weight: 700;
  margin-bottom: 0rem;
`;

const StyledHeaderDesc = styled.h2`
  margin-top: 1rem;
  font-weight: 700;
`;

export default function Header({ header }) {
  if (!header) {
    return null;
  }
  return (
    <div>
      <StyledHeader>{header.greeting}</StyledHeader>
      <StyledHeaderDesc>{header.desc}</StyledHeaderDesc>
    </div>
  );
}

import React from "react";
import styled from "styled-components";

const StyledHeader = styled.h1`
  font-weight: 700;
`;

const StyledHeaderDesc = styled.h2`
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

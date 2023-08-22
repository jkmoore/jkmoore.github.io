import React from "react";

export default function Header({ subheader }) {
  if (!subheader) {
    return null;
  }
  return (
    <>
      <p>{subheader.email}</p>
      <p>{subheader.github}</p>
    </>
  );
}

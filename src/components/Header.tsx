import React from "react";

export default function Header({ header }) {
  if (!header) {
    return null;
  }
  return (
    <div>
      <h1>{header.greeting}</h1>
      <h2>{header.desc}</h2>
    </div>
  );
}

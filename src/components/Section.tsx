import React from "react";

export default function Section({ section }) {
  if (!section) {
    return null;
  }
  return (
    <>
      <h1>{section.header}</h1>
      {section.content
        ? section.content.map((contentObject) => (
            <>
              <h2>
                <a href={contentObject.link}>{contentObject.title}</a>
              </h2>
              <p>{contentObject.time}</p>
              <p>{contentObject.desc}</p>
            </>
          ))
        : null}
    </>
  );
}

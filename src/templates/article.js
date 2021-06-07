import React from "react";
import { graphql } from "gatsby";

export default function Template({ data }) {
  const { asciidoc } = data;
  const { document, html } = asciidoc;

  return (
    <div className="container">
      <h1>{document.title}</h1>
      <div
        className="content"
        dangerouslySetInnerHTML={{ __html: html }}
      />
    </div>
  );
}

export const pageQuery = graphql`
  query($id: String!) {
    asciidoc(id: { eq: $id }) {
      html
      document {
        title
      }
    }
  }
`;

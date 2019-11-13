// @title: <<gatsby-002-env-variable-v2>> program written in gatsby-JS.
// @desc: Creates a simple helloWorld started with environment variables.
// @author: Mustapha Benmbarek.
// @Copyright © 2019 All rights reserved.
// @version: 1.0.

import React from "react";
import { graphql, useStaticQuery } from "gatsby";

const IndexPage = () => {
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          title
          description
          author
          url
        }
      }
    }
  `);

  return (
    <div>
      <h1>{data.site.siteMetadata.title}</h1>
      <h2>{data.site.siteMetadata.author}</h2>
      <p>
        {data.site.siteMetadata.description} {data.site.siteMetadata.url}
      </p>
    </div>
  );
};

export default IndexPage;

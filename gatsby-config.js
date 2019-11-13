/* @title: <<gatsby-002-env-variable-v2>> program written in gatsby-JS.
 * @desc: Creates a simple helloWorld started with environment variables.
 * @author: Mustapha Benmbarek.
 * @Copyright © 2019 All rights reserved.
 * @version: 1.0.
 */

let activeEnv =
  process.env.GATSBY_ACTIVE_ENV || process.env.NODE_ENV || "development";

console.log(`Using environment config: '${activeEnv}'`);

require("dotenv").config({ path: `.env.${activeEnv}` });

module.exports = {
  siteMetadata: {
    title: process.env.GATSBY_APP_TITLE,
    author: process.env.GATSBY_APP_AUTHOR,
    description: process.env.GATSBY_APP_DESC,
    url: process.env.GATSBY_APP_URL
  }
};

import React from "react"
import { StaticQuery, graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const Description = () => {
  return (
    <StaticQuery
      query={graphql`
        query {
          site {
            siteMetadata {
              description
            }
          }
        }
      `}
      render={data => <div>{data.site.siteMetadata.description}</div>}
    />
  )
}

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <Description />
    <br />
  </Layout>
)

export default IndexPage

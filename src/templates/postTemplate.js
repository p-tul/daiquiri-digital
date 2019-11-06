import React from "react"
import { graphql } from "gatsby"
import Img from "gatsby-image"
import styled from 'styled-components'

// COMPONENTS
import SEO from "../components/seo"
import Layout from "../components/layout"
import Container from "../components/container"
import ContactBanner from "../components/contactBanner"

// STYLED COMPONENTS
const Blog = styled.div`
  padding: 1rem 2rem;
  background: #fcfcfc;
  h1 {
    font-size: 2.2rem;
  }

  blockquote {
    text-align: center;
    font-size: 1.2rem;
    margin: 1.5em 0;
    padding: 0.5em 10px;
    line-height: 2.5rem;
    font-style: italic;
  }
  blockquote:before {
    color: #ccc;
    content: open-quote;
    font-size: 4em;
    line-height: 0.1em;
    margin-right: 0.25em;
    vertical-align: -0.4em;
  }
  blockquote:after {
    color: #ccc;
    content: close-quote;
    font-size: 4em;
    line-height: 0.1em;
    vertical-align: -0.4em;
  }
  blockquote p {
    display: inline;
  }

  @media (max-width: 768px) {
    padding: 1rem 0.5rem;
  }
`

export default function PostTemplate({ data }) {
  const post = data.markdownRemark
  let featuredImgFluid = post.frontmatter.featuredImage.childImageSharp.fluid

  return (
    <Layout>
      <SEO title={post.frontmatter.title} description={post.excerpt} />
      <Container>
        <div>
          <h1 style={{textAlign: "center", marginTop: "3rem"}}>{post.frontmatter.title}</h1>
          <Img fluid={featuredImgFluid} style={{maxHeight: "400px", width: "100%", marginBottom: "3rem"}}/>
          {/* <div dangerouslySetInnerHTML={{ __html: post.tableOfContents}} /> */}
          <Blog dangerouslySetInnerHTML={{ __html: post.html }} />
          <h6 style={{ paddingLeft: "2rem" }}>
            Posted by {post.frontmatter.author} on {post.frontmatter.date}
          </h6>
        </div>
      </Container>
      <ContactBanner />
    </Layout>
  )
}

export const postQuery = graphql`
  query BlogPostByPath($path: String!) {
    markdownRemark(frontmatter: { path: { eq: $path } }) {
      html
      tableOfContents (
        pathToSlugField: "frontmatter.path"
        maxDepth: 2
      )
      frontmatter {
        path
        title
        author
        date
        featuredImage {
          childImageSharp {
            fluid(maxWidth: 800) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    }
  }
`

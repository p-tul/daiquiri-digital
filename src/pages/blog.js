import React from "react"
import { graphql, Link } from "gatsby"
import Img from "gatsby-image"
import styled from 'styled-components'

import Layout from "../components/layout"
import SEO from "../components/seo"
import Container from "../components/container"
import ContactBanner from "../components/contactBanner"

const BlogWrapper = styled.div`
  display: grid;
  grid-template-columns: auto auto;
  grid-gap: 3rem;
`

const BlogPost = styled.div`

`

const BlogPage = ({ data }) => {
  return (
    <Layout>
      <SEO title="Blog" />
      <Container>
        <h1 style={{ textAlign: "center" }}>Blog</h1>

        <BlogWrapper>
        {data.allMarkdownRemark.edges.map(post => (
          <BlogPost key={post.node.id}>
            <Link to={post.node.frontmatter.path}>
              <Img
                fluid={
                  post.node.frontmatter.featuredImage.childImageSharp.fluid
                }
              />
            </Link>
            <br />
            <Link to={post.node.frontmatter.path}>
              <h3>
                {post.node.frontmatter.title}{" "}
                <span style={{ color: "gray", fontSize: "1rem" }}>
                  - {post.node.frontmatter.date}
                </span>
              </h3>
            </Link>
            <p>
              {post.node.excerpt}
            </p>
            <hr />
          </BlogPost>
        ))}
        </BlogWrapper>
      </Container>
      <ContactBanner />
    </Layout>
  )
}

export const query = graphql`
  query {
    allMarkdownRemark(filter: { frontmatter: { published: { eq: true } } }) {
      edges {
        node {
          id
          frontmatter {
            title
            date
            author
            path
            featuredImage {
              childImageSharp {
                fluid(maxWidth: 800) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
          }
          excerpt
        }
      }
    }
  }
`

export default BlogPage

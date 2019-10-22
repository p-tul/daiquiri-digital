import React from 'react'
import { graphql } from 'gatsby'

import SEO from '../components/seo'
import Layout from '../components/layout'
import Container from '../components/container'
import ContactBanner from '../components/contactBanner'
 
export default function PostTemplate({ data }) {
  const post = data.markdownRemark

  return (
    <Layout>
      <SEO title={post.frontmatter.title} description={post.excerpt} />
      <Container>
      <div>
      
      <div dangerouslySetInnerHTML={{ __html: post.html }} 
        style={{
          padding: '1rem 2rem',
          background: '#fcfcfc'
        }}
      />
        <h6 style={{paddingLeft: "2rem"}}>
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
      frontmatter {
        path
        title
        author
        date
      }
    }
  }
`
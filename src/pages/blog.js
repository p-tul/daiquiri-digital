import React from 'react'
import { graphql, Link } from 'gatsby'

import Layout from "../components/layout"
import SEO from "../components/seo"
import Container from '../components/container'
import ContactBanner from '../components/contactBanner'

const BlogPage = ({data}) => {
    return (
       <Layout>
           <SEO title="Blog" />
           <Container>
            <h1 style={{textAlign: "center"}}>Blog</h1>
              {data.allMarkdownRemark.edges.map(post => (
                  <div key={post.node.id}>
                      <Link to={post.node.frontmatter.path} >
                        <h3>{post.node.frontmatter.title} <span style={{ color: 'gray', fontSize: '1rem' }}>- {post.node.frontmatter.date}</span></h3>
                      </Link>
                      <p>{post.node.excerpt}
                          <Link 
                              style={{
                                  display: 'inline'
                              }} 
                              to={post.node.frontmatter.path} >
                                  read more
                          </Link>
                      </p>
                      <hr/>
                  </div>
              ))}
           </Container>
           <ContactBanner /> 
        </Layout> 
    )
}

export const query = graphql`
  query {
    allMarkdownRemark(filter: {frontmatter: {published: {eq: true}}}) {
      edges {
        node {
          id
          frontmatter {
            title
            date
            updated
            author
            path
          }
          excerpt
        }
      }
    }
  }
  `

export default BlogPage
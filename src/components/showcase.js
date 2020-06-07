import React from 'react'
import { StaticQuery, graphql } from 'gatsby'
import styled from 'styled-components'

import BackgroundImage from 'gatsby-background-image'

const Showcase = ({className}) => (
    <StaticQuery
        query={graphql`
            query {
                allImageSharp(filter: {fluid: {originalName: {eq: "pineapple-guy.jpg"}}}) {
                    edges {
                      node {
                        fluid {
                          originalName
                          aspectRatio
                          base64
                          srcSetWebp
                          srcWebp
                          src
                          srcSet
                          originalImg
                        }
                      }
                    }
                }
            }
        `}
        render={data => {
            const imageData = data.allImageSharp.edges.node.fluid
            return (
                <BackgroundImage
                    Tag='background'
                    className={className}
                    fluid={imageData}
                    backgroundColor={'#f4f4f4'}
                >
                    <h1>Test Heading</h1>
                </BackgroundImage>
            )
        }}
    />
)

export default Showcase;
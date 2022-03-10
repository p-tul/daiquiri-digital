import React from 'react'
import { StaticQuery, graphql } from 'gatsby'
import styled from 'styled-components'
import BackgroundImage from 'gatsby-background-image'

// STYLES
const StyledBackgroundImage = styled(BackgroundImage)`
    height: calc(100vh - 100px);
    display: flex;
    align-items: center;
    padding: 8rem;

    @media (max-width: 1000px) {
        padding: 2rem;
    }

    @media (max-width: 760px) {
        height: 400px;
    }
`

const Heading = styled.h1`
    font-size: 5rem;
    font-weight: bold;
    font-style: italic;

    span {
        color: rgb(126, 217, 87);
    }

    @media (max-width: 760px) {
        font-size: 3rem;
    }

    @media (max-width: 410px) {
        font-size: 2rem;
    }

`

const Showcase = () => (
    <StaticQuery
        query={graphql`
            query {
                imageSharp(fluid: {originalName: {eq: "showcase-img.png"}}) {
                    id
                    fluid {
                        ...GatsbyImageSharpFluid
                    }
                }
            }
        `}
        render={data => {
            // const imageData = data.allImageSharp.edges.node.fluid
            return (
                <StyledBackgroundImage
                    Tag='section'
                    fluid={data.imageSharp.fluid}
                    backgroundColor={'#f4f4f4'}
                >
                    <Heading>
                        <span>Hospitality</span>
                        <br/>
                        Web Design
                    </Heading>
                </StyledBackgroundImage>
            )
        }}
    />
)

export default Showcase;
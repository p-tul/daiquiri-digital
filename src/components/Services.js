import React from 'react'
import { StaticQuery, graphql } from 'gatsby'
import styled from 'styled-components'

// COMPONENTS
import ServiceCard from '../components/ServiceCard'

// STYLES
const Container = styled.section`
    text-align: center;
    padding: 4rem 0;
`

const Wrapper = styled.div`
    display: flex;
    justify-content: space-evenly;
    flex-wrap: wrap;
    max-width: 1200px;
    margin: 0 auto;
`
const Heading = styled.h2`

`

const Subheading = styled.p`

`

// TEMPLATE
const Services = () => (
    <StaticQuery
        query={graphql`
            query  {
                health: imageSharp(fluid: {originalName: {eq: "health-check.png"}}) {
                    id
                    fixed (width: 150) {
                        ...GatsbyImageSharpFixed
                    }
                }
                design: imageSharp(fluid: {originalName: {eq: "design.png"}}) {
                    id
                    fixed (width: 150) {
                        ...GatsbyImageSharpFixed
                    }
                }
                mail: imageSharp(fluid: {originalName: {eq: "mail-list.png"}}) {
                    id
                    fixed (width: 150) {
                        ...GatsbyImageSharpFixed
                    }
                }
                cms: imageSharp(fluid: {originalName: {eq: "cms.png"}}) {
                    id
                    fixed (width: 150) {
                        ...GatsbyImageSharpFixed
                    }
                }
                seo: imageSharp(fluid: {originalName: {eq: "seo.png"}}) {
                    id
                    fixed (width: 150) {
                        ...GatsbyImageSharpFixed
                    }
                }
            }
        `}
        render={data => {
            return (
                <Container>
                    <Heading>Services</Heading>
                    <Subheading>Set your business apart</Subheading>
                    <Wrapper>
                        <ServiceCard src={data.health.fixed} title='Health Check' />
                        <ServiceCard src={data.design.fixed} title='Web Design' />
                        <ServiceCard src={data.mail.fixed} title='Mailing List' />
                        <ServiceCard src={data.cms.fixed} title='CMS' />
                        <ServiceCard src={data.seo.fixed} title='SEO' />
                    </Wrapper>
                </Container>
            )
        }}
    />
)

export default Services

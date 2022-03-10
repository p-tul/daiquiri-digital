import React from 'react'
import styled from 'styled-components'
import Img from 'gatsby-image'

// STYLES
const Container = styled.div`
    margin: 0 0.5rem;

`

const StyledImage = styled(Img)`
    :hover {
        transform: scale(1.01);
    }
`

const ServiceCard = ({src, title}) => {
    return (
        <Container className="serviceCard">
            <StyledImage fixed={src} alt={title} />
            <h5>{title}</h5>
        </Container>
    )
}

export default ServiceCard

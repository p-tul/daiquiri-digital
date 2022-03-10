import React from 'react'
import Img from 'gatsby-image'
import BackgroundImage from 'gatsby-background-image'
import styled from 'styled-components'

// STYLES
const Item = styled.a`
    position: relative;
`

const Logo = styled(Img)`
    width:  70%;
    opacity: 0;
    transition: opacity 300ms ease-in-out;
    
    :hover {
        opacity: 1;
    }
`

const LogoWrapper = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100%;
    min-height: 300px;
`

const Background = styled(Img)`
    position: absolute;
    background: #f6f6f6;
    top: 0;
    left: 0;
    /* width: 100%;
    height: 100%; */
`

// TEMPLATE
const GalleryImage = ({fluid, background, link}) => {
    return (
        <Item href={link} target='_blank' rel='noopener' >
            {/* <Background fluid={background} /> */}
            <LogoWrapper>
                <Logo fluid={fluid} />
            </LogoWrapper>
        </Item>
    )
}

export default GalleryImage

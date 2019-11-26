import React from "react"
import styled from 'styled-components'

// COMPONENTS
import Layout from "../components/layout"
import SEO from "../components/seo"
import Container from '../components/container'
import ContactBanner from '../components/contactBanner'

// IMAGES
import KurraMockup from '../images/kurrajong-hotel-mockup.png'
import CinDavies from '../images/cin-davies-mockup.png'
import BridgeLane from '../images/bridge-lane-mockup.png'

// STYLED COMPONENTS
const PortfolioWrapper = styled.div`
    display: flex;
    flex: 1 1 1;

    @media (max-width: 768px) {
        flex-direction: column;
    }
`

const PortfilioItem = styled.div`
    margin: 1rem;
    text-align: center;
    width: 33.333%;

    background: #f3f3f3;
    border: 1px solid #ddd;
    border-radius: 0.5rem;
    -webkit-box-shadow: 0px 7px 11px 4px rgba(189,189,189,0.3);
    -moz-box-shadow: 0px 7px 11px 4px rgba(189,189,189,0.3);
    box-shadow: 0px 7px 11px 4px rgba(189,189,189,0.3);
    transition: transform 100ms;
    
    :hover {
        transform: scale(1.01);                
    }

    @media (max-width: 768px) {
        width: 100%;
        margin: 1rem 0;
    }

`

const StyledHeader = styled.div`
    text-align: center;

    hr {
        width: 75%;
        margin-left: auto;
        margin-right: auto;
    }

    @media (max-width: 768px) {
        h1 {
        }
    }
`


const WorkPage = () => (
  <Layout>
    <SEO title="Work" />

    <Container>
        <StyledHeader style={{textAlign: "center"}}>
            <h1>Our Work</h1>
            <p>We are very proud of the work we do and loving showing off whenever we can.</p>
            <hr/>
        </StyledHeader>
        <PortfolioWrapper>
            <PortfilioItem>
                <a href="http://www.kurrajonghotel.com.au" target="_blank" rel="noopener noreferrer" >
                    <img src={KurraMockup} alt="Kurrajong Hotel" />
                </a>
                <h2>Kurrajong Hotel</h2>
            </PortfilioItem>
            <PortfilioItem>
                <a href="https://www.cindavies.com/" target="_blank" rel="noopener noreferrer" >
                    <img src={CinDavies} alt="Cin Davies" />
                </a>
                <h2>Cin Davies</h2>
            </PortfilioItem>
            <PortfilioItem>
                <a href="https://p-tul.github.io/bridgelane/" target="_blank" rel="noopener noreferrer" >
                    <img src={BridgeLane} alt="Bridge Lane" />
                </a>
                <h2>Bridge Lane</h2>
            </PortfilioItem>
        </PortfolioWrapper>


    </Container>
	
    <ContactBanner />
  </Layout>
)

export default WorkPage;

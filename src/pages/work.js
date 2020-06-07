import React from "react"
import styled from 'styled-components'

// COMPONENTS
import Layout from "../components/layout"
import SEO from "../components/seo"
import Container from '../components/container'
import ContactBanner from '../components/contactBanner'

// IMAGES
import Kurrajong from '../images/kurrajong.png'
import CinDavies from '../images/cin-davies.png'
import BridgeLane from '../images/bridge-lane.png'
import Quaintrelle from '../images/quaintrelle.png'
import HartsPub from '../images/harts-pub.png'
import Gurdys from '../images/gurdys.png'
import PMBC from '../images/pmbc.png'
import SpiritsLedger from '../images/spirits-ledger.png'


// STYLED COMPONENTS
const PortfolioWrapper = styled.div`
    display: grid;
    grid-template-columns: repeat( auto-fit, minmax(350px, 1fr) );

    gap: 3rem;
    align-items: center;
`

const PortfilioItem = styled.div`
    text-align: center;
    transition: transform 100ms;
    padding: 1px;
    background: ${props => props.dark ? '#222' : ''};

    img {
        max-height: 200px;
    }

    h2 {
        display: none;
    }

    :hover {

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
                <a href="https://quaintrellecandles.com.au/" target="_blank" rel="noopener noreferrer" >
                    <img src={Quaintrelle} alt="Quaintrelle" />
                </a>
                <h2>Quaintrelle</h2>
            </PortfilioItem>
            <PortfilioItem dark>
                <a href="https://spiritsledger.com.au/" target="_blank" rel="noopener noreferrer" >
                    <img src={SpiritsLedger} alt="Spirits Ledger" />
                </a>
                <h2>Spirits Ledger</h2>
            </PortfilioItem>
            <PortfilioItem>
                <a href="https://www.pickledmonkey.beer/" target="_blank" rel="noopener noreferrer" >
                    <img src={PMBC} alt="Pickled Monkey Brewing Co" />
                </a>
                <h2>Pickled Monkey Brewing Co</h2>
            </PortfilioItem>
            <PortfilioItem>
                <a href="https://gurdys.com.au/" target="_blank" rel="noopener noreferrer" >
                    <img src={Gurdys} alt="Gurdys" />
                </a>
                <h2>Gurdys</h2>
            </PortfilioItem>
            <PortfilioItem>
                <a href="https://www.hartspub.com.au/" target="_blank" rel="noopener noreferrer" >
                    <img src={HartsPub} alt="Harts Pub" />
                </a>
                <h2>Harts Pub</h2>
            </PortfilioItem>
            <PortfilioItem>
                <a href="http://www.kurrajonghotel.com.au" target="_blank" rel="noopener noreferrer" >
                    <img src={Kurrajong} alt="Kurrajong Hotel" />
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

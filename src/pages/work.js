import React from "react"
import { StaticQuery, graphql } from 'gatsby-image'
import styled from 'styled-components'

// COMPONENTS
import Layout from "../components/layout"
import SEO from "../components/seo"
import Container from '../components/container'
import ContactBanner from '../components/ContactBanner'
import Gallery from '../components/Gallery'
import GalleryImage from '../components/GalleryImage'

// IMAGES
import Kurrajong from '../images/work/kurrajong.png'
import CinDavies from '../images/work/cin-davies.png'
import BridgeLane from '../images/work/bridge-lane.png'
import Quaintrelle from '../images/work/quaintrelle.png'
import HartsPub from '../images/work/harts-pub.png'
import Gurdys from '../images/work/gurdys.png'
import PMBC from '../images/work/pmbc.png'
import SpiritsLedger from '../images/work/spirits-ledger.png'


// STYLED COMPONENTS
const PortfolioWrapper = styled.div`
    display: grid;
    grid-template-columns: repeat( auto-fit, minmax(350px, 1fr) );

    gap: 3rem;
    align-items: center;
`

// const PortfilioItem = styled.div`
//     text-align: center;
//     transition: transform 100ms;
//     padding: 1px;
//     background: ${props => props.dark ? '#222' : ''};

//     img {
//         max-height: 200px;
//     }

//     h2 {
//         display: none;
//     }

//     :hover {

//     }
// `

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


const WorkPage = () => {
    return (
        <Layout>
          <SEO title="Work" />
      
          <Container>
              <StyledHeader style={{textAlign: "center"}}>
                  <h1>Our Work</h1>
                  <p>We are very proud of the work we do and loving showing off whenever we can.</p>
                  <hr/>
              </StyledHeader>
      
              <Gallery />
          </Container>
          
          <ContactBanner />
        </Layout>
    )
}

export default WorkPage;

import React from "react"
import styled from "styled-components"
import { graphql } from 'gatsby'

// COMPONENTS
import Layout from "../components/layout"
import SEO from "../components/seo"
import Container from "../components/container"
import Button from "../components/button"
import ContactBanner from "../components/contactBanner"

// IMAGES
import BackgroundImg from "../images/showcase-img.png"
import MockUp from "../images/bridge-lane-mockup.png"
import HealthCheck from "../images/icons/health-check.png"
import WebDesign from "../images/icons/design.png"
import MailingList from "../images/icons/mail-list.png"
import Cms from "../images/icons/cms.png"
import Seo from "../images/icons/seo.png"
import WorkExample from '../images/kurrajong-hotel-mockup-2.png'

// STYLED COMPONENTS
const Showcase = styled.div`
  background: url(${BackgroundImg}) center center no-repeat;
  background-size: cover;
  width: 100%;
  height: calc(100vh - 100px);
  padding: 4rem 2rem;
  h1 {
    padding-top: 8rem;
    font-size: 5rem;
    font-weight: bold;
    font-style: italic;
  }

  @media (max-width: 768px) {
    height: 50vh;
    h1 {
      padding-top: 1rem;
      font-size: 3rem;
    }
  }
`

const About = styled.div`
  background: #f8f9fa;
  .body {
    margin: 9rem 0;
  }
  .flex {
    display: flex;
  }

  @media (max-width: 1024px) {
	  .flex {
		  flex-direction: column;
	  }
	  .body {
		  text-align: center;
		  margin: 0;
		  padding: 2rem;
	  }
  }
`

const Services = styled.div`
  text-align: center;
  padding: 4rem 0;
  .serviceCards {
    display: flex;
	justify-content: space-evenly;
	flex-wrap: wrap;
  }
  .serviceCard {
	width: 150px;
	margin: 0 0.5rem;
  }
`

const Work = styled.div`
  padding: 4rem 0;

  img {
    max-width: 50%;
    border-radius: 1rem;
  }

  .WorkWrapper {
    display: flex;
  }

  .WorkTextWrapper {
    margin-left: 3rem;
  }

  @media (max-width: 768px) {
    text-align: center;
    img {
      max-width: 100%;
    }

    .WorkWrapper {
      flex-direction: column;
    }

    .WorkTextWrapper {
      margin-left: 0rem;
    }
  }
`



const IndexPage = ({ data }) => (
  <Layout>
    <SEO title={data.site.siteMetadata.title} />

    <Showcase>
      <Container>
        <h1><span style={{color: "#7ed957"}}>Hospitality</span><br/>Web Design</h1>
      </Container>
    </Showcase>

    <About>
      <Container>
          <div className="flex">
            <div>
              <img src={MockUp} alt="website mockup" />
            </div>
            <div className="body">
              <h2>Boutique Web Design Agency</h2>
              <p>
                Whether you are just starting and need a new website or you want
                to improve your current site, we understand the requirements of
                small business and ensure you put your best foot forward online.
              </p>
              <p>
                We specialise in all forms of hospitality business and know what
                is involved in separating your business from the rest.
              </p>
              <p>You take care of your guests and we'll take care of you.</p>
            </div>
          </div>
      </Container>
    </About>

    <Services>
      <Container>
        <h2>Services</h2>
        <p className="subHeader">Set your business apart</p>
        <div className="serviceCards">
          <div className="serviceCard">
            <img src={HealthCheck} alt="Health Check" />
            <h5>Health Check</h5>
          </div>
          <div className="serviceCard">
            <img src={WebDesign} alt="Website Design" />
            <h5>Website Design</h5>
          </div>
          <div className="serviceCard">
            <img src={MailingList} alt="Mailing List" />
            <h5>Mailing List</h5>
          </div>
          <div className="serviceCard">
            <img src={Cms} alt="CMS" />
            <h5>Content Management</h5>
          </div>
          <div className="serviceCard">
            <img src={Seo} alt="SEO" />
            <h5>SEO</h5>
          </div>
        </div>
        <br/>
        <Button path="/pricing" text="View Pricing" />
      </Container>
    </Services>

    <Work>
      <Container>
        <div className="WorkWrapper">
          <img src={WorkExample} alt="Portfolio Example"/>
          <div className="WorkTextWrapper">
            <h2>Some of Our Happy Customers</h2>
            <p>
              We are very proud of work so we shamelessly show it off and we'd love to show you off too. 
            </p>
            <br/>
            <Button path="/work" text="View Portfolio" />
          </div>
        </div>
      </Container>
    </Work>

    <ContactBanner />
  </Layout>
)

export const query = graphql`
  query {
    
    site {
      siteMetadata {
        title
      }
    }
  }
`

export default IndexPage;

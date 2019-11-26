import React from "react"
import styled from "styled-components"
import { graphql, StaticQuery } from "gatsby"
import Img from "gatsby-image"
import BackgroundImage from 'gatsby-background-image'

// COMPONENTS
import Layout from "../components/layout"
import SEO from "../components/seo"
import Container from "../components/container"
import Button from "../components/button"
import ContactBanner from "../components/contactBanner"

// IMAGES
import BackgroundImg from "../images/showcase-img.png"
// import MockUp from "../images/bridge-lane-mockup.png"
import HealthCheck from "../images/icons/health-check.png"
import WebDesign from "../images/icons/design.png"
import MailingList from "../images/icons/mail-list.png"
import Cms from "../images/icons/cms.png"
import Seo from "../images/icons/seo.png"
import WorkExample from "../images/kurrajong-hotel-mockup-2.png"

// STYLED COMPONENTS
const Showcase = styled.div`
  background: url(${BackgroundImg}) center center no-repeat;
  background-size: cover;
  width: 100%;
  height: calc(100vh - 100px);
  h1 {
    padding-top: 12rem;
    font-size: 5rem;
    font-weight: bold;
    font-style: italic;
  }

  @media (max-width: 768px) {
    height: 30vh;
    h1 {
      padding-top: 1rem;
      font-size: 3rem;
    }
  }

  @media (max-width: 655px) {
    h1 {
      font-size: 2.5rem;
      padding-top: 2rem;
    }
  }

  @media (max-width: 428px) {
    h1 {
      font-size: 2rem;
      padding-top: 4rem;
    }
  }
`

const About = styled.div`
  background: #f8f9fa;
  .body {
    margin: 3rem 0;
  }
  .flex {
    display: flex;
  }
  .img-fluid {
    width: 800px;
  }

  @media (max-width: 1124px) {
    .flex {
      flex-direction: column-reverse;
    }
    .body {
      text-align: center;
      margin: 0;
      padding: 2rem;
    }
    .center {
      margin: 0 auto;
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

    h5 {
      margin-top: 1rem;
    }
  }
`

const Work = styled.div`
  padding: 4rem 0;

  .workImage {
    width: 50%;
    
    img {
      border-radius: 1rem;
    }
  }

  .WorkWrapper {
    display: flex;
    width: 100%;
  }

  .WorkTextWrapper {
    width: 50%;
    margin-left: 3rem;
  }

  @media (max-width: 768px) {
    text-align: center;
    .workImage {
      width: 100%;
    }

    .WorkWrapper {
      flex-direction: column;
    }

    .WorkTextWrapper {
      margin-left: 0rem;
      margin-top: 3rem;
      width: 100%;
    }
  }
`

// Background Image
// const BackgroundSection =({className}) => (
//   <StaticQuery
//     query={graphql`
//       query {
//         desktop: file(relativePath: {regex: "/showcase-img.png/"}) {
//           childImageSharp {
//             fluid(quality: 90, maxWidth: 1920) {
//               ...GatsbyImageSharpFluid_withWebp
//             }
//           }
//         }
//       }
//     `}
//     render={data => {
//       // Set ImageData.
//       // const imageData = data.desktop.childImageSharp.fluid
//       return (
//         <BackgroundImage
//           Tag="section"
//           className={className}
//           fluid={data.desktop.childImageSharp.fluid}
//           backgroundColor={`#040e18`}
//         >
//           <h1>Hello gatsby-background-image</h1>
//         </BackgroundImage>
//       )
//     }}
//   />
// )

// const StyledBackgroundSection = styled(BackgroundSection)`
//   width: 100%;
//   background-position: bottom center;
//   background-repeat: repeat-y;
//   background-size: cover;
// `





const IndexPage = ({ data }) => (
  <Layout>
    <SEO title={data.site.siteMetadata.title} />

    <Showcase>
      <Container>
        <h1>
          <span style={{ color: "#7ed957" }}>Hospitality</span>
          <br />
          Web Design
        </h1>
      </Container>
    </Showcase>

    {/* <StyledBackgroundSection /> */}

    <About>
      <Container>
        <div className="flex">
          <div className="center img-fluid">
            <Img fluid={data.mockupImage.childImageSharp.fluid} alt="website mockup"/>
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
            <Img fluid={data.healthCheck.childImageSharp.fluid} alt="Health Check" />
            <h5>Health Check</h5>
          </div>
          <div className="serviceCard">
            <Img fluid={data.webDesign.childImageSharp.fluid} alt="Website Design" />
            <h5>Website Design</h5>
          </div>
          <div className="serviceCard">
            <Img fluid={data.mailingList.childImageSharp.fluid} alt="Mailing List" />
            <h5>Mailing List</h5>
          </div>
          <div className="serviceCard">
            <Img fluid={data.cms.childImageSharp.fluid} alt="CMS" />
            <h5>Content Management</h5>
          </div>
          <div className="serviceCard">
            <Img fluid={data.seo.childImageSharp.fluid} alt="SEO" />
            <h5>SEO</h5>
          </div>
        </div>
        <br />
        <Button path="/pricing" text="View Pricing" />
      </Container>
    </Services>

    <Work>
      <Container>
        <div className="WorkWrapper">
          <div className="workImage">
            <Img fluid={data.workImage.childImageSharp.fluid} alt="Portfolio Example" />
          </div>
          <div className="WorkTextWrapper">
            <h2>Some of Our Happy Customers</h2>
            <p>
              We are very proud of work so we shamelessly show it off and we'd
              love to show you off too.
            </p>
            <br />
            <Button path="/work" text="View Portfolio" />
          </div>
        </div>
      </Container>
    </Work>

    <ContactBanner />
  </Layout>
)

export const metaQuery = graphql`
  query {
    mockupImage: file(relativePath: {regex: "/bridge-lane-mockup.png/"}) {
      id
      childImageSharp {
        fluid (maxWidth: 800) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    healthCheck: file(relativePath: {regex: "/health-check.png/"}) {
      id
      childImageSharp {
        fluid (maxWidth: 150) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    webDesign: file(relativePath: {regex: "/design.png/"}) {
      id
      childImageSharp {
        fluid (maxWidth: 150) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    mailingList: file(relativePath: {regex: "/mail-list.png/"}) {
      id
      childImageSharp {
        fluid (maxWidth: 150) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    cms: file(relativePath: {regex: "/cms.png/"}) {
      id
      childImageSharp {
        fluid (maxWidth: 150) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    seo: file(relativePath: {regex: "/seo.png/"}) {
      id
      childImageSharp {
        fluid (maxWidth: 150) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    workImage: file(relativePath: {regex: "/kurrajong-hotel-mockup-2.png/"}) {
      id
      childImageSharp {
        fluid (maxWidth: 1000) {
          ...GatsbyImageSharpFluid
        }
      }
    }

    site {
      siteMetadata {
        title
      }
    }
  }
`



export default IndexPage

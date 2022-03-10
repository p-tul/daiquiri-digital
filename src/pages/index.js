import React from "react"
import styled from "styled-components"
import { graphql, StaticQuery } from "gatsby"
import Img from "gatsby-image"
import BackgroundImage from 'gatsby-background-image'

// COMPONENTS
import Layout from "../components/layout"
import SEO from "../components/seo"
import Showcase from '../components/Showcase'
import Services from '../components/Services'
import Container from "../components/container"
import Button from "../components/Button"
import ContactBanner from "../components/ContactBanner"

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



const IndexPage = ({ data }) => (
	<Layout>
		<SEO title={data.site.siteMetadata.title} />

		<Showcase />

		<About>
			<Container>
				<div className="flex">
					<div className="center img-fluid">
						<Img fluid={data.mockupImage.childImageSharp.fluid} alt="website mockup" />
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

		<Services />

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

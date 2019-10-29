import React from "react"
import styled from 'styled-components'

// COMPONENTS
import Layout from "../components/layout"
import SEO from "../components/seo"
import Container from '../components/container'
import ContactBanner from '../components/contactBanner'

// IMAGES
import Banner from '../images/insta-food.jpg'

// STYLED COMPONENTS
const ServiceCard = styled.div`
	display: grid;
	padding-bottom: 3rem;
	grid-template-columns: auto auto auto auto;
	grid-gap: 1.5rem 1rem;
	text-align: center;
	div {
		background: #fefefe;
		border-radius: 0.5rem;
		border: 2px solid #ccc;
		padding: 1.4rem 0.8rem;
		-webkit-box-shadow: 0px 7px 11px 4px rgba(189,189,189,0.3);
		-moz-box-shadow: 0px 7px 11px 4px rgba(189,189,189,0.3);
		box-shadow: 0px 7px 11px 4px rgba(189,189,189,0.3);
	}

	h4 {
		margin-bottom: 0.2rem;
	}
	p {
		font-size: 0.8rem;
		margin-bottom: 0;
	}

	@media (max-width: 768px) {
		grid-template-columns: auto auto;
	}
`

const AboutPage = () => (
  <Layout>
    <SEO title="About" />
	<Container>
		<div
			style={{textAlign: 'center'}}
		>
			<h1>Who We Are</h1>
			<p>
				Daquiri Digital is a small digital agency that focuses on hospitality and small business. Having worked 
				in and with hospitality for over a decade, we know what it takes to get your name out there.
			</p>
		</div>
		
	</Container>

	<img src={Banner} alt="insta-food" />
	
	<Container>
		<div
			style={{
				textAlign: 'center'
			}}
		>
			<h1>What We Do</h1>
			<p>
			We take care of your entire online presence from your website, social media profiles, directory listings and email lists.
			</p>
		</div>
	</Container>

	<div style={{background: ''}} >
		<Container>
			<ServiceCard>
				<div>
					<h4>Web Design</h4>
					<p >Custom Designed sites that mirror your business and it's vision</p>
				</div>
				<div>
					<h4>Logo Design</h4>
					<p >Make your brand unmistakable with our full brand design services</p>
				</div>
				<div>
					<h4>CMS</h4>
					<p >Update images, text and other infomation on your site when ever you need</p>
				</div>
				<div>
					<h4>SEO</h4>
					<p >We develop your site so that it's easy to find on Search Engines like Google</p>
				</div>
				<div>
					<h4>Mailing</h4>
					<p >Capture your guests emails and send regular newsletters or promotions</p>
				</div>
				<div>
					<h4>Responsive</h4>
					<p >Your site works perfectly on mobiles, tablets, laptop and desktops</p>
				</div>
				<div>
					<h4>Analytics</h4>
					<p >Track the traffic to your site or Social Media profile</p>
				</div>
				<div>
					<h4>Google</h4>
					<p >Guide potential customers directly to your door</p>
				</div>
			</ServiceCard>
		</Container>
	</div>

  <ContactBanner />

  
  </Layout>
)

export default AboutPage

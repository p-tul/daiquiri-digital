import React from "react"
import styled from 'styled-components'

// COMPONENTS
import Layout from "../components/layout"
import SEO from "../components/seo"
import Container from '../components/container'
import ContactBanner from '../components/contactBanner'
import PricingCard from '../components/pricingCard'

// STYLED COMPONENTS  
const PricingWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;

  @media (max-width: 768px) {
    flex-direction: column;
    align-content: stretch;
    ul {
      width: 100%;
      margin: 2rem 0;
    }
  }
`

const PricingPage = () => (
  <Layout>
    <SEO title="Pricing" />
    <Container>
      <h1
        style={{
          textAlign: 'center'
        }}
      >
        Pricing
      </h1>
      <PricingWrapper>
        <PricingCard
          title="Health Check"
          price="500"
        >
          <li>Refresh Existing Design</li>
          <li>Add Mobile Responsiveness</li>
          <li>Check SEO Best Practices</li>
          <li>Organise Google Profile</li>
          <li>Manage Email &amp; Hosting</li>
        </PricingCard>
        <PricingCard
          title="Start-Up"
          price="750"
        >
          <li>5 Page Website</li>
          <li>Custom Layout & Design</li>
          <li>Mobile Responsive</li>
          <li>SEO Ready</li>
          <li>Email</li>
          <li>Mailing List Capture*</li>
          <li>CMS</li>
          <li>Social Media Links</li>
        </PricingCard>
        <PricingCard
          title="Full Service"
          price="1250"
        >
          <li>Start-Up +</li>
          <li>Pages: Unlimited</li>
          <li>Complete Google Profile</li>
          <li>Revisions: 2</li>
          <li>Events Calendar</li>
          <li>Online Bookings*</li>
        </PricingCard>
      </PricingWrapper>
      <div style={{textAlign: "center", width: "50%", margin: "3rem auto"}}>
        <small>
          If you have specific requirements, get in touch and we can arrange a tailored package to suit your needs and budget. * May require 3rd Party Subscription
        </small>
      </div>
    </Container>
    
    <ContactBanner />
  </Layout>
)

export default PricingPage

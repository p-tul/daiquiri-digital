import React from "react"
import styled from 'styled-components'

import Layout from "../components/layout"
import SEO from "../components/seo"
import Container from '../components/container'

// STYLED COMPONENTS
const Form = styled.form`
  flex: 1 1 auto;
`

const StyledFormGroup = styled.div`
  margin-bottom: 1rem;
`

const Label = styled.label`
  display: inline-block;
  margin-bottom: 0.5rem;
`

const Input = styled.input`
  display: block;
  width: 100%;
  padding: 0.375rem 0.75rem;
  height: calc(1.5rem + 0.75rem + 2px);
  font-size: 1rem;
  line-height: 1.5;
  color: #495057;
  background-colour: white;
  background-clip: padding-box;
  border: 1px solid #ced4da;
  border-radius: 0.25rem;
  transition: border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;
`

const TextArea = styled.textarea`
  display: block;
  width: 100%;
  padding: 0.375rem 0.75rem;
  height: auto;
  font-size: 1rem;
  line-height: 1.5;
  color: #495057;
  background-colour: white;
  background-clip: padding-box;
  border: 1px solid #ced4da;
  border-radius: 0.25rem;
  overflow: auto;
  resize: vertical;
  transition: border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;
`

const Button = styled.button`
  cursor: pointer;
  user-select: none;
  background-color: transparent;
  border: 1px solid transparent;
  padding: 0.5rem 1rem;
  font-size: 1.25rem;
  line-height: 1.5;
  border-radius: 0.3rem;
  color: black;
  border-color: black;
  :hover {
    color: white;
    background: #333;
    border-color: #333;
  }
  transition: all 300ms;
`

const ContentWrapper = styled.div`
  display: flex;
  flex: 1 1 auto;

  @media (max-width: 768px) {
    flex-direction: column;

  }
`

const TextWrapper = styled.div`
  max-width: 400px;
  margin-right: 3rem;

  @media (max-width: 768px) {
    text-align: center;
    margin: 0 auto;
  }
`

const ContactPage = ({data}) => (
  <Layout>
    <SEO title="Contact" />
    <Container>
      <ContentWrapper>
        <TextWrapper>
          <h1>Contact Us</h1>
          <hr/>
          <p>Get in contact with us to discuss your next project or if you want to improve your current site.</p>
          <hr/>
        </TextWrapper>
        <Form method="POST" class="flex-fill" name="contact-form" data-netlify="true">
          <StyledFormGroup>
            <Label for="contactName">Name</Label>
            <Input type="text" class="form-control" id="contactName" placeholder="Name" name="Name" required />
          </StyledFormGroup>
          <StyledFormGroup>
            <Label for="contactEmail">Email</Label>
            <Input type="email" class="form-control" id="contactEmail" placeholder="name@email.com" name="Email" required />
          </StyledFormGroup>
          <StyledFormGroup>
            <Label for="contactMessage">Message</Label>
            <TextArea class="form-control" name="Message" id="contactMessage" rows="10"></TextArea>
          </StyledFormGroup>
          <StyledFormGroup>
            <div data-netlify-recaptcha="true"></div>
          </StyledFormGroup>
          <Button type="submit">Submit</Button>
        </Form>
      </ContentWrapper>
    </Container>
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

export default ContactPage

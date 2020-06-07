import React from "react"
// import Link from "gatsby"
import styled from 'styled-components'

// COMPONENTS
import Container from "./container"

// IMAGES
import Facebook from '../images/icons/facebook-logo.png'
import Instagram from '../images/icons/instagram.png'


// STYLED COMPONENTS
const StyledFooter = styled.footer`
  background: #343a40;
  padding-top: 3rem;
  color: #f8f9fa;
  text-align: center;
  #footer-copy {
    margin-top: 2rem;
    font-size: 0.6rem;
    border-top: 1px solid #525252;
    padding-top: 1rem;
  }
  img {
    margin: 1rem;
  }
`

export default function Footer() {
  return (
    <StyledFooter>
      <Container>
        <div>
          <h5>Let's Build Something Great</h5>
          <div>
            <div>
              <a href="https://www.facebook.com/daiquiridigital/">
                <img src={Facebook} alt="facebook logo" style={{height: "60px"}} />
              </a>
              <a href="https://www.instagram.com/daiquiri_digital/">
                <img src={Instagram} alt="instagram logo" style={{height: "60px"}} />
              </a>
            </div>
          </div>
          <div id="footer-copy">
            <div>Copyright &copy; 2019 Daiquiri Digital</div>
          </div>
        </div>
      </Container>
    </StyledFooter>
  )
}

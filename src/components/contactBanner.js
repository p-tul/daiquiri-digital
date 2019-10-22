import React from 'react'
import styled from 'styled-components'

import Container from './container'
import Button from './button'


const Contact = styled.div`
  text-align: center;
  background: #6271ff;
  color: white!important;
  padding: 3rem;
  a {
      color: white;
      border-color: white;
  }
  a:hover {
      border-color: white;
      background: rgba(255, 255, 255, 0.1);
  }
`

const contactBanner = () => {
    return (
        <Contact>
            <Container>
                <h2>Contact Us Today</h2>
                <p>We can tailor a solution to your specific needs. So get in touch and let's get to work!</p>
                <Button
                path="/contact"
                text="Contact Us"
                />
            </Container>
        </Contact>
    )
}

export default contactBanner
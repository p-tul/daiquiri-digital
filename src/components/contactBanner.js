import React from 'react'
import styled from 'styled-components'

import Container from './container'
import Button from './Button'


const Contact = styled.div`
  text-align: center;
  background: #ffd22e;
  padding: 3rem;
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
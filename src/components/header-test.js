import React from "react"
import { Link } from "gatsby"
import styled from "styled-components"
import { Navbar, Nav, Container } from "react-bootstrap"
import Logo from "../images/dd-logo-main-md.png"

// STYLED COMPONENTS
const LogoLink = styled.img`
  height: 50px;
  margin: 0;

  @media (max-width: 768px) {
    margin: 0 auto;
  }

  @media (max-width: 350px) {
    height: 40px;
  }
`

const NavLink = styled(Link)`
  color: #4e4e4e;
  text-decoration: none;
  padding: 4px;
  line-height: 1.5;
  padding: 0.5rem;
  transition: color 200ms ease-in;

  :hover {
    color: #000;
    text-decoration: none;
  }
`

function Header() {
  return (
    <Navbar bg="light" expand="md">
      <Container>
        <Navbar.Brand href="/">
          <LogoLink src={Logo} alt="Daiquiri Digital Logo" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ml-auto">
            <NavLink to="/">Home</NavLink>
            <NavLink to="/about">About</NavLink>
            <NavLink to="/work">Work</NavLink>
            {/* <NavLink to="/pricing">Pricing</NavLink> */}
            <NavLink to="/blog">Blog</NavLink>
            <NavLink to="/contact">Contact</NavLink>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

export default Header

import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import styled from "styled-components"

// COMPONENTS
import Container from "./container"

// IMAGES
import Logo from "../images/dd-logo-main-md.png"

// STYLED COMPONENTS
const StyledHeader = styled.header`
  background: white;
  margin-bottom: 0;

  @media (max-width: 768px) {
  }
`

const LogoLink = styled.img`
  height: 50px;
  margin: 0;

  @media (max-width: 768px) {
    margin: 0 auto;
  }
`

const NavList = styled.ul`
  list-style: none;
  float: right;
  line-height: 50px;

  @media (max-width: 768px) {

  }
`

const NavItem = styled.li`
  display: inline-block;
  margin-right: 1rem;

  @media (max-width: 768px) {
  }
`

const NavLink = styled(Link)`
  color: black;
  textdecoration: none;
  padding: 4px;
`


const Header = ({ siteTitle }) => (
  <StyledHeader>
    <Container>
      <Link to="/">
        <LogoLink src={Logo} alt="Daiquiri Digital Logo" />
      </Link>

      <NavList>
        <NavItem>
          <NavLink to="/">Home</NavLink>
        </NavItem>
        <NavItem>
          <NavLink to="/about">About</NavLink>
        </NavItem>
        <NavItem>
          <NavLink to="/work">Work</NavLink>
        </NavItem>
        <NavItem>
          <NavLink to="/pricing">Pricing</NavLink>
        </NavItem>
        {/* <NavItem>
          <NavLink to="/blog">Blog</NavLink>
        </NavItem> */}
        <NavItem>
          <NavLink to="/contact">Contact</NavLink>
        </NavItem>
      </NavList>

    </Container>
  </StyledHeader>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header

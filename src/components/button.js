// button.component.js
import React from 'react';
import { Link } from 'gatsby'
import styled from 'styled-components';

const StyledLink = styled(Link)`
    margin: 20px 0;
    padding: 12px 16px;
    border: 1px solid black;
    border-radius: 5px;
    color: black;
    transition: all 300ms;
  
    :hover {
        color: white;
        background: #333;
        border-color: #333;
    }
`

const Button = ({ text, path }) => (
  <StyledLink
    to={path}
  >
    {text}
  </StyledLink>
);

export default Button;
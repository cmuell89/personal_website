import React from 'react';
import Link from 'gatsby-link';
import styled from 'styled-components';


// Styled components
const StyledNavLink = styled(Link)`
  display: block;
  color: rgba(0, 0, 0, 0.6);
  text-decoration: none;
  text-transform: uppercase;
  font-weight: 600;
  letter-spacing: 1px;
  font-size: 0.85rem;
  padding: 0.5em 0;
  transition: all .15s ease-in;

  &:active,
  &:focus,
  &:visited {
    color: rgba(0, 0, 0, 0.6);
  }

  &:hover {
    color: rgba(0, 0, 0, 1);    
  }
`;

const StyledSecondaryNavLink = StyledNavLink.extend`
  color: rgba(0, 0, 0, 0.2);
  
  &:active,
  &:focus,
  &:visited {
    color: rgba(0, 0, 0, 0.2);
  } 

  &:hover {
    color: rgba(0, 0, 0, 0.5);    
  }   
`;

export default function NavLinks() {
  return (
    <span>
      <StyledNavLink
        to="/"
        title="Home"
        activeStyle={{ color: 'rgba(0,0,0,1)'}}
      >Home</StyledNavLink>
      <StyledNavLink
        to="/research"
        title="Research"
        activeStyle={{ color: 'rgba(0,0,0,1)'}}
      >Research</StyledNavLink>
      <StyledNavLink
        to="/about"
        title="About"
        activeStyle={{ color: 'rgba(0,0,0,1)'}}
      >About</StyledNavLink>
      <StyledNavLink
        to="/posts"
        title="Posts"
        activeStyle={{ color: 'rgba(0,0,0,1)'}}
      >Posts</StyledNavLink>
      <StyledNavLink
        to="/contact"
        title="Contact"
        activeStyle={{ color: 'rgba(0,0,0,1)'}}
      >Contact</StyledNavLink>
    </span>
  );
}

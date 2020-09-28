import React from 'react';
import styled from 'styled-components';

import { NavLinks, SocialGrid } from '../../components';
import media from '../../utils/mediaQueryTemplates';


// Styled components
const StyledSidebar = styled.div`
  display: none;
  
  ${media.xsmall`
    display: block;
    width: 300px;
    margin-top: 75px;
    flex-shrink: 0;
    float: left;
    padding: 1em 0 1em 4em;
  `} 
`;
const StyledNav = styled.nav`
  position: fixed;
`;

const StyledIcon = styled.div`
  position: fixed;
  margin-top: 180px;
`;


export default function Sidebar() {
  return (
        <StyledSidebar>
          <StyledNav>
            <NavLinks />
          </StyledNav>
          <StyledIcon>
            <SocialGrid />
          </StyledIcon>
        </StyledSidebar>
      )
};

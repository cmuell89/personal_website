import React from 'react';
import styled from 'styled-components';
import { StaticQuery, graphql } from "gatsby"
import media from '../../utils/mediaQueryTemplates';

import {
  FaClipboardList, FaLinkedinIn, FaTwitter, FaGithub
} from 'react-icons/fa';

// Styled components

const StyledSocialGrid = styled.div`
  display: grid;
  row-gap: .5em;

  ${media.xsmall`
    grid-template-columns: 3em 3em;
    row-gap: 1.5em;
  `}

  ${media.small`
    grid-template-columns: 3em 3em;
    row-gap: 1.5em;
  `}

  ${media.medium`
    grid-template-columns: 3em 3em;
    row-gap: 1.5em;
  `}

  ${media.large`
    grid-template-columns: 3em 3em;
    row-gap: 1.5em;
  `}
`;

export default function SocialGrid() {
  return (
    <StaticQuery
      query={graphql`
          query sidebarQuery {
            cv: file(relativePath: { eq: "CV.pdf" }) {
              name
              extension
              publicURL
            }
          }
        `}
      render={data => (
        <StyledSocialGrid>
          <div class="item"><a href={data.cv.publicURL}
            title="CV"><FaClipboardList size={24}/></a></div>
          <div class="item"><a
            href='https://www.linkedin.com/in/carl-mueller-794b9a26/'
            title="LinkedIn"><FaLinkedinIn size={24}/></a>
          </div>
          <div class="item"><a
            href='https://twitter.com/cmuell89'
            title="Twitter"><FaTwitter size={24}/></a>
          </div>
          <div class="item"><a
            href='https://github.com/cmuell89'
            title="GitHub"><FaGithub size={24}/></a>
          </div>
        </StyledSocialGrid>
      )} />
  )
};

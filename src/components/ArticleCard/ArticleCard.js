import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Link from 'gatsby-link';
import styled from 'styled-components';
import { readableColor, rgba } from 'polished';
import Img from 'gatsby-image';

import media from '../../utils/mediaQueryTemplates';


// Styled components
const StyledArticle = styled.article`
  position: relative;
  margin-bottom: 10px;
  /* No cross browser 'break-inside' property being supported yet: */
  display: inline-block;
  background: black;
  width: 100%;
  max-width: 300px;
  max-height: 640px;
  overflow: hidden;
  transition: all .15s ease-in;

  /* Adjust for size of card */
  ${props => props.size === 'small' && `
    max-width: 200px;

    & h2 {
      font-size: .75em;
    }

    & a {
      padding: 0.6em;
    }
  `}

  ${props => props.size === 'medium' && `
  max-width: 300px;

  & h2 {
    font-size: 1.25em;
  }

  & a {
    padding: 0.6em;
  }
`}

  &:hover {
    opacity: 0.85;
  }

  ${media.small`
    max-height: 580px;
  `}

  ${media.medium`
    max-height: 520px;
  `}

  ${media.large`
    max-height: 500px;
  `}    
`;
const ArticleCardLink = styled(Link)`
  display: block;
  text-decoration: none;
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  padding: 1.5em;
`;
const ArticleImage = styled(Img)`
  width: 100%;
  opacity: 0.9;
  margin: 0;
  padding: 0;
  /* Fixes small margin at bottom of image */
  vertical-align: middle;
`;
const ArticleCardContent = styled.span`
  display: flex;
  flex-direction: column;
  height: 100%;
`;
const ArticleCardTitle = styled.h2`
  margin-bottom: auto;
  color: ${readableColor('#000')};
  background-color: rgba(0, 0, 0, 0.6);
  font-size: 1.5em;
  line-height: 1.1em;
  word-wrap: normal;
  padding-top: 0.5em;
  
  ${media.xsmall`
  font-size: 1.5em;
  padding-top: 0;
`}

  ${media.small`
    font-size: 1.75em;
    padding-top: 0;
  `}

  ${media.medium`
    font-size: 2.0em;
    padding-top: 0;
  `}
`;
const ArticleCardMeta = styled.span`
  margin-top: auto;
  color: ${rgba(readableColor('#000'), 0.7)};
  background-color: rgba(0, 0, 0, 0.6);
  ${props => props.size === 'small' && `
    display: none;
  `}
`;

export default class ArticleCard extends Component {
  static propTypes = {
    post: PropTypes.object.isRequired,
    size: PropTypes.oneOf(['small']),
  };

  render() {
    const { post, size } = this.props;
    const { slug } = post.fields;
    const { title, date, featuredImage } = post.frontmatter;

    return (
      <StyledArticle size={size}>
        {featuredImage && (<ArticleImage class='center' fluid={featuredImage.childImageSharp.fluid} />)}
        <ArticleCardLink to={slug}>
          <ArticleCardContent>
            <ArticleCardTitle>{title}</ArticleCardTitle>
            <ArticleCardMeta size={size}>
              <span>{date}</span>
            </ArticleCardMeta>            
          </ArticleCardContent>
        </ArticleCardLink>
      </StyledArticle>
    );
  }
}

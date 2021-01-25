import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { graphql } from 'gatsby'

import Layout from '../components/layout';
import { ArticleCard } from '../components';
import media from '../utils/mediaQueryTemplates';

// Styled components
const StyledWall = styled.div`
  /* Center content on xsmall devices */
  display: grid;
  grid-template-columns: 100%;
  grid-gap: 1em;
  padding: 1em;

  ${media.xsmall`
    padding: 0;
    grid-template-columns: 10em 10em 10em;
    grid-gap: 1em;
  `}


  ${media.small`
    padding: 0;
    grid-template-columns: 12em 12em 12em;
    grid-gap: 1em;
  `}

  ${media.medium`
    grid-template-columns: 12em 12em 12em;
    grid-gap: 1em;
  `}
`;

// Styled components
const ContentContainer = styled.div`
  max-width: 40em;
  padding: 0 1em;
`;

export default function Posts({ data, location }) {
  const { edges: posts } = data.allMarkdownRemark;
  return (
    <Layout location={location}>
      <ContentContainer>
      <h1>List of all my posts...</h1>
      <StyledWall>
        {posts.map(({ node: post }) => (<ArticleCard key={post.id} post={post} size="medium" />))}
      </StyledWall>
      </ContentContainer>
    </Layout>
  );
};

Posts.propTypes = {
  data: PropTypes.object.isRequired
};

export const postsQuery = graphql`
  query postsQuery {
    allMarkdownRemark(
      sort: { fields: [frontmatter___date], order: DESC },
      filter: {
        frontmatter: { draft: { eq: false }}
      }
    ) {
      edges {
        node {
          id
          fields {
            slug
          }
          frontmatter {
            authors
            date(formatString: "MMM DD, YYYY")
            title
            type
            featuredImage {
              childImageSharp {
                fluid(maxWidth: 650, maxHeight: 800) {
                  ...GatsbyImageSharpFluid
                  ...GatsbyImageSharpFluidLimitPresentationSize
                }
              }
            }
          }
        }
      }
    }
  }
`;

import React from 'react';
import { graphql } from 'gatsby' 
import PropTypes from 'prop-types';
import styled from 'styled-components';

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

  ${media.small`
    padding: 0;
    grid-template-columns: 20em 20em;
    grid-gap: 1em;
  `}

  ${media.medium`
    grid-template-columns: 20em 20em;
    grid-gap: 2em;
  `}
`;


export default function ResearchIndex({ data, location }) {
  const { edges: posts } = data.allMarkdownRemark;

  return (
    <Layout location={location}>
      <StyledWall>
        {posts.map(({ node: post}) => (<ArticleCard key={post.id} post={post} />))}
      </StyledWall>
    </Layout>
  );
};

ResearchIndex.propTypes = {
  data: PropTypes.object.isRequired
};

export const pageQuery = graphql`
  query ResearchIndexQuery {
    allMarkdownRemark(
      sort: { fields: [frontmatter___date], order: DESC },
      filter: {
        frontmatter: { draft: { eq: false }, type: {ne: "post"} }
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
                fluid(maxWidth: 650) {
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

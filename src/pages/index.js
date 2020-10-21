import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { graphql } from 'gatsby'

import Layout from '../components/layout';
import { ArticleCard } from '../components';
import media from '../utils/mediaQueryTemplates';
import Img from "gatsby-image"

// Styled components
const StyledWall = styled.div`
  /* Center content on xsmall devices */
  display: grid;
  grid-template-columns: 100%;
  grid-gap: 1em;
  padding: 1em;

  ${media.xsmall`
    padding: 0;
    grid-template-columns: 10em 10em;
    grid-gap: 1em;
  `}


  ${media.small`
    padding: 0;
    grid-template-columns: 12em 12em;
    grid-gap: 1em;
  `}

  ${media.medium`
    grid-template-columns: 12em 12em;
    grid-gap: 1em;
  `}
`;

// Styled components
const ContentContainer = styled.div`
  max-width: 40em;
  padding: 0 1em;
`;

export default function Home({ data, location }) {
  const { edges: posts } = data.allMarkdownRemark;
  return (
    <Layout location={location}>
      <ContentContainer>
        <h1>Welcome!</h1>
        <br></br>
        <section>
          <p>I am a PhD student at the University of Colorado Boulder studying Robotics in the <a href="https://www.cairo-lab.com/" title="CAIRO Lab">CAIRO lab</a> under Professor Bradley Hayes's advisement.</p>
          <Img fluid={data.imageOne.childImageSharp.fluid} />
        </section>
      <br></br>
      <h2>Recent Posts...</h2>
      <StyledWall>
        {posts.map(({ node: post }) => (<ArticleCard key={post.id} post={post} size="small" />))}
      </StyledWall>
      </ContentContainer>
    </Layout>
  );
};

Home.propTypes = {
  data: PropTypes.object.isRequired
};

export const homeQuery = graphql`
  query HomeQuery {
    imageOne: file(relativePath: { eq: "carl_mueller_headshot_large.jpeg" }) {
      childImageSharp {
        fluid(maxWidth: 420) {
          ...GatsbyImageSharpFluid
          ...GatsbyImageSharpFluidLimitPresentationSize
        }
      }
    }
    allMarkdownRemark(
      sort: { fields: [frontmatter___date], order: DESC },
      filter: {
        frontmatter: { draft: { eq: false }, type: {ne: "research"} }
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

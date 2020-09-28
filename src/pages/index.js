import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

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
        {posts.map(({ node: post }) => (<ArticleCard key={post.id} post={post} size="medium" />))}
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
    imageOne: file(relativePath: { eq: "carl_headshot.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 400) {
          ...GatsbyImageSharpFluid
          ...GatsbyImageSharpFluidLimitPresentationSize
        }
      }
    }
    cv: file(relativePath: { eq: "CV.pdf" }) {
      name
      extension
      publicURL
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

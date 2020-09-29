import React from 'react';
import Img from "gatsby-image"
import { graphql } from 'gatsby'
import styled from 'styled-components';

import Layout from '../components/layout';


// Styled components
const ContentContainer = styled.div`
  max-width: 40em;
  padding: 0 1em;

  & figure figcaption {
      font-size: 14px;
  }
`;

export default function CommentPolicy({ data, location }) {
  console.log(data);
  console.log(location)
  return (
    <Layout location={location}>
      <ContentContainer>
        <h1>My site's comment policy.</h1>
        <p>I encourage respectful and thoughtful discussion about my research and life's ongoings.</p>
        <Img fluid={data.SawyerImage.childImageSharp.fluid} />
      </ContentContainer>
    </Layout>
  )
};

export const commentPolicyQuery = graphql`
  query {
    SawyerImage: file(relativePath: { eq: "PensiveSawyer.jpg"}) {
      childImageSharp {
        fluid(maxWidth: 600) {
          ...GatsbyImageSharpFluid
          ...GatsbyImageSharpFluidLimitPresentationSize
        }
      }
    }
  } 
`
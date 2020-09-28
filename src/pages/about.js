import React from 'react';
import { graphql } from 'gatsby'
import styled from 'styled-components';

import Layout from '../components/layout';
import Img from "gatsby-image"

// Styled components
const ContentContainer = styled.div`
  max-width: 40em;
  padding: 0 1em;
`;

export default function About({ data, location }) {

  return (
    <Layout location={location}>
      <ContentContainer>
        <h1>About</h1>
        <section>
          <p>Currently, I am senior member of <a href="https://www.cairo-lab.com/" title="CAIRO Lab">CAIRO lab</a> at CU Boulder, advised by Professor Bradley Hayes. I also helped co-found a technology startup called <a href="https://lightninginabot.com" title="Lightning in a Bot">Lightning in a Bot</a>, which developed the Shoppy Bot product, a novel reporting software for ecommerce businesses.</p>
          <figure>
            <Img fluid={data.imageOne.childImageSharp.fluid} />
            <figcaption>Venice Beach with Missy circa 2015.</figcaption>
          </figure>
        </section>
        <h3>A Brief History Of Time</h3>
        <section>
          <p>In the summer of 2007, I left my home state of Massachusetts and moved to California to attend the University of California - Santa Barbara.
            After graduating in 2011 with a B.S. in Biopsychology, I was fortunate to be hired by QualTek Molecular Laboratories where I worked for three years as a research scientist. During my time in CA, I developed a keen interest in neuroscience and an obsession with computing technology and theory. I also co-founded of Lightning in a Bot, Inc with a good friend. We got our start as a natural language UI-driven business analytics company and expanded to custom software development. Running a company was one of the most rewarding experiences of my life, but I knew I wanted to learn more about computer science and about technologies designed to work with human beings. I made my way to Boulder, Colorado and started my PhD in Robotics / Human-Robot Interaction. </p>
          <br></br>
        </section>
        <h3>When I'm not yelling at robots...</h3>
        <section>
          <p>I love to mountain bike. While I enjoy road cycling, gravel, and cyclocross, mountain biking is absolutely the most fun thing in the world.</p>
          <figure>
            <Img fluid={data.imageTwo.childImageSharp.fluid} />
            <figcaption>CU Boulder Short Track Racing.</figcaption>
          </figure>
          <br></br>
          <p>While I have only recently picked up snowboarding a couple of years ago, it gets more and more fun each season. And the views in the CO mountains are unreal.</p>
          <figure>
            <Img fluid={data.imageThree.childImageSharp.fluid} />
            <figcaption>The summit of Arapahoe Basin, one of my favorite places on earth.</figcaption>
          </figure>
          <br></br>
          <p>I also enjoy cooking, playing bass guitar, watching movies, and the Celtics.</p>
        </section>
      </ContentContainer>
    </Layout>
  );
};

export const query = graphql`
  query {
    imageOne: file(relativePath: { eq: "VeniceWithMissy.jpg"}) {
      childImageSharp {
        fluid(maxWidth: 600) {
          ...GatsbyImageSharpFluid
          ...GatsbyImageSharpFluidLimitPresentationSize
        }
      }
    }
    imageTwo: file(relativePath: { eq:  "CUShortTrack.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 600) {
          ...GatsbyImageSharpFluid
          ...GatsbyImageSharpFluidLimitPresentationSize
        }
      }
    }
    imageThree: file(relativePath: { eq: "Abasin.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 600) {
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
  } 
`
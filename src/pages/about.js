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

const FigCaption = styled.figcaption`
  font-size: 14px;
`;

export default function About({ data, location }) {

  return (
    <Layout location={location}>
      <ContentContainer>
        <h1>About</h1>
        <section>
          <p>Currently, I am senior member of <a href="https://www.cairo-lab.com/" title="CAIRO Lab">CAIRO lab</a> at CU Boulder, advised by Professor Bradley Hayes. I also helped co-found a technology startup called <a href="https://lightninginabot.com" title="Lightning in a Bot">Lightning in a Bot</a>, which developed the Shoppy Bot product, a novel reporting software for ecommerce businesses.</p>
          <figure>
            <Img fluid={data.VeniceWithMissy.childImageSharp.fluid} />
            <FigCaption>Venice Beach with Missy circa 2015.</FigCaption>
          </figure>
        </section>
        <h3>A Brief History Of Time</h3>
        <section>
          <p>In the summer of 2007, I left my home state of Massachusetts and moved to California to attend the University of California - Santa Barbara.
            After graduating in 2011 with a B.S. in Biopsychology, I was fortunate to be hired by QualTek Molecular Laboratories where I worked for three years as a research scientist. During my time in CA, I developed a keen interest in neuroscience and an obsession with computing technology and theory. I also co-founded of Lightning in a Bot, Inc with a good friend. We got our start as a natural language UI-driven business analytics company and expanded to custom software development. Running a company was one of the most rewarding experiences of my life, but I knew I wanted to learn more about computer science and about technologies designed to work with human beings. I made my way to Boulder, Colorado and started my PhD in Robotics / Human-Robot Interaction.
          </p>
          <figure>
            <Img fluid={data.FrostedFlatirons.childImageSharp.fluid} />
            <FigCaption>Early morning view of the Flatirons after a health snowfall.</FigCaption>
          </figure>
          <br></br>
        </section>
        <h3>When I'm not yelling at robots...</h3>
        <section>
          <p>I love to mountain bike. While I enjoy road cycling, gravel, and cyclocross, mountain biking is absolutely the most fun thing in the world.</p>
          <figure>
            <Img fluid={data.CUShortTrack.childImageSharp.fluid} />
            <FigCaption>CU Boulder Short Track Racing.</FigCaption>
          </figure>
          <br></br>
          <p>I recently picked up snowboarding a couple of years ago, but it gets more and more fun each season. The views in the CO mountains are unreal.</p>
          <figure>
            <Img fluid={data.Abasin.childImageSharp.fluid} />
            <FigCaption>The summit of Arapahoe Basin, one of my favorite places on earth.</FigCaption>
          </figure>
          <br></br>
          <p>I also enjoy cooking, playing bass guitar, watching movies, and Boston sports.</p>
          <figure>
            <Img fluid={data.RedSoxDodgers.childImageSharp.fluid} />
            <FigCaption>Red Sox Dodgers circa 2013. The time flies!</FigCaption>
          </figure>
        </section>
      </ContentContainer>
    </Layout>
  );
};

export const query = graphql`
  query {
    VeniceWithMissy: file(relativePath: { eq: "VeniceWithMissy.jpg"}) {
      childImageSharp {
        fluid(maxWidth: 600) {
          ...GatsbyImageSharpFluid
          ...GatsbyImageSharpFluidLimitPresentationSize
        }
      }
    }
    FrostedFlatirons: file(relativePath: { eq:  "FrostedFlatirons.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 600) {
          ...GatsbyImageSharpFluid
          ...GatsbyImageSharpFluidLimitPresentationSize
        }
      }
    }
    CUShortTrack: file(relativePath: { eq:  "CUShortTrack.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 600) {
          ...GatsbyImageSharpFluid
          ...GatsbyImageSharpFluidLimitPresentationSize
        }
      }
    }
    Abasin: file(relativePath: { eq: "Abasin.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 600) {
          ...GatsbyImageSharpFluid
          ...GatsbyImageSharpFluidLimitPresentationSize
        }
      }
    }
    RedSoxDodgers: file(relativePath: { eq: "RedSoxDodgers.jpg" }) {
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
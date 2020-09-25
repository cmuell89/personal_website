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

export default function About({data, location}) {

  return (
    <Layout location={location}>
      <ContentContainer>
        <h1>About</h1>
        <section>
          <p>I am a PhD student at the University of Colorado Boulder studying Robotics.</p>
          <Img fluid={data.imageOne.childImageSharp.fluid} />        
          <br></br>
          <p>Currently, I am one of the senior member of <a href="https://www.cairo-lab.com/" title="CAIRO Lab">CAIRO lab</a> advised by Professor Bradley Hayes. I also helped co-found a technology startup called <a href="https://lightninginabot.com" title="Lightning in a Bot">Lightning in a Bot</a>, which developed the Shoppy Bot product, a novel reporting software for ecommerce businesses.</p>
        </section>
        <h3>A Brief History Of Time</h3>
        <section>
          <p>In the summer of 2007, I left my home state of Massachusetts and moved to California to attend the University of California - Santa Barbara.
            After graduating in 2011 with a B.S. in Biopsychology, I was fortunate to be hired by QualTek Molecular Laboratories where I worked for three years as a research scientist. During my time in CA, I developed a keen interest in neuroscience and an obsession with computing technology and theory. I also co-founded of Lightning in a Bot, Inc with a good friend. We got our start as a natural language UI-driven business analytics company and expanded to custom software development. Running a company was one of the most rewarding experiences of my life, but I knew I wanted to learn more about computer science and about technologies designed to work with human beings. I made my way to Boulder, Colorado and started my PhD in Robotics / Human-Robot Interaction. </p>
            <figure>
              <Img fluid={data.imageTwo.childImageSharp.fluid} />        
              <figcaption>My girlfiend, Missy, and I at Venice Beach circa 2015.</figcaption>
            </figure>
            <br></br>
        </section>
        <section>
          <h3>Links</h3>
          <h5>Professional</h5>
          <ul>
            <li><a href="CV.pdf" download>CV</a></li>
          </ul>
          <h5>Social</h5>
          <ul>
            <li><a href="https://twitter.com/cmuell89">Twitter</a></li>
            <li><a href="https://github.com/cmuell89">Github</a></li>
          </ul>
          <h5>Other</h5>
          <ul>
            <li><a href="https://www.youtube.com/watch?v=rBpaUICxEhk">Life is NOT a Journey - Alan Watts</a></li>
          </ul>
        </section>
        <section>
          <h3>About this website</h3>
          <p>This is a static website built with <a href="https://reactjs.org/" target="_blank" rel="noreferrer" title="React">React</a> and <a href="https://www.gatsbyjs.org/" target="_blank" rel="noreferrer" title="gatsbyjs">Gatsby JS</a>. It's served to you super fast via <a href="https://aws.amazon.com/" target="_blank" rel="noreferrer" title="AWS">AWS</a>. </p> 
        </section>
        
      </ContentContainer>
    </Layout>
  );
};

export const query = graphql`
  query {
    imageOne: file(relativePath: { eq: "carl_headshot.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 400) {
          ...GatsbyImageSharpFluid
          ...GatsbyImageSharpFluidLimitPresentationSize
        }
      }
    }
    imageTwo: file(relativePath: { eq: "VeniceWithMissy.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 600) {
          ...GatsbyImageSharpFluid
          ...GatsbyImageSharpFluidLimitPresentationSize
        }
      }
    }
  } 
`
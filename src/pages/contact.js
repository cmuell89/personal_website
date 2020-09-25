import React from 'react';
import styled from 'styled-components';

import { ContactForm } from '../components';
import Layout from '../components/layout';

const ContentContainer = styled.div`
  max-width: 40em;
  padding: 0 1em;
`;

export default function Contact({ location }) {
  return (
    <Layout location={location}>
      <ContentContainer>
        <h1>Hello friend. Leave me a message...</h1>    
        <section>
          <ContactForm />
        </section>
      </ContentContainer>
    </Layout>
  );
};

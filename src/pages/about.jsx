import React from 'react';
import Link from 'gatsby-link';
import PageWrapper from '../layouts/page-layout';

const AboutPage = () => {
  return (
    <PageWrapper>

      <h1> About Page</h1>
      <Link to="/">Back to home</Link>
      
    </PageWrapper>
  )
};

export default AboutPage;
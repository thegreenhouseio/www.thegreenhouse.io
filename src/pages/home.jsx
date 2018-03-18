import React from 'react';
import Link from 'gatsby-link';
import PageWrapper from '../components/page-wrapper/page-wrapper';

const HomePage = () => {
  return (
    <PageWrapper>
      <h1>Home Page</h1>

      <Link to="/about/">About Page</Link>
    </PageWrapper>
  )
};

export default HomePage;
import React from 'react';
import Link from 'gatsby-link';
import PageLayout from '../layouts/page-layout';

const HomePage = () => {
  return (
    <PageLayout>
      
      <p>Owen Buckley (that's me 👋) is a passionate problem solver and lifetime learner specializing in web 
        application architectures, bringing my wide range of technical knowledge, creativity and entrepreneurial spirit 
        to the projects I work on. I consider the hallmarks of any successful endeavor to include organization, preparation, 
        and thoughtful deliberation to ensure timely delivery and expectations that are not just met, but exceeded.</p>

      <p>The Greenhouse is my platform for growing and building ideas, projects, and businesses with pragmatic technology 
        solutions by leveraging some of the best tools available today specifically as it makes sense for a given project. 
        Jenkins, Docker, AWS, NodeJS, and PHP are just a few the technologies being used to help deliver projects 
        for myself and colloborators.</p>

      <p>Please checkout my <Link to="/blog/">blog</Link> to see what I’ve been up to and <Link to="/contact/">contact me</Link> if
        you would like us to work together!</p>

      <span>I want to help build your future.</span>

      <hr/>

    </PageLayout>

  )
};

export default HomePage;
import React from 'react';
import Link from 'gatsby-link';
import PageLayout from '../layouts/page-layout';

const HomePage = () => {
  return (
    <PageLayout>
      
      <p>Hello (👋), I'm <b>Owen</b>!  I'm a problem solver and passionate lifetime learner specializing in web 
        application architectures and business development.  My broad range of technical knowledge and capabilities, 
        creativity, comminicaton skills, and a good splash of entrepreneurial spirit make me a valuable contributor to all stages of the
        software delivery lifecycle (SDLC) and business operations. I consider the hallmarks of any successful endeavor to 
        include strong communication and feedback to ensure expectations are not just met, but exceeded.</p>

      <p><b>The Greenhouse</b> is my platform for growing and building ideas, projects, and businesses with pragmatic technology 
        solutions leveraging some of the best tools available today. Projects are designed and developed to be 
        performant and maintainable (developer experience) and automated in their delivery (CI / CD) while most importantly,
        ensuring the application provides great user experiences (UX).</p>

      {/* <p>Please checkout my <Link to="/blog/">blog</Link> to see what I’ve been up to and feel free to <Link to="/contact/">reach out</Link>
        to me here or on social media.</p> */}

      <hr/>

      <span>I want to help build your future.</span>

      <hr/>

    </PageLayout>

  )
};

export default HomePage;
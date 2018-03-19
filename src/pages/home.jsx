import React from 'react';
import Link from 'gatsby-link';
import PageLayout from '../layouts/page-layout';
import SocialLinksService from '../services/social-links-service';

class HomePage extends React.Component {
  constructor() {
    super();
    const links = new SocialLinksService().getLinks();
    this.socialLinksMap = {}
    
    links.map(link => {
      this.socialLinksMap[link.name] = link.url;
    });
  }
  
  render() {
    return (
      <PageLayout>
        
        <p>Hello, I'm <b>Owen</b> 👋!</p>
          
        <p>I consider myself a problem solver and a passionate lifelong learner specializing in web 
          application architectures and business development.  My broad range of technical knowledge and capabilities, 
          creativity, interpersonal skills, and a good splash of entrepreneurial spirit make me a valuable contributor to all stages of the
          software delivery lifecycle (SDLC) and business operations. I consider the hallmarks of any successful endeavor to 
          include strong communication and feedback to ensure expectations are not just met, but exceeded.</p>

        <p><b>The Greenhouse</b> is my platform for growing and building ideas, projects, and businesses with pragmatic technology 
          solutions leveraging some of the best tools available today. Projects are designed and developed to be 
          performant and maintainable (developer experience), automated in their delivery (CI / CD) and most importantly,
          enable great user experiences (UX).</p>

        <p>I'm always up to something online be it on <a href={this.socialLinksMap.twitter}>twitter</a>, <a href={this.socialLinksMap.medium}>Medium</a>, 
        or around the local <a href="https://www.pvdgeeks.org">Rhode Island Tech Meetup Comminity</a>, so I hope to hear from you!</p>

        <hr/>

        <span>I want to help build your future.</span>

        <hr/>

      </PageLayout>

    )
  }
};

export default HomePage;
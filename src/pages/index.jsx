import React from 'react';
import { OutboundLink } from 'gatsby-plugin-google-analytics';
import SocialLinksService from '../services/social-links/social-links-service';

class HomePage extends React.Component {
  constructor() {
    super();
    
    this.state = {
      socialLinksMap: new SocialLinksService().getLinks(true)
    };
  }
  
  render() {
    return (  
      <div className="home">      
        <p>Hello, I&apos;m <b>Owen</b>! 👋</p>
          
        <p>I consider myself a problem solver and a passionate lifelong learner specializing in web 
          application architectures and business / product development.  My broad range of technical knowledge and capabilities, 
          creativity, interpersonal skills, and a good splash of entrepreneurial spirit make me a valuable contributor to all stages of the
          software delivery lifecycle (SDLC) and business operations. I consider the hallmarks of any successful endeavor to 
          include strong communication and feedback to ensure expectations are not just met, but exceeded.</p>

        <p><b>The Greenhouse</b> is my platform for growing and building ideas, projects, and businesses with pragmatic technology 
          solutions leveraging some of the best tools available today. Projects are designed and developed to be 
          performant and maintainable (developer experience), automated in their delivery (CI / CD) and most importantly,
          enable great user experiences (UX).</p>

        <p>I&apos;m always up to something online be it on <OutboundLink href={this.state.socialLinksMap.twitter} target="_blank" rel="noopener noreferrer">twitter</OutboundLink>, 
          <OutboundLink href={this.state.socialLinksMap.medium} target="_blank" rel="noopener noreferrer">Medium</OutboundLink>, 
          or around the local <OutboundLink href="https://www.pvdgeeks.org" target="_blank" rel="noopener noreferrer">Rhode Island Tech Meetup Community</OutboundLink>, so I hope to hear from you!</p>

        <hr/>

        <span>I want to help build your future.</span>

        <hr/>
      </div>
    )
  }
};

export default HomePage;
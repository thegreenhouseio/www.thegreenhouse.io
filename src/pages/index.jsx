import React from 'react';
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
        <p>Hello, I'm <b>Owen</b>! 👋</p>
          
        <p>I consider myself a problem solver and a passionate lifelong learner specializing in web 
          application architectures and business / product development.  My broad range of technical knowledge and capabilities, 
          creativity, interpersonal skills, and a good splash of entrepreneurial spirit make me a valuable contributor to all stages of the
          software delivery lifecycle (SDLC) and business operations. I consider the hallmarks of any successful endeavor to 
          include strong communication and feedback to ensure expectations are not just met, but exceeded.</p>

        <p><b>The Greenhouse</b> is my platform for growing and building ideas, projects, and businesses with pragmatic technology 
          solutions leveraging some of the best tools available today. Projects are designed and developed to be 
          performant and maintainable (developer experience), automated in their delivery (CI / CD) and most importantly,
          enable great user experiences (UX).</p>

        <p>I'm always up to something online be it on <a target="_blank" href={this.state.socialLinksMap.twitter}>twitter</a>, <a target="_blank" href={this.state.socialLinksMap.medium}>Medium</a>, 
        or around the local <a target="_blank" rel="noopener noreferrer" href="https://www.pvdgeeks.org">Rhode Island Tech Meetup Community</a>, so I hope to hear from you!</p>

        <hr/>

        <span>I want to help build your future.</span>

        <hr/>
      </div>
    )
  }
};

export default HomePage;
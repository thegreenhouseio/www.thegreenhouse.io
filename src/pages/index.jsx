import React from 'react';
import { OutboundLink } from 'gatsby-plugin-google-analytics';
import SocialLinksService from '../services/social-links/social-links-service';

class HomePage extends React.Component {
  constructor() {
    super();
    
    this.state = {
      socialLinksMap: new SocialLinksService().getLinksAsMap()
    };
  }
  
  render() {
    return (  
      <div id="home">      
        <p>Hello, I&apos;m <b>Owen</b>! 👋</p>

        <p>I find myself most passionate about helping people learn more about technology and how it can help them make their ideas a reality.  I like to do so through 
          software projects that are well designed, tested, performant, and maintained in a way that advocates for both user <i>and</i> developer experiences.  My broad range 
          of technical knowledge and capabilities, creativity, interpersonal skills, and a good splash of entrepreneurial spirit make me a valuable contributor to any project.</p>

        <p><b>The Greenhouse</b> is my platform for growing and building ideas, projects, and businesses with pragmatic technology solutions leveraging some of the best tools 
          available today. Projects are designed and developed to be performant and maintainable, automated in their delivery (CI / CD) and most importantly, enable great 
          user experiences (UX).  Simplicity and documentation are key to ensuring accessability to all the implementation details of 
          our <OutboundLink href={this.state.socialLinksMap.github} target="_blank" rel="noopener">shared GitHub repositories.</OutboundLink></p>

        <p>I&apos;m always up to something online be it on <OutboundLink href={this.state.socialLinksMap.get('twitter')} target="_blank" rel="noopener">twitter</OutboundLink>
          , <OutboundLink href={this.state.socialLinksMap.get('medium')} target="_blank" rel="noopener">Medium</OutboundLink>, 
          or around the local <OutboundLink href="https://www.pvdgeeks.org" target="_blank" rel="noopener">Rhode Island Tech Meetup Community</OutboundLink>, so I hope to hear from you!</p>

        <span><i>Let&apos;s build something great!</i></span>

      </div>
    )
  }
};

export default HomePage;
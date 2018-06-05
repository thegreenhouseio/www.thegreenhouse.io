import React from 'react';
import { OutboundLink } from 'gatsby-plugin-google-analytics';
import BlogPost from '../../../../../components/blog-post/blog-post';

class BlogPostPage extends React.Component {
  constructor() {
    super();
  }

  render() {

    return (
      <BlogPost title='Project Evergreen' date='06.06.2018' image='https://s3.amazonaws.com/uploads.thegreenhouse.io/project-evergreen/logo-small.png'>
        <div>
          <p>Building modern web applications can be complex.  Balancing the delivery of great user experiences with supportive developer experiences is a constant balancing act.  
            Performance and security are a must. The JavaScript ecosystem is abundant with amazing tools and libraries.  So where to start?</p>
            
          <p><b>Project Evergreen</b> is not (just) another framework or library per se.  What excites us about <b>Project Evergreen</b> is the idea of an <i>evergreen</i> web, supported 
            by evergreen browsers, and the implications of that on the development and delivery of web applications.  More than just providing resources on technology, is the 
            importance of helping others find the technology and workflows that suits their project best, whatever that may be, and <b>Project Evergreen</b> wants to be a part 
            of all those journeys.</p>
          
          <h4><p>This project is just getting started but moving quickly to flesh things out, and we would love to hear <i>how</i> and <i>what</i> you want to develop for the web, and 
            how Project Evergreen can help.  Feeback, engagement, and participation are highly encouraged and so we hope to hear from you to let us know what you think, and most importanty, 
            what excites you about developing for the web!  👋</p></h4>
          
          <ul>
            <li><OutboundLink target="_blank" href="https://projectevergreen.github.io/">Website</OutboundLink></li>
            <li><OutboundLink target="_blank" href="https://github.com/ProjectEvergreen">GitHub Organization</OutboundLink></li>
            <li><OutboundLink target="_blank" href="https://github.com/ProjectEvergreen/project-evergreen/milestones">Roadmap</OutboundLink></li>
            <li>
              <OutboundLink target="_blank" href="https://twitter.com/PrjEvergreen">Twitter</OutboundLink><span> | </span>
              <OutboundLink target="_blank" href="https://join.slack.com/t/thegreenhouseio/shared_invite/enQtMzcyMzE2Mjk1MjgwLTFkNzY2NDQwOTg0MjRiYmY1ZDYyOGE1YzM0ZmQwNTgxZWI0NWU0YmYxZDhkNDQ3Y2Q3ODhjZTdiMTEwNzY5MTk">Slack</OutboundLink>
            </li>
          </ul>

        </div>
      </BlogPost>
    );
  }
}

export default BlogPostPage;
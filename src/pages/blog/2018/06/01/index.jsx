import React from 'react';
import { OutboundLink } from 'gatsby-plugin-google-analytics';
import BlogPost from '../../../../../components/blog-post/blog-post';

class BlogPostPage extends React.Component {
  constructor() {
    super();
  }

  render() {

    return (
      <BlogPost title='Project Evergreen' date='06.01.2018' image='https://s3.amazonaws.com/uploads.thegreenhouse.io/project-evergreen/logo-small.png'>
        <div>
          <p>Building modern web applications can be complex.  Balancing user experiences with supportive developer experiences is a constant balancing act.  Performance and security are a must. 
            The JavaScript ecosystem is abundant with amazing tools and libraries.  So where to start?</p>
            
          <p>This project is not (just) another framework or library per se.  What excites me the most is the goal of <b>Project Evergreen</b> itself; <i>To provide accessible, modern, and practical 
            resources to those looking to build modern, dynamic, performant, and evergreen web applications that favor native Web APIs and standards.</i></p>
          
          <h4><p>We&apos;re just getting started and moving quickly to flesh things out, and we would love to hear how you want to develop for the web, and how we can help!  We hope you want to learn more
            and greatly encourage feedback and participation.  Hope to hear from you!  👋</p></h4>
          
          <ul>
            <li><OutboundLink target="_blank" href="https://project-evergreen.thegreenhouse.io/">Website</OutboundLink></li>
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
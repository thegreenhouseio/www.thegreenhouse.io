import React from 'react';
import { OutboundLink } from 'gatsby-plugin-google-analytics';
import BlogPost from '../../../../../components/blog-post/blog-post';

class BlogPostPage extends React.Component {
  constructor() {
    super();
  }

  render() {

    return (
      <BlogPost 
        title='Building A Better Mouse Trap'
        description='My presentation at Node+JS Interactive 2018 on Docker and Server-Side Rendering.'
        date='10.28.2018' 
        image='https://events.linuxfoundation.jp/wp-content/uploads/2017/12/logo_node_js_int18.png'>
        
        <div>
          <p>I was fortunate to speak at this year&apos;s <OutboundLink target="_blank" href="https://events.linuxfoundation.org/events/node-js-interactive-2018/">Node+JS Interactive</OutboundLink> in 
            beautiful Vancouver and am happy to share the slides and video <OutboundLink target="_blank" href="https://jsi2018.sched.com/event/F76V?iframe=no">from my talk</OutboundLink>!</p>
            
          <p>It was a great oppourtunity to get share my thoughts and experiences with Docker, and deploying NodeJS apps, and how the two
            can work really well together.  Hopefully it can help your team too!</p>
          
          <OutboundLink target="_blank" href="https://docs.google.com/presentation/d/1vPwqGmbAqy6zjQ7JaqbMoS1I_8oMfFYcgXf6setvMcI/edit?usp=sharing">📎 (slides)</OutboundLink>
          <iframe className="card-video" width="100%" height="455" src="https://www.youtube.com/embed/Hj0hXuiz7Io" frameBorder="0" allowFullScreen/>

          <p>The project is <OutboundLink target="_blank" href="thegreenhouseio/docker-ssr">open source</OutboundLink> so contributions weclome!</p>
        </div>
      </BlogPost>
    );
  }
}

export default BlogPostPage;
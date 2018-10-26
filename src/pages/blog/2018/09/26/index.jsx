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
        title='Project Evergreen'
        description='Introducing Create Evergreen App!'
        date='09.26.2018' 
        image='https://s3.amazonaws.com/uploads.thegreenhouse.io/project-evergreen/logo-small.png'>
        
        <div>
          <p>Building modern web applications can be complex.  Balancing the delivery of great user experiences with supportive developer experiences is a constant balancing act.  
            Performance and security are a must. The JavaScript ecosystem is abundant with amazing tools and libraries.  So where to start?</p>
            
          <p><b>Project Evergreen</b> is happy to announce the initial release of <OutboundLink target="_blank" href="https://github.com/ProjectEvergreen/create-evergreen-app">Create Evergreen App</OutboundLink>, a starter kit for getting up and running with
            creating modern and performance evergreen web applications.  Check it out and please feel free to share any thoughts and feedback! ✌️</p>

          <p><u>Quickstart</u></p>
          <pre>$ npx create-evergreen-app my-app</pre>
          <pre>$ cd my app</pre>
          <pre>$ npm install</pre>
          <pre>$ npm start</pre>

          <p>Check out <OutboundLink target="_blank" href="https://github.com/ProjectEvergreen/project-evergreen/wiki">the wiki docs</OutboundLink> for 
            more info on build evegreen apps!</p>

        </div>

      </BlogPost>
    );
  }
}

export default BlogPostPage;
import React from 'react';
import { OutboundLink } from 'gatsby-plugin-google-analytics';
import bannerImage from '../../../images/minecraft-cloud.png';

class BlogPostPage extends React.Component {
  constructor() {
    super();
  }

  render() {
    const headerBackgroundStyle = {
      backgroundImage: `url('${bannerImage}')`
    };

    return (
      <div id="blog">

        <div className="header" style={headerBackgroundStyle}>
          <h1>Minecraft In The Cloud</h1>
          <h5>Published: 03.26.2017</h5>
        </div>

        <div className="post">
          <p>Minecraft is a popular world building game enjoyed by kids and adults.  I wrote 
            <OutboundLink href="https://medium.com/@thegreenhouseio/minecraft-in-the-cloud-78f9195b79cb#.rzlk2kkg3"> this article </OutboundLink> 
            after setting up a server for family use in the cloud, using Amazon Web Services.</p>
            
        </div>
      </div>
    );
  }
}

export default BlogPostPage;
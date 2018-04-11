import React from 'react';
import { OutboundLink } from 'gatsby-plugin-google-analytics';
import BlogPost from '../../../../../components/blog-post/blog-post';
import bannerImage from '../../../images/github.png';

class BlogPostPage extends React.Component {
  constructor() {
    super();
  }

  render() {

    return (
      <BlogPost title='GitHub Dashboard 1.2.0 Released' date='05.05.2017' image={bannerImage}>
        <div>
          <p>The Greenhouse is pleased to announce <OutboundLink href="https://github.com/thescientist13/github-dashboard/releases/tag/1.2.0" target="_blank" rel="noopener noreferrer">a new release of GitHub Dashboard</OutboundLink>! 
          Now displaying organization or username before a repository name, as well as an icon indicator if a repository is a fork.  
          On a technical note, a couple console warnings while running unit tests were fixed.</p> 

          <p>Big shout out to JP Osorio (<OutboundLink href="https://github.com/jpoo90" target="_blank" rel="noopener noreferrer">GitHub</OutboundLink> / <OutboundLink href="https://twitter.com/jpoo90" target="_blank" rel="noopener noreferrer">Twitter</OutboundLink>) 
            for being the sole contributor to this release, fixing bugs and adding features!  Thanks for helping out! 👏</p>
           
          <p>Please feel free to leave thoughts and feedback, bug reports, or feature requests by using the 
            <OutboundLink href="https://github.com/thescientist13/github-dashboard/issues" target="_blank" rel="noopener noreferrer"> issue tracker.</OutboundLink></p>
        </div>
      </BlogPost>
    );
  }
}

export default BlogPostPage;
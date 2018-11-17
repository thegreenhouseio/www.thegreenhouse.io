import React from 'react';
import { OutboundLink } from 'gatsby-plugin-google-analytics';
import Layout from '../../../../../components/layout/layout';
import BlogPost from '../../../../../components/blog-post/blog-post';
import bannerImage from '../../../images/minecraft-cloud.png';

const BlogPostPage = () => {
  return (
    <Layout>
      <BlogPost title='Minecraft In The Cloud' date='03.26.2017' image={bannerImage}>
        <p>Minecraft is a popular world building game enjoyed by kids and adults.  I wrote 
          <OutboundLink href="https://medium.com/@thegreenhouseio/minecraft-in-the-cloud-78f9195b79cb#.rzlk2kkg3" target="_blank" rel="noopener"> this article </OutboundLink> 
          after setting up a server for family use in the cloud, using Amazon Web Services.</p>
      </BlogPost>
    </Layout>
  );
};

export default BlogPostPage;
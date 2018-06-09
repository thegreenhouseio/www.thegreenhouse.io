import React from 'react';
import { OutboundLink } from 'gatsby-plugin-google-analytics';
import Layout from '../../../../../components/layout/layout';
import BlogPost from '../../../../../components/blog-post/blog-post';
import bannerImage from '../../../images/pwa-lighthouse.png';

const BlogPostPage = () => {

  return (
    <Layout>
      <BlogPost title='A Case Study in Performance' date='01.24.2018' image={bannerImage}>
        <div>
          <p>I&apos;m excited to announce the start of an article series detailing performance in web applications!  
            Using the <OutboundLink href="https://www.pvdgeeks.org/" target="_blank" rel="noopener">brand new Providence Geeks website</OutboundLink>, 
            this series follows my adventures in making the website Lighthouse and Progressive Web Application (PWA) compliant!</p>
          
          <ul>
            <li><OutboundLink href="https://medium.com/@thegreenhouseio/a-pwa-for-pvd-geeks-a-case-study-in-performance-and-progressive-web-applications-pt-1-e8cc5c1d0f0a" target="_blank" rel="noopener">Part 1</OutboundLink></li>
            <li><OutboundLink href="https://medium.com/@thegreenhouseio/a-pwa-for-providence-geeks-a-case-study-in-performance-pt-2-4ba811b7be7" target="_blank" rel="noopener">Part 2</OutboundLink></li>
          </ul>

          <p>Web performance and security is something I’ve been wanting to get more experience in lately and I felt 
            an <OutboundLink href="https://github.com/ProvidenceGeeks" target="_blank" rel="noopener">open source</OutboundLink> project was a great opportunity 
            to learn, do, and teach!</p>

          <p>Please feel free to leave thoughts and feedback on the article or bug reports and feature requests by using the 
            <OutboundLink href="https://github.com/ProvidenceGeeks/website-frontend/issues" target="_blank" rel="noopener"> issue tracker.</OutboundLink></p>
        </div>
      </BlogPost>
    </Layout>
  );
};

export default BlogPostPage;
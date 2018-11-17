import React from 'react';
import { Link } from 'gatsby';
import Layout from '../../components/layout/layout';
import './blog.css';

const BlogPage = () => {

  return (
    <Layout>
      <div id='blog'>

        <h2><u>2018</u></h2>
        
        <ul className='blog-posts-list'>
          <li><Link to='/blog/2018/10/28/'>Building A Better Mouse Trap <span role="img" aria-label="cheese-emoji">🧀</span></Link></li>
          <li><Link to='/blog/2018/09/26/'>Create Evergeen App <span role="img" aria-label="recycle-emoji">♻️</span></Link></li>
          <li><Link to='/blog/2018/06/06/'>Project Evergreen <span role="img" aria-label="lightbulb-emoji">💡</span></Link></li>
          <li><Link to='/blog/2018/05/16/'>A Case Study in Performance (cont.) <span role="img" aria-label="notepad-emoji">📝</span></Link></li>
          <li><Link to='/blog/2018/01/24/'>A Case Study in Performance <span role="img" aria-label="notepad-emoji">📝</span></Link></li>
        </ul>

        <hr/>

        <h2><u>2017</u></h2>
        
        <ul className='blog-posts-list'>
          <li><Link to='/blog/2017/10/15/'>Publishing My First Docker Image <span role="img" aria-label="notepad-emoji">📝</span></Link></li>
          <li><Link to='/blog/2017/09/10/'>New OSS Project - Vue Webapp Seed <span role="img" aria-label="lightbulb-emoji">💡</span></Link></li>
          <li><Link to='/blog/2017/06/07/'>New OSS Project - PHP API Seed <span role="img" aria-label="lightbulb-emoji">💡</span></Link></li>
          <li><Link to='/blog/2017/05/05/'>GitHub Dashboard 1.2 Released <span role="img" aria-label="party-emoji">🎉</span></Link></li>
          <li><Link to='/blog/2017/04/22/'>GitHub Dashboard 1.1 Released <span role="img" aria-label="party-emoji">🎉</span></Link></li>
          <li><Link to='/blog/2017/04/10/'>GitHub Dashboard 1.0 Released <span role="img" aria-label="party-emoji">🎉</span></Link></li>
          <li><Link to='/blog/2017/03/30/'>Teaching An Old Dog New Tricks! <span role="img" aria-label="notepad-emoji">📝</span></Link></li>
          <li><Link to='/blog/2017/03/26/'>Minecraft In The Cloud <span role="img" aria-label="notepad-emoji">📝</span></Link></li>
        </ul>
      </div>
    </Layout>
  );
};

export default BlogPage;
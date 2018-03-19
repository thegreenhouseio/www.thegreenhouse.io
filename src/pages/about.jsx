import React from 'react';
import Link from 'gatsby-link';
import SocialLinksService from '../services/social-links-service';
import ArticlesService from '../services/articles-service';
import Card from '../components/card/card';
import PageWrapper from '../layouts/page-layout';

export class PublicationsPage extends React.Component {
  constructor() {
    super();

    this.socialLinksMap = new SocialLinksService().getLinks(true);
    this.articles = new ArticlesService().getArticles();
  }

  render() {
    return (
      <PageWrapper>
        <p>I think the best way to share my passion is to show you what I am passionate about.  Below are some featured articles
          and presentations I've worked on.</p>

        <h2><u>Speaking</u></h2>

        <h2><u>Writing</u></h2>
        {
          this.articles.map(article => {
            let key = 0;
            let item = {
              title: `${article.heading}: ${article.subHeading}`,
              abstract: article.abstract,
              link: article.link,
              img: article.img,
              date: article.date
            }
            return <Card key={item.title} item={item}/>
          })
        }

        <span>Please feel free to visit my <a href={this.socialLinksMap.medium}>Medium</a> page for other articles I've done!</span>
      </PageWrapper>
    )
  }
};

export default PublicationsPage;
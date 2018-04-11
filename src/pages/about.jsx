import React from 'react';
import ArticlesService from '../services/articles/articles-service';
import PresentationsService from '../services/presentations/presentations-service';
import SocialLinksService from '../services/social-links/social-links-service';
import CardList from '../components/card-list/card-list';

class PublicationsPage extends React.Component {
  constructor() {
    super();

    this.SECTIONS = {
      SPEAKING: 'SPEAKING',
      WRITING: 'WRITING'
    };

    this.state = {
      socialLinksMap: new SocialLinksService().getLinks(true),
      articles: new ArticlesService().getModeledArticles(),
      presentations: new PresentationsService().getModeledPresentations(),
      activeSection: this.SECTIONS.SPEAKING
    };
  }

  setActiveSection(section) {
    this.setState({
      ...this.state,
      activeSection: section
    });
  }

  getContent() {
    let content;
    
    switch (this.state.activeSection) {

      case this.SECTIONS.SPEAKING:
        content = <CardList className="content-speaking" items={this.state.presentations}/>;
        break;
      case this.SECTIONS.WRITING:
        content = 
          <div>
            <CardList className="content-writing" items={this.state.articles}/>
            <span className="cta">Please feel free to visit my <a target="_blank" href={this.state.socialLinksMap.medium}>Medium</a> page for other articles I&amp;ve done!</span>
          </div>;
        break;
      default:
        content = '';
    
    }

    return content;
  }

  render() {

    return (
      <div id="about">
        <p className="sub-heading">I think the best way to tell you about myself is to show you what I am passionate about.  Below are some featured articles
          and presentations I&apos;ve worked on.</p>

        <div className="content-links">
          <h2 className="link-speaking" onClick={() => this.setActiveSection(this.SECTIONS.SPEAKING)}><u>Speaking</u></h2>
          <h2 className="link-writing" onClick={() => this.setActiveSection(this.SECTIONS.WRITING)}><u>Writing</u></h2>
        </div>

        <div className="content-output">
          { this.getContent() }
        </div>
      
      </div>
    );
  }
}

export default PublicationsPage;
import { html, LitElement } from 'lit-element';

import '../components/card-list/card-list';
import '../components/footer/footer';
import '../components/header/header';
import '../components/navigation/navigation';
import ArticlesService from '../services/articles/articles-service';
import PresentationsService from '../services/presentations/presentations-service';

import pageCss from '../styles/page.css';
import '../styles/theme.css';

MDIMPORT;
METAIMPORT;
METADATA;

class AboutTemplate extends LitElement {

  static get properties() {
    return {
      articles: {
        type: Array
      },
      presentations: {
        type: Array
      },
      activeSection: {
        type: String
      }
    };
  }

  constructor() {
    super();

    this.SECTIONS = {
      SPEAKING: 'SPEAKING',
      WRITING: 'WRITING'
    };

    this.socialLinksMap = []; // new SocialLinksService().getLinksAsMap(),
    this.articles = new ArticlesService().getModeledArticles(),
    this.presentations = new PresentationsService().getModeledPresentations(),
    this.activeSection = this.SECTIONS.SPEAKING;
  }

  setActiveSection(section) {
    this.activeSection = section;
  }

  getContent() {
    let content = this.activeSection;

    switch (this.activeSection) {

      case this.SECTIONS.SPEAKING:
        content = html`<app-card-list class="content-speaking" .items=${this.presentations}></app-card-list>`;
        break;
      case this.SECTIONS.WRITING:
        content = html`
          <div>
            <app-card-list class="content-writing" .items=${this.articles}></app-card-list>

            <span class="cta">Visit my <a target="_blank" href="#medium">Medium</a> page for other articles Ive done!</span>
          </div>
        `;
        break;
      default:
        content = '';
    
    }

    return content;
  }

  render() {
    const content = this.getContent();

    return html`
      METAELEMENT

      <style>
        ${ pageCss }

        p {
          text-align: center;
        }

        .sub-heading {
          width: 60%;
          margin: 10px auto 30px;
          text-align: center;
        }

        .content-links h2 {
          width: 50%;
          cursor: pointer;
          display: inline;
          margin: 10px;
        }

        .content-output {
          margin: 20px auto;
        }

        /* h2 {
          padding-left: 17.25%;
        }
        
        p {
          width: 65%;
          margin: 20px auto;
          text-align: left;
          font-size: 20px;
        }

        p.cta {
          text-align: center;
        }

        hr {
          width: 15%;
          margin: 5px auto;
        }*/
      </style>

      <div class="layout">
        <section class="row">
          <app-header></app-header>
        </section>
        
        <section class='row'>
          <app-navigation></app-navigation>
        </section>

        <section class="outlet row">  
          <entry></entry>

          ${ content }
        </section>

        <section class="row">
          <app-footer></app-footer>
        </section>
      </div>
    `;
  }
}

customElements.define('page-template', AboutTemplate);

/* <div class="content-links">
<h2 class="link-speaking" onClick={() => this.setActiveSection(this.SECTIONS.SPEAKING)}><u>Speaking</u></h2>
<h2 class="link-writing" onClick={() => this.setActiveSection(this.SECTIONS.WRITING)}><u>Writing</u></h2>
</div> */
import { css, html, LitElement, unsafeCSS } from 'lit-element';
import '../components/card-list/card-list';
import '../components/footer/footer';
import '../components/header/header';
import '../components/navigation/navigation';
import ArticlesService from '../services/articles/articles-service';
import PresentationsService from '../services/presentations/presentations-service';
import pageCss from '../styles/page.css';
import '../styles/theme.css';

class AboutTemplate extends LitElement {

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

  static get styles() {
    return css`
      ${ unsafeCSS(pageCss) }

      p {
        text-align: center;
        width: 50%;
        margin: 20px auto;
        font-size: 1.1em;
      }

      .content-links {
        width: 400px;
        margin: 0 auto;
      }

      .content-links h2 {
        cursor: pointer;
        display: inline-block;
        text-align: center;
        width: 49%;
      }

      img {
        display: block;
        margin: 0 10px;
      }
    `;
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

            <p class="cta">Visit my <a target="_blank" href="https://medium.com/@thegreenhouseio">Medium</a> page for other articles Ive done!</p>
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
      <div class="layout">
        <section class="row">
          <app-header></app-header>
        </section>
        
        <section class='row'>
          <app-navigation></app-navigation>
        </section>

        <section class="outlet row">  
          <entry></entry>

          <div class="content-links">
            <h2 class="link-speaking" @click=${() => this.setActiveSection(this.SECTIONS.SPEAKING)}><u>Speaking</u></h2>
            <h2 class="link-writing" @click=${() => this.setActiveSection(this.SECTIONS.WRITING)}><u>Writing</u></h2>
          </div>

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
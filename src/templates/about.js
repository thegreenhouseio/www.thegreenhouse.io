import { css, html, LitElement, unsafeCSS } from 'lit-element';
import '../components/card-list/card-list.js';
import ArticlesService from '../services/articles/articles-service.js';
import PresentationsService from '../services/presentations/presentations-service.js';
import pageCss from '../styles/page.css';

class ContentListComponent extends LitElement {

  constructor() {
    super();

    this.SECTIONS = {
      SPEAKING: 'SPEAKING',
      WRITING: 'WRITING'
    };

    this.socialLinksMap = [];
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
        <section class="outlet row">
          <div class="content-links">
            <h2 class="link-speaking" @click=${() => this.setActiveSection(this.SECTIONS.SPEAKING)}><u>Speaking</u></h2>
            <h2 class="link-writing" @click=${() => this.setActiveSection(this.SECTIONS.WRITING)}><u>Writing</u></h2>
          </div>

          ${ content }
        </section>
      </div>
    `;
  }
}

customElements.define('app-content-list', ContentListComponent);
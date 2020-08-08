import { css, html, LitElement } from 'lit-element';
import '../components/card-list/card-list';
import ArticlesService from '../services/articles/articles-service';
import PresentationsService from '../services/presentations/presentations-service';
import '../styles/theme.css';

class AboutTemplate extends LitElement {

  constructor() {
    super();

    this.socialLinksMap = [];
    this.articles = new ArticlesService().getModeledArticles(),
    this.presentations = new PresentationsService().getModeledPresentations();
  }
  
  static get properties() {
    return {
      articles: {
        type: Array
      },
      presentations: {
        type: Array
      }
    };
  }

  static get styles() {
    return css`
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

      .hidden {
        display: none;
      }
    `;
  }

  render() {
    return html`
      <script>
        function setVisibleContent(activeContent) {
          if (activeContent === 'speaking') {
            document.querySelector('.content-speaking').classList.remove('hidden');
            document.querySelector('.content-writing').classList.add('hidden');
          } else if (activeContent === 'writing'){
            document.querySelector('.content-speaking').classList.add('hidden');
            document.querySelector('.content-writing').classList.remove('hidden');
          }
        }
      </script>

      <div>
        <entry></entry>

        <div class="content-links">
          <h2 class="link-speaking" onclick="setVisibleContent('speaking')"><u>Speaking</u></h2>
          <h2 class="link-writing" onclick="setVisibleContent('writing');"><u>Writing</u></h2>
        </div>

        <div class="content-blocks">
          
          <div class="content-speaking">
            <app-card-list class="content-speaking" .items=${this.presentations}></app-card-list>
          </div>

          <div class="content-writing hidden">
            <app-card-list class="content-writing" .items=${this.articles}></app-card-list>
            <p class="cta">Visit my <a target="_blank" href="https://medium.com/@thegreenhouseio">Medium</a> page for other articles Ive done!</p>
          </div>
          
        </div>

      </div>
    `;
  }
}

customElements.define('page-template', AboutTemplate);
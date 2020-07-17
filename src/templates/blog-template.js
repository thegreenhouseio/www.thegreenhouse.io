import { css, html, LitElement, unsafeCSS } from 'lit-element';
import client from '@greenwood/cli/data/client';
import ChildrenQuery from '@greenwood/cli/data/queries/children';
import '../components/footer/footer';
import '../components/header/header';
import '../components/navigation/navigation';
import pageCss from '../styles/page.css';
import '../styles/theme.css';

MDIMPORT;

class BlogTemplate extends LitElement {

  constructor() {
    super();
    this.posts = [];
  }

  static get properties() {
    return {
      posts: {
        type: Array
      }
    };
  }
  
  static get styles() {
    return css`
      ${ unsafeCSS(pageCss) }

      ul {
        list-style-type: none;
        width: 70%;
        margin: 0 auto;
        padding: 0;
        text-align: center;
      }

      li {
        margin: 10px 0;
      }

      h2 {
        text-decoration: underline;
        margin: 10px auto;
        width: 20%;
        text-align: center;
      }

      ul a {
        text-decoration: none!important;
      }
    `;
  }

  async connectedCallback() {
    super.connectedCallback();
    const response = await client.query({
      query: ChildrenQuery,
      variables: {
        parent: 'blog'
      }
    });

    this.posts = response.data.children;
  }

  /* eslint-disable indent */
  getPostsByYear(year) {
    return html`
      <h2>${year}</h2>
      <ul>
      ${this.posts.filter((post) => {
          return post.link.includes(year);
        })
        .map((post) => {
          return html`<li><a href="${post.link}">${post.title}</a></li>`;
        })
      }
      </ul>
    `;
  }

  render() {
    const { posts } = this;
    let years = [];
    
    posts.forEach(post => {
      const year = post.link.split('/')[2];

      if (year && !years[year]) {
        years[year] = year;
      }
    });

    return html`

      <div class="layout">
        <section class="row">
          <app-header></app-header>
        </section>
        
        <section class='row'>
          <app-navigation></app-navigation>
        </section>

        <section class="outlet row">  
          ${
            Object.keys(years).reverse().map(year => {
              return this.getPostsByYear(year);
            })
          }
          <hr/>
        
        </section>

        <section class="row">
          <app-footer></app-footer>
        </section>
      </div>
    `;
  }
}
/* eslint-enable indent */

customElements.define('page-template', BlogTemplate);
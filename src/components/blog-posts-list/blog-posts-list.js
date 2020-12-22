import { css, html, LitElement } from 'lit-element';
// import client from '@greenwood/cli/data/client';
// import ChildrenQuery from '../queries/children';

class BlogPostsListComponent extends LitElement {

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

    const data = await fetch('/graph.json')
      .then(resp => resp.json());

    this.posts = data
      .filter(page => page.route.indexOf(/blog[0-9]{4}/));

    // TODO
    // const response = await client.query({
    //   query: ChildrenQuery,
    //   variables: {
    //     parent: 'blog'
    //   }
    // });
  }

  /* eslint-disable indent */
  getPostsByYear(year) {
    return html`
      <h2>${year}</h2>
      <ul>
      ${this.posts.filter((post) => {
          return post.route.includes(year);
        })
        .map((post) => {
          return html`<li><a href="${post.route}">${post.title} ${post.data.emoji}</a></li>`;
        })
        .reverse()
      }
      </ul>
    `;
  }

  render() {
    const { posts } = this;
    let years = [];
    
    posts.forEach(post => {
      const year = post.route.split('/')[2];

      if (year && !years[year]) {
        years[year] = year;
      }
    });

    return html`
      <div>
        ${
          Object.keys(years).reverse().map(year => {
            return this.getPostsByYear(year);
          })
        }
      </div>
    `;
  }
}
/* eslint-enable indent */

customElements.define('app-blog-posts-list', BlogPostsListComponent);
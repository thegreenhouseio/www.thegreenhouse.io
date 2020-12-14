import { css, html, LitElement, unsafeCSS } from 'lit-element';
import client from '@greenwood/cli/data/client';
import gql from 'graphql-tag';
import '../components/blog-post/blog-post';
import postCss from '../styles/post.css';
import '../styles/theme.css';

class PostTemplate extends LitElement {

  constructor() {
    super();

    this.post = {
      title: '',
      data: {
        date: '',
        image: ''
      }
    };
  }
  
  static get properties() {
    return {
      post: {
        type: Object
      }
    };
  }

  static get styles() {
    return css`
      ${unsafeCSS(postCss)}

      p {
        width: 60%;
        margin: 10px auto;
        padding: 10px;
      }

      img {
        display: block;
        width: 70%;
        margin: 0 auto;
      }

      ul {
        list-style-type: none;
        width: 70%;
        margin: 0 auto;
        padding: 0;
        text-align: center;
      }

      :host pre {
        width: 60%;
        display: block;
        margin: 0 auto;
        text-align: left;
      }
    `;
  }

  async connectedCallback() {
    super.connectedCallback();
    let route = window.location.pathname;
    const response = await client.query({
      query: gql`query {
        graph {
          title,
          link,
          data {
            date,
            image
          }
        }
      }`
    });

    if (route.lastIndexOf('/') !== route.length - 1) {
      route = `${route}/`;
    }

    this.post = response.data.graph.filter((page) => {
      return page.link.lastIndexOf(route) >= 0;
    })[0];
  }

  render() {
    const { title } = this.post;
    const { date, image } = this.post.data;

    return html`
      <div>

        <app-blog-post 
          title="${title}"
          date="${date}"
          image="${image}">
        
          <entry></entry>
        
        </app-blog-post>

      </div>
    `;
  }
}

customElements.define('page-template', PostTemplate);
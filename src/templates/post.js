import { css, html, LitElement } from 'lit-element';
import client from '@greenwood/plugin-graphql/core/client';
import GraphQuery from '../queries/graph.gql';
// import '../components/blog-post-details/blog-post-details.js';

class BlogPostComponent extends LitElement {

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
      :host .header {
        background-repeat: no-repeat;
        background-position: center;
        line-height: 125px;
        height: 200px;
      }
        
      :host .header h1, :host .header h5 {
        text-align: center;
      }

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

      pre {
        width: 400px;
        display: block;
        margin: 0 auto;
        text-align: left;
      }
    `;
  }

  async connectedCallback() {
    super.connectedCallback();
    const currentRoute = window.location.pathname;
    const response = await client.query({
      query: GraphQuery
    });

    this.post = response.data.graph.filter((page) => {
      return page.route.lastIndexOf(currentRoute) >= 0;
    })[0];
  }

  render() {
    const { title } = this.post;
    const { date, image } = this.post.data;
    const headerBackgroundStyle = image ? `background-image: url("${image}")` : '';

    return html`
      <div class="header" style="${headerBackgroundStyle}">
        <h1 class="title">${title}</h1>
        <h5 class="date">Published: ${date}</h5>
      </div>

      <slot name="contentoutlet" slot="postoutlet"></slot>
    `;
  }
}

customElements.define('app-blog-post', BlogPostComponent);
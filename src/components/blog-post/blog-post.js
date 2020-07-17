
import { css, html, LitElement } from 'lit-element';

export function slugifyDate(date) {
  const dateArray = date.split('.');

  return `${dateArray[2]}/${dateArray[1]}/${dateArray[0]}/`;
}

/*
 * 
 * Notes for social sharing:
 * - <meta> data intentionally set to reference production
 * - `props.date` needs to match the folder path of the blog post
 * 
 */
class BlogPostComponent extends LitElement {

  static get properties() {
    return {
      date: {
        type: String
      },
      description: {
        type: String
      },
      image: {
        type: String
      },
      title: {
        type: String
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
    `;
  } 

  render() {
    const { date, image, title } = this;
    const headerBackgroundStyle = image ? `background-image: url("${image}")` : '';

    return html`
      <article class="blog-post">

        <div class="header" style="${headerBackgroundStyle}">
          <h1 class="title">${title}</h1>
          <h5 class="date">Published: ${date}</h5>
        </div>

        <div class="content">
          <slot></slot>
        </div>
        
      </article>
    `;
  }
}

customElements.define('app-blog-post', BlogPostComponent);
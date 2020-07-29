import { css, html, LitElement } from 'lit-element';
import '../styles/theme.css';

class PageTemplate extends LitElement {
  
  constructor() {
    super();
  }
  
  static get styles() {
    return css`
      h2 {
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
      }
    `;
  }

  render() {
    return html`
      <div>
        <entry></entry>
      </div>
    `;
  }
}

customElements.define('page-template', PageTemplate);
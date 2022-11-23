import { css, html, LitElement, unsafeCSS } from 'lit-element';
import headerCss from './header.css?type=css';

class HeaderComponent extends LitElement {

  constructor() {
    super();
  }
  
  static get styles() {
    return css`
      ${ unsafeCSS(headerCss) }
    `;
  } 

  render() {
    return html`
      <div class="header"> 
        <a href="/" title="Return to the the home page">
          <header></header>
          <h2 class="caption">A DREAMER BY DESIGN</h2>
        </a>
      </div>
    `;
  }
}

customElements.define('app-header', HeaderComponent);
import { css, html, LitElement, unsafeCSS } from 'lit-element';
import headerCss from './header.css';

class HeaderComponent extends LitElement {

  static get styles() {
    return css`
      ${ unsafeCSS(headerCss) }
    `;
  } 

  render() {
    return html`
      <div class="header"> 
        <a href="https://www.thegreenhouse.io/">
          <header></header>
          <h2 class="caption">A DREAMER BY DESIGN</h2>
        </a>
      </div>
    `;
  }
}

customElements.define('app-header', HeaderComponent);
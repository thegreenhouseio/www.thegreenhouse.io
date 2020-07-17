import { css, html, LitElement, unsafeCSS } from 'lit-element';
import navigationCss from './navigation.css';

class NavigationComponent extends LitElement {

  static get styles() {
    return css`
      ${ unsafeCSS(navigationCss) }
    `;
  } 

  render() {
    return html`
      <div class="navigation">
        <nav>
          <ul>
            <li><a href="/about/">About</a></li>
            <li><a href="/projects/">Projects</a></li>
            <li><a href="/blog/">Blog</a></li>
          </ul>
        </nav>
      </div>
    `;
  }
}

customElements.define('app-navigation', NavigationComponent);
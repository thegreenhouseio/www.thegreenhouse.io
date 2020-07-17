import { css, html, LitElement, unsafeCSS } from 'lit-element';
import '../social-icon-link/social-icon-link';
import footerCss from './footer.css';

class FooterComponent extends LitElement {
  
  constructor() {
    super();
  }
  
  static get styles() {
    return css`
      ${ unsafeCSS(footerCss) }
    `;
  } 

  render() {
    return html`
      <footer>
        <ul>
          <li>
            <app-social-icon-link name="linkedin"></app-social-icon-link>
          </li>

          <li>
            <app-social-icon-link name="twitter"></app-social-icon-link>
          </li>

          <li>
            <app-social-icon-link name="medium"></app-social-icon-link>
          </li>

          <li>
            <app-social-icon-link name="github"></app-social-icon-link>
          </li>
        </ul>
        
        <span class="copyright">&copy; Owen Buckley / thegreenhouse.io</span>
      </footer>
    `;
  }
}

customElements.define('app-footer', FooterComponent);
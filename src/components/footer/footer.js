import { css, html, LitElement } from 'lit-element';
import '../social-icon-link/social-icon-link';

class FooterComponent extends LitElement {
  
  constructor() {
    super();
  }

  static get styles() {
    return css`
      :host footer {
        width: 50%;
        margin: 0 auto;
        text-align: center;
      }

      :host ul {
        list-style: none;
        padding: 0;
        margin-top: 10px;
      }

      :host li {
        display: inline-block;
      }
      
      :host .copyright {
        display: inline-block;
        margin: 10px auto;
      }
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
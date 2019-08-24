import { css, html, LitElement } from 'lit-element';

class NavigationComponent extends LitElement {
  
  constructor() {
    super();
  }

  static get styles() {
    return css`
      :host .navigation {
        display: block;
        width: 40%;
        margin: 25px auto;
        text-align: center;
      }
      
      :host .navigation ul {
        list-style: none;
        margin: 0 auto;
        width: 80%;
        padding: 0;
      }
      
      :host .navigation li {
        display: inline-block;
        width: 100px;
      }
      
      :host .navigation a {
        color: #020202;
        font-size: 1.5em;
      }
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
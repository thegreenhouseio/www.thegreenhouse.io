class NavigationComponent extends HTMLElement {
  constructor() {
    super();

    this.root = this.attachShadow({ mode: 'closed' });
  }

  // run some code when the component is ready
  connectedCallback() {
    this.root.innerHTML = this.getTemplate();
  }

  // create templates that interpolate variables and HTML!
  getTemplate() {
    return `
      <style>
        .navigation {
          display: block;
          width: 40%;
          margin: 25px auto;
          text-align: center;
        }
        
        .navigation ul {
          list-style: none;
          margin: 0 auto;
          width: 80%;
        }
        
        .navigation li {
          display: inline-block;
          width: 100px;
        }
        
        .navigation a {
          color: #020202;
          font-size: 1.5em;
        }
      </style>

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
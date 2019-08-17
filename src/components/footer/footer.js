class FooterComponent extends HTMLElement {
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
        footer {
          width: 50%;
          margin: 0 auto;
          text-align: center;
        }

        ul {
          list-style: none;
          padding: 0;
          margin-top: 10px;
        }

        li {
          display: inline-block;
        }

        img {
          display: block;
          height: 60px;
          width: 60px;
          margin: 0 10px;
        }
        
        .copyright {
          display: inline-block;
          margin: 10px auto;
        }
      </style>

      <footer>
        <ul>
          <li>
            <a
              rel="noopener"
              target="_blank" 
              href="https://www.linkedin.com/in/owen-buckley-91393447/"
            >
              <img src="/assets/logos/linkedin.svg">
            </a>
          </li>

          <li>
            <a
              rel="noopener"
              target="_blank" 
              href="https://twitter.com/thegreenhouseio/"
            >
              <img src="/assets/logos/twitter.svg">
            </a>
          </li>

          <li>
            <a
              rel="noopener"
              target="_blank" 
              href="https://medium.com/@thegreenhouseio/"
            >
              <img src="/assets/logos/medium.svg">
            </a>
          </li>

          <li>
            <a
              rel="noopener"
              target="_blank" 
              href="https://github.com/thegreenhouseio/"
            >
              <img src="/assets/logos/github.svg">
            </a>
          </li>
        <ul>
        
        <span class="copyright">&copy; Owen Buckley / thegreenhouse.io</span>
      </footer>
    `;
  }
}

customElements.define('app-footer', FooterComponent);
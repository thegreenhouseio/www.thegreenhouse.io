import { css, html, LitElement } from 'lit-element';
import SocialLinksService from '../../services/social-links/social-links-service.js';

class SocialIconLinkComponent extends LitElement {

  constructor() {
    super();
  }

  static get properties() {
    return {
      link: {
        type: String
      },
      name: {
        type: String
      }
    };
  }

  static get styles() {
    return css`
      :host img {
        display: block;
        height: 60px;
        width: 60px;
        margin: 0 10px;
      }
    `;
  }

  render() {
    const { link, name } = this;
    let detectedName = 'default';
    let detectedLink = '/';

    if (link && !name) {
      if (link.indexOf('github') >= 0) {
        detectedName = 'github';
      } else if (link.indexOf('medium') >= 0) {
        detectedName = 'medium';
      } else if (link.indexOf('meetup') >= 0) {
        detectedName = 'meetup';
      }
    } else if (name) {
      detectedName = name;
    }

    if (name && !link) {
      detectedLink = new SocialLinksService().getLinksAsMap().get(name);
    } else if (link) {
      detectedLink = link;
    }

    return html`
      <a rel="noopener" target="_blank" href="${detectedLink}" click="getOutboundLink('${detectedLink}');">
        <img src="/assets/logos/${detectedName}.svg" alt="${detectedName} logo">
      </a>
    `;
  }
}

customElements.define('app-social-icon-link', SocialIconLinkComponent);
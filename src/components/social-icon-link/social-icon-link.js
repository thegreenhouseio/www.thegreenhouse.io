import { html, LitElement } from 'lit-element';

import SocialLinksService from '../../services/social-links/social-links-service';

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

  render() {
    const { link, name } = this;
    let detectedName = '';
    let detectedLink = '';

    if (link && !name) {
      if (link.indexOf('github') >= 0) {
        detectedName = 'github';
      } else if (link.indexOf('medium') >= 0) {
        detectedName = 'medium';
      } else if (link.indexOf('meetup') >= 0) {
        detectedName = 'meetup';
      } else {
        detectedName = 'default';
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
      <style>
        img {
          display: block;
          height: 60px;
          width: 60px;
          margin: 0 10px;
        }
      </style>

      <a rel="noopener" target="_blank" href="${detectedLink}" @onclick="captureOutboundLink(\'${detectedLink}\'); return false;">
        <img src="/assets/logos/${detectedName}.svg">
      </a>
    `;
  }
}

customElements.define('app-social-icon-link', SocialIconLinkComponent);
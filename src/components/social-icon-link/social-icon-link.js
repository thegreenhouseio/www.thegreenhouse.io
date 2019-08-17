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

    console.log('link', link);
    console.log('name', name);

    let detectedName = '';
    let detectedLink = '';

    if (link && !name) {
      console.log('IS MEETUP????', link.indexOf('meetup') >= 0);

      if (link.indexOf('meetup') >= 0) {
        detectedName = 'meetup';
      } else if (link.indexOf('medium') >= 0) {
        detectedName = 'medium';
      } else {
        detectedName = 'default';
      }
      // switch (link) {

      //   case link.indexOf('github') >= 0:
      //     console.log('picking github!!!!!!!!!!');
      //     detectedName = 'github';
      //     break;
      //   case link.indexOf('linkedin') >= 0:
      //     console.log('picking linkedin!!!!!!!!!!');
      //     detectedName = 'linkedin';
      //     break;
      //   case link.indexOf('medium') >= 0:
      //     console.log('picking medium!!!!!!!!!!');
      //     detectedName = 'medium';
      //     break;
      //   case link.indexOf('meetup') >= 0:
      //     console.log('picking meetup!!!!!!!!!!');
      //     detectedName = 'meetup';
      //     break;
      //   case link.indexOf('twitter') >= 0:
      //     console.log('picking twitter!!!!!!!!!!');
      //     detectedName = 'twitter';
      //     break;
      //   default:
      //     console.log('NOT picking anything!!!!!!!!!!');
      //     detectedName = 'default';
      //     break;
          
      // }
    } else if (name) {
      console.log('name else???');
      detectedName = name;
    }

    if (name && !link) {
      detectedLink = new SocialLinksService().getLinksAsMap()[name].link;
    } else if (link) {
      detectedLink = link;
    }

    console.log('detectedName', detectedName);
    console.log('detectedLink', detectedLink);

    const logoPath = `/assets/logos/${detectedName}.svg`;

    console.log('logoPath', logoPath);
    console.log('********************');

    return html`
      <style>
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
        
      </style>

      <a rel="noopener" target="_blank" href="${detectedLink}">
        <img src="${logoPath}">
      </a>
    `;
  }
}

customElements.define('app-social-icon-link', SocialIconLinkComponent);
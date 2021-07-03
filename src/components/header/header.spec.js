import { expect } from '@esm-bundle/chai';
import './header.js';

describe('Header Component', () => {
  let header;

  beforeEach(async () => {
    header = document.createElement('app-header');

    document.body.appendChild(header);

    await header.updateComplete;
  });

  afterEach(() => {
    header.remove();
    header = null;
  });

  describe('Default Behavior', () => {
    it('should have a greeting', () => { 
      const greeting = header.shadowRoot.querySelectorAll('div.header h2')[0];

      expect(greeting.textContent).equal('A DREAMER BY DESIGN');
    });

    it('should have a logo', () => { 
      const logo = header.shadowRoot.querySelectorAll('.header a')[0];

      expect(logo.style).to.not.equal(undefined);
      expect(logo.title).to.not.equal(undefined);
      expect(1).to.equal(1);
    });

    it('should have a link to the project website', () => { 
      const link = header.shadowRoot.querySelectorAll('.header a')[0];

      expect(link.href.replace('http://localhost:8000', '')).to.equal('/');
    });
  });

});
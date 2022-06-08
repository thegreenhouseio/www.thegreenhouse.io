import { expect } from '@esm-bundle/chai';
import './footer.js';

describe('Footer Component', () => {
  let footer;

  beforeEach(async () => {
    footer = document.createElement('app-footer');

    document.body.appendChild(footer);

    await footer.updateComplete;
  });

  afterEach(() => {
    footer.remove();
    footer = null;
  });

  describe('Default Behavior', () => {
    it('should not be null', () => {
      expect(footer).not.equal(undefined);
      expect(footer.shadowRoot.querySelectorAll('footer').length).equal(1);
    });
  
    it('should have five <app-social-icon-link/> components in a list', () => {
      expect(footer.shadowRoot.querySelectorAll('ul li app-social-icon-link').length).equal(5);
    });
  
    it('should display copyright text', () => {
      const copyright = footer.shadowRoot.querySelectorAll('.copyright')[0];

      expect(copyright.textContent).equal('© Owen Buckley / thegreenhouse.io');
    });

    describe('social link icons', () => {
      it('should have a linkedin icon', () => {
        const linkedin = footer.shadowRoot.querySelectorAll('ul li app-social-icon-link[name="linkedin"]');
       
        expect(linkedin.length).equal(1);
      });

      it('should have a twitter icon', () => {
        const twitter = footer.shadowRoot.querySelectorAll('ul li app-social-icon-link[name="twitter"]');
       
        expect(twitter.length).equal(1);
      });

      it('should have a medium icon', () => {
        const medium = footer.shadowRoot.querySelectorAll('ul li app-social-icon-link[name="medium"]');
       
        expect(medium.length).equal(1);
      });

      it('should have a github icon', () => {
        const github = footer.shadowRoot.querySelectorAll('ul li app-social-icon-link[name="github"]');
       
        expect(github.length).equal(1);
      });

      it('should have a youtube icon', () => {
        const youtube = footer.shadowRoot.querySelectorAll('ul li app-social-icon-link[name="youtube"]');
       
        expect(youtube.length).equal(1);
      });
    });
  });

});
import { expect } from '@esm-bundle/chai';
import './navigation';

describe('Navigation Component', () => {
  let navigation;

  beforeEach(async () => {
    navigation = document.createElement('app-navigation');

    document.body.appendChild(navigation);

    await navigation.updateComplete;
  });

  afterEach(() => {
    navigation.remove();
    navigation = null;
  });

  describe('Default Behavior', () => {
    it('should have three static links', () => {
      const links = navigation.shadowRoot.querySelectorAll('.navigation a');

      expect(links.length).to.equal(3);
    });

    it('should have an about link', () => {
      const links = navigation.shadowRoot.querySelectorAll('nav ul li a')[0];

      expect(links.href).contain('/about/');
      expect(links.innerHTML).to.equal('About');
    });

    it('should have a projects link', () => {
      const links = navigation.shadowRoot.querySelectorAll('nav ul li a')[1];

      expect(links.href).contain('/projects/');
      expect(links.innerHTML).to.equal('Projects');
    });

    it('should have a blogs link', () => {
      const links = navigation.shadowRoot.querySelectorAll('nav ul li a')[2];

      expect(links.href).contain('/blog/');
      expect(links.innerHTML).to.equal('Blog');
    });
  });

});
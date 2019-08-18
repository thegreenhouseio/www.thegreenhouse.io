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

      expect(links.length).toBe(3);
    });

    it('should have an about link', () => {
      const links = navigation.shadowRoot.querySelectorAll('nav ul li a')[0];

      expect(links.href).toContain('/about/');
      expect(links.innerHTML).toBe('About');
    });

    it('should have a projects link', () => {
      const links = navigation.shadowRoot.querySelectorAll('nav ul li a')[1];

      expect(links.href).toContain('/projects/');
      expect(links.innerHTML).toBe('Projects');
    });

    it('should have a blogs link', () => {
      const links = navigation.shadowRoot.querySelectorAll('nav ul li a')[2];

      expect(links.href).toContain('/blog/');
      expect(links.innerHTML).toBe('Blog');
    });
  });

});
import '../social-icon-link/social-icon-link';

describe('SocialIconLink Component', () => {
  let socialIconLink;

  beforeEach(async () => {
    socialIconLink = document.createElement('app-social-icon-link');

    document.body.appendChild(socialIconLink);

    await socialIconLink.updateComplete;
  });

  afterEach(() => {
    socialIconLink.remove();
    socialIconLink = null;
  });

  describe('Default Behavior', () => {
    let img = '';
    let link = '';

    beforeEach(() => {
      img = socialIconLink.shadowRoot.querySelectorAll('a img');
      link = socialIconLink.shadowRoot.querySelectorAll('a');
    });

    it('should have one <a> tag', () => {
      expect(link.length).toBe(1);
    });

    it('should have default <a> tag href', () => {
      expect(link[0].href).toContain('/');
    });

    it('should have default <a> tag rel', () => {
      expect(link[0].rel).toBe('noopener');
    });

    it('should have default <a> tag target', () => {
      expect(link[0].target).toBe('_blank');
    });

    it('should have one <img> tag inside the <a> tag', () => {
      expect(img.length).toBe(1);
    });

    it('should have default <img> tag with src', () => {
      expect(img[0].src).toContain('/assets/logos/default.svg');
    });
  });

});
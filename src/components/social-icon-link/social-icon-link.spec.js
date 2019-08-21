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

    it('should have default <img> tag with alt', () => {
      expect(img[0].alt).toContain('default logo');
    });
  });

  describe('GitHub link', () => {
    const mockLink = 'http://www.github.com/this';
    let img = '';
    let link = '';

    beforeEach(async () => {
      socialIconLink = document.createElement('app-social-icon-link');
      socialIconLink.link = mockLink;

      document.body.appendChild(socialIconLink);
  
      await socialIconLink.updateComplete;

      img = socialIconLink.shadowRoot.querySelectorAll('a img');
      link = socialIconLink.shadowRoot.querySelectorAll('a');
    });

    it('should have one <a> tag', () => {
      expect(link.length).toBe(1);
    });

    it('should have default <a> tag href', () => {
      expect(link[0].href).toContain(mockLink);
    });

    it('should have default <a> tag rel', () => {
      expect(link[0].rel).toBe('noopener');
    });

    it('should have default <a> tag target', () => {
      expect(link[0].target).toBe('_blank');
    });

    it('should have <img> tag inside the <a> tag', () => {
      expect(img.length).toBe(1);
    });

    it('should have <img> tag with github logo for src', () => {
      expect(img[0].src).toContain('/assets/logos/github.svg');
    });

    it('should have <img> tag with github looo for alt', () => {
      expect(img[0].alt).toContain('github logo');
    });

  });

  describe('Meetup link', () => {
    const mockLink = 'http://www.meetup.com/that';
    let img = '';
    let link = '';

    beforeEach(async () => {
      socialIconLink = document.createElement('app-social-icon-link');
      socialIconLink.link = mockLink;

      document.body.appendChild(socialIconLink);
  
      await socialIconLink.updateComplete;

      img = socialIconLink.shadowRoot.querySelectorAll('a img');
      link = socialIconLink.shadowRoot.querySelectorAll('a');
    });

    it('should have one <a> tag', () => {
      expect(link.length).toBe(1);
    });

    it('should have default <a> tag href', () => {
      expect(link[0].href).toContain(mockLink);
    });

    it('should have default <a> tag rel', () => {
      expect(link[0].rel).toBe('noopener');
    });

    it('should have default <a> tag target', () => {
      expect(link[0].target).toBe('_blank');
    });

    it('should have <img> tag inside the <a> tag', () => {
      expect(img.length).toBe(1);
    });

    it('should have <img> tag with meetup logo for src', () => {
      expect(img[0].src).toContain('/assets/logos/meetup.svg');
    });

    it('should have <img> tag with meetup looo for alt', () => {
      expect(img[0].alt).toContain('meetup logo');
    });

  });

  describe('Medium link', () => {
    const mockLink = 'http://www.medium.com/other';
    let img = '';
    let link = '';

    beforeEach(async () => {
      socialIconLink = document.createElement('app-social-icon-link');
      socialIconLink.link = mockLink;

      document.body.appendChild(socialIconLink);
  
      await socialIconLink.updateComplete;

      img = socialIconLink.shadowRoot.querySelectorAll('a img');
      link = socialIconLink.shadowRoot.querySelectorAll('a');
    });

    it('should have one <a> tag', () => {
      expect(link.length).toBe(1);
    });

    it('should have default <a> tag href', () => {
      expect(link[0].href).toContain(mockLink);
    });

    it('should have default <a> tag rel', () => {
      expect(link[0].rel).toBe('noopener');
    });

    it('should have default <a> tag target', () => {
      expect(link[0].target).toBe('_blank');
    });

    it('should have <img> tag inside the <a> tag', () => {
      expect(img.length).toBe(1);
    });

    it('should have <img> tag with medium logo for src', () => {
      expect(img[0].src).toContain('/assets/logos/medium.svg');
    });

    it('should have <img> tag with medium looo for alt', () => {
      expect(img[0].alt).toContain('medium logo');
    });

  });

});
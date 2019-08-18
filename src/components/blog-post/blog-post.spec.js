import { slugifyDate } from './blog-post';
import './blog-post';

describe('BlogPost', () => {
  let blogPost;

  beforeEach(async () => {
    blogPost = document.createElement('app-blog-post');

    document.body.appendChild(blogPost);

    await blogPost.updateComplete;
  });

  afterEach(() => {
    blogPost.remove();
    blogPost = null;
  });

  describe('slugifyDate', () => {
    const mockPost = {
      title: 'Some title for this post',
      date: '04.11.2018',
      image: 'image.png'
    };
    
    it('should return a slugified date when the right format is provided', () => {
      const slugifiedDate = slugifyDate(mockPost.date);

      expect(slugifiedDate).toBe('2018/11/04/');
    });
  });

  describe('Default Behavior', () => {
    
    it('should have be in an <article> tag', () => { 
      const article = blogPost.shadowRoot.querySelectorAll('article');

      expect(article.length).toBe(1);
    });

    it('should have a wrapping element with background image', () => { 
      const header = blogPost.shadowRoot.querySelectorAll('article .header')[0];

      expect(header.style.backgroundImage).toBe('');
    });

    it('should have an empty title in the header', () => { 
      const title = blogPost.shadowRoot.querySelectorAll('article .header .title')[0];

      expect(title.innerHTML).toContain('');
    });

    it('should have an empty date in the header', () => { 
      const date = blogPost.shadowRoot.querySelectorAll('article .header .date')[0];

      expect(date.innerHTML).toContain('');
    });

    it('should have no slotted content', () => { 
      const content = blogPost.shadowRoot.querySelectorAll('article .content')[0];

      expect(content.innerHTML).toContain('');
    });
  });

  describe('Mock Content Behavior', () => {
    const mockPost = {
      title: 'Some title for this post',
      date: '04.11.2018',
      image: 'image.png',
      body: '<p>My Content</p>'
    };

    beforeEach(async () => {
      blogPost = document.createElement('app-blog-post');
      blogPost.image = mockPost.image;
      blogPost.date = mockPost.date;
      blogPost.title = mockPost.title;
      blogPost.innerHTML = mockPost.body;

      document.body.appendChild(blogPost);

      await blogPost.updateComplete;
    });

    it('should have be in an <article> tag', () => { 
      const article = blogPost.shadowRoot.querySelectorAll('article');

      expect(article.length).toBe(1);
    });

    it('should have a wrapping element with background image', () => { 
      const header = blogPost.shadowRoot.querySelectorAll('article .header')[0];

      expect(header.style.backgroundImage).toBe('url("image.png")');
    });

    it('should have an empty title in the header', () => { 
      const title = blogPost.shadowRoot.querySelectorAll('article .header .title')[0];

      expect(title.innerHTML).toContain(mockPost.title);
    });

    it('should have an empty date in the header', () => { 
      const date = blogPost.shadowRoot.querySelectorAll('article .header .date')[0];

      expect(date.innerHTML).toContain(`Published: ${mockPost.date}`);
    });

    // TODO test slotted content
    xit('should have no slotted content', () => { 
      const content = blogPost.shadowRoot.querySelectorAll('article .content')[0];
  
      expect(content.innerHTML).toBe(mockPost.body);
    });
  });

});
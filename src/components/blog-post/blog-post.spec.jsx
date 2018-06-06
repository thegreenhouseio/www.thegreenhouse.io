import * as React from 'react';
import { mount, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-15';
import Helmet from 'react-helmet';
import { slugifyDate } from './blog-post';
import BlogPost from './blog-post';

configure({ adapter: new Adapter() });

describe('BlogPost Component', () => {  
  
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

  describe('basic functionality', () => {
    const mockPost = {
      title: 'Some title for this post',
      date: '04.11.2018',
      image: 'image.png'
    };
    let post;

    beforeEach(() => {
      post = mount(
        <BlogPost {...mockPost}>
          <p>Hello World</p>
        </BlogPost>
      );
    });

    it('should not be null', () => {
      expect(post).not.toBeNull();
      expect(post.find('.blog-post').length).toEqual(1);
    });

    it('should display the correct title', () => {
      const title = post.find('h1.title');

      expect(title.length).toBe(1);
      expect(title.text()).toBe(mockPost.title);
    });

    it('should display the correct date', () => {
      const date = post.find('h5.date');

      expect(date.length).toBe(1);
      expect(date.text()).toBe(`Published: ${mockPost.date}`);
    });

    it('should display the correct image if the image path is local', () => {
      const header = post.find('.header');

      expect(header.length).toBe(1);
      expect(header.props().style.backgroundImage).toBe(`url(\'${mockPost.image}\')`);
    });

    it('should display the correct content', () => {
      const content = post.find('.content');

      expect(content.length).toBe(1);
      expect(content.text()).toBe('Hello World');
    });

    describe('<meta> tags for Social Sharing', () => {
      beforeEach(() => {
        post = mount(
          <BlogPost {...mockPost}>
            <p>Hello World</p>
          </BlogPost>
        );
      });
  
      it('should have a <Helmet> component', () => {
        const helmet = post.find(Helmet);
  
        expect(helmet.length).toBe(1);
      });
  
      it('should have a <meta> tag for title', () => {
        const helmet = Helmet.peek();
        
        helmet.metaTags.filter((tag) => {
          if (tag.property === 'og:title') {
            expect(tag.content).toBe('The Greenhouse I/O - Blog');
          }
        });
      });

      it('should have a <meta> tag for type', () => {
        const helmet = Helmet.peek();
        
        helmet.metaTags.filter((tag) => {
          if (tag.property === 'og:type') {
            expect(tag.content).toBe('article');
          }
        });
      });

      it('should have a <meta> tag for url', () => {
        const helmet = Helmet.peek();
        const slugDate = slugifyDate(mockPost.date);

        helmet.metaTags.filter((tag) => {
          if (tag.property === 'og:url') {
            expect(tag.content).toBe(`https://www.thegreenhouse.io/blog/${slugDate}`);
          }
        });
      });

      it('should have a <meta> tag for image with a remote path', () => {
        const helmet = Helmet.peek();
        
        helmet.metaTags.filter((tag) => {
          if (tag.property === 'og:image') {
            expect(tag.content).toBe(`https://s3.amazonaws.com/www.thegreenhouse.io${mockPost.image}`);
          }
        });
      });

      it('should have a <meta> tag for description', () => {
        const helmet = Helmet.peek();
        
        helmet.metaTags.filter((tag) => {
          if (tag.property === 'og:description') {
            expect(tag.content).toBe(mockPost.title);
          }
        });
      });
    });
  });

  describe('Extended Meta Tag Functionality', () => {
    const mockPost = {
      title: 'Some title for this post',
      date: '04.11.2018',
      description: 'An optional description',
      image: 'https://s3.amazonaws.com/uploads.thegreenhouse.io/project-evergreen/logo-small.png'
    };

    beforeEach(() => {
      mount(
        <BlogPost {...mockPost}>
          <p>Hello World</p>
        </BlogPost>
      );
    });

    it('should have a <meta> tag for image with a remote URL / path when provided an external URL', () => {
      const helmet = Helmet.peek();
      
      helmet.metaTags.filter((tag) => {
        if (tag.property === 'og:description') {
          expect(tag.content).toBe(mockPost.description);
        }
      });
    });
  });

});
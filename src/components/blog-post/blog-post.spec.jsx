import * as React from 'react';
import { mount, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-15';
import BlogPost from './blog-post';

configure({ adapter: new Adapter() });

describe('BlogPost Component', () => {
  const mockPost = {
    title: 'Some title for this post',
    date: '04.11.2018',
    image: 'http://www.domain.com/image.png'
  };
  let post;
  
  describe('basic functionality', () => {
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

    it('should display the correct image', () => {
      const header = post.find('.header');

      expect(header.length).toBe(1);
      expect(header.props().style.backgroundImage).toBe(`url(\'${mockPost.image}\')`);
    });

    it('should display the correct content', () => {
      const content = post.find('.content');

      expect(content.length).toBe(1);
      expect(content.text()).toBe('Hello World');
    });
  });
});
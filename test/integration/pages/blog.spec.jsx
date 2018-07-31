import * as React from 'react';
import { mount, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { MemoryRouter } from 'react-router-dom';
import BlogPage from '../../../src/pages/blog/index.jsx';

configure({ adapter: new Adapter() });

describe('BlogPage', () => {
  let blog;

  beforeEach(() => {
    blog = mount(
      <MemoryRouter>
        <BlogPage/>
      </MemoryRouter>
    ).children();
  });

  describe('default state', () => {
  
    it('should be defined', () => {
      expect(blog).toBeDefined();
      expect(blog.find('#blog').length).toBe(1);
    });
  
    it('should have two lists', () => {
      expect(blog.find('ul.blog-posts-list').length).toBe(2);
    });

  });
});
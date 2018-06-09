import * as React from 'react';
import { mount, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import BlogPage from '../../../src/pages/blog/index.jsx';

configure({ adapter: new Adapter() });

xdescribe('BlogPage', () => {
  let blog;

  beforeEach(() => {
    blog = mount(<BlogPage/>);
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
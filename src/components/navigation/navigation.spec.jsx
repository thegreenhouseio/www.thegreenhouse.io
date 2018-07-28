import * as React from 'react';
import { mount, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { MemoryRouter } from 'react-router-dom';
import Navigation from './navigation';

configure({ adapter: new Adapter() });

describe('Navigation Component', () => {
  const navLength = 3;
  let navigation;

  global.___loader = { // eslint-disable-line no-underscore-dangle
    enqueue: jest.fn()
  };
  
  beforeEach(() => {
    navigation = mount(
      <MemoryRouter>
        <Navigation/>
      </MemoryRouter>
    ).children();
  });

  it('should not be null', () => {
    expect(navigation).not.toBeNull();
    expect(navigation.find('.navigation').length).toEqual(1);
  });

  it('should have a <nav> elements', () => {
    expect(navigation).not.toBeNull();
    expect(navigation.find('nav').length).toEqual(1);
  });

  it('should have an ul with three items', () => {
    expect(navigation.find('ul').length).toEqual(1);
    expect(navigation.find('ul li').length).toEqual(3);
  });

  it('should have three <Link> components', () => {
    expect(navigation.find('Link').length).toEqual(navLength);
  });

  it('should have three <Link> components', () => {
    expect(navigation.find('Link').length).toEqual(navLength);
  });

  describe('About link', () => {
    let aboutLink;

    beforeEach(() => {
      aboutLink = aboutLink = navigation.find('ul li Link#link-about');
    });

    it('should only have one About link', () => {
      expect(aboutLink.length).toBe(1);
    });

    it('<Link> component should say About', () => {
      expect(aboutLink.text()).toEqual('About');
    });

    it('should link to the About page', () => {
      expect(aboutLink.prop('to').pathname).toEqual('/about/');
    });

  });

  describe('Projects link', () => {
    let projectsLink;

    beforeEach(() => {
      projectsLink = navigation.find('ul li Link#link-projects');
    });

    it('should only have one Projects link', () => {
      expect(projectsLink.length).toBe(1);
    });

    it('<Link> component should say Projects', () => {
      expect(projectsLink.text()).toEqual('Projects');
    });

    it('should link to the About page', () => {
      expect(projectsLink.prop('to').pathname).toEqual('/projects/');
    });
    
  });

  describe('Blog link', () => {
    let blogLink;

    beforeEach(() => {
      blogLink = blogLink = navigation.find('ul li Link#link-blog');
    });

    it('should only have one Blog link', () => {
      expect(blogLink.length).toBe(1);
    });

    it('<Link> component should say Blog', () => {
      expect(blogLink.text()).toEqual('Blog');
    });

    it('should link to the Blog page', () => {
      expect(blogLink.prop('to').pathname).toEqual('/blog/');
    });
    
  });

});
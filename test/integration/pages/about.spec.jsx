import * as React from 'react';
import { mount, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-15';
import About from '../../../src/pages/about';

configure({ adapter: new Adapter() });

describe('About Page', () => {
  let about;

  beforeEach(() => {
    about = mount(<About/>);
  });

  describe('default state', () => {
  
    it('should be defined', () => {
      expect(about).toBeDefined();
      expect(about.find('#about').length).toBe(1);
    });
  
    it('should have a sub heading', () => {
      const subHeading = about.find('.sub-heading');
  
      expect(subHeading.length).toBe(1);
      expect(subHeading.text()).toBeDefined();
    });
  
    it('should have sub nav links', () => {
      const subHeading = about.find('.content-links');
      const links = subHeading.find('h2');
  
      expect(subHeading.length).toBe(1);
      expect(subHeading.text()).toBeDefined();
      expect(links.length).toBe(2);
    });
  
    it('should have a content section', () => {
      const subHeading = about.find('.content-output');
  
      expect(subHeading.length).toBe(1);
      expect(subHeading.text()).toBeDefined();
    });
  
    it('should have the Speaking Content section be the active section by default', () => {
      expect(about.state().activeSection).toBe('SPEAKING');
      expect(about.find('.content-speaking').length).toBe(1);
    });

    it('should NOT have any other content sections displayed by default', () => {
      expect(about.find('.content-writing').length).toBe(0);
    });

    it('should have articles', () => {
      expect(about.state().articles.length).toBeGreaterThanOrEqual(1);
    });

    it('should have presentations', () => {
      expect(about.state().presentations.length).toBeGreaterThanOrEqual(1);
    });

    it('should have social links', () => {
      expect(about.state().socialLinksMap).toBeDefined();
    });
  });

  describe('Speaking Content Section', () => {
    it('should display the speaking content when the link is clicked after another click', () => {
      about.find('.link-writing').simulate('click');
      about.find('.link-speaking').simulate('click');

      expect(about.find('.content-speaking').length).toBe(1);
    });
  });

  describe('Writing Content Section', () => {
    beforeEach(() => {
      about.find('.link-writing').simulate('click');
    });

    it('should display speaking content when the speaking link is clicked', () => {
      about.find('.link-writing').simulate('click');

      // test for a <CardList/> component here ideally
      expect(about.find('.content-writing').length).toBe(1);
    });

    it('should have a call to action when displayed', () => {
      about.find('.link-writing').simulate('click');
      
      const cta = about.find('.cta');
  
      expect(cta.length).toBe(1);
      expect(cta.text()).toBeDefined();
    });
  });

});
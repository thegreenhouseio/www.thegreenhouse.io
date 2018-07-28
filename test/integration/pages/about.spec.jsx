import * as React from 'react';
import { mount, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { MemoryRouter } from 'react-router-dom';
import About from '../../../src/pages/about';

configure({ adapter: new Adapter() });

describe('About Page', () => {
  let about;

  global.___loader = { // eslint-disable-line no-underscore-dangle
    enqueue: jest.fn()
  };
  
  beforeEach(() => {
    about = mount(
      <MemoryRouter>
        <About/>
      </MemoryRouter>
    ).children();
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
      expect(about.find('.content-speaking').length).toBe(1);
    });

    it('should NOT have any other content sections displayed by default', () => {
      expect(about.find('.content-writing').length).toBe(0);
    });
  });

  describe('Speaking Content Section', () => {
    // global.___loader = {
    //   enqueue: jest.fn()
    // };

    it('should display the speaking content when the link is clicked after another click', () => {
      about.find('.link-writing').simulate('click');
      about.find('.link-speaking').simulate('click');

      expect(about.find('.content-speaking').length).toBe(1);
      expect(about.find('.content-writing').length).toBe(0);
    });
  });

  describe('Writing Content Section', () => {
    beforeEach(() => {
      about = mount(
        <MemoryRouter>
          <About/>
        </MemoryRouter>
      );

      about.find('.link-writing').simulate('click');
    });
    
    it('should display speaking content when the speaking link is clicked', () => {
      expect(about.find('.content-writing').length).toBe(1);
      expect(about.find('.content-speaking').length).toBe(0);
    });

    it('should have a call to action when displayed', () => {      
      const cta = about.find('.cta');
  
      expect(cta.length).toBe(1);
      expect(cta.text()).toBeDefined();
    });
  });

});
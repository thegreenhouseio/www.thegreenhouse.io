import * as React from 'react';
import { mount, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-15';
import CardList from '../../../src/components/card-list/card-list';
import About from '../../../src/pages/about';

configure({ adapter: new Adapter() });

describe('About Page', () => {
  let about;

  beforeEach(() => {
    about = mount(<About/>);
  });

  it('should be defined', () => {
    expect(about).toBeDefined();
    expect(about.find('.about').length).toBe(1);
  });

  it('should have a sub heading', () => {
    const subHeading = about.find('p.sub-heading');

    expect(subHeading.length).toBe(1);
    expect(subHeading.text()).toBeDefined();
  });

  it('should have a call to action', () => {
    const subHeading = about.find('span.cta');

    expect(subHeading.length).toBe(1);
    expect(subHeading.text()).toBeDefined();
  });

  describe('it should have content', () => {
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

  describe('Speaking section', () => {
    let section;

    beforeEach(() => {
      section = about.find('div.speaking');
    });

    it('should have have a heading', () => {      
      expect(section.length).toBe(1);
    });

    it('should have a <CardList/>', () => {
      expect(section.find(CardList).length).toBe(1);
    });
  });

});
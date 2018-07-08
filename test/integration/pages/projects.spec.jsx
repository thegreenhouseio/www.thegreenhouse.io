import * as React from 'react';
import { mount, configure } from 'enzyme';
import CardList from '../../../src/components/card-list/card-list';
import Projects from '../../../src/pages/projects';
import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });

xdescribe('Projects Page', () => {
  let about;

  beforeEach(() => {
    about = mount(<Projects/>);
  });

  it('should be defined', () => {
    expect(about).toBeDefined();
    expect(about.find('.projects').length).toBe(1);
  });

  it('should have a sub heading', () => {
    const subHeading = about.find('p.sub-heading');

    expect(subHeading.length).toBe(1);
    expect(subHeading.text()).toBeDefined();
  });

  describe('it should have content', () => {
    it('should have projects', () => {
      expect(about.state().projects.length).toBeGreaterThanOrEqual(1);
    });
  });

  describe('Projects section', () => {
    let section;

    beforeEach(() => {
      section = about.find('div.projects');
    });

    it('should have a <CardList/>', () => {
      expect(section.find(CardList).length).toBe(1);
    });
  });

});
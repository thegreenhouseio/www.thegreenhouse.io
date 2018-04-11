import * as React from 'react';
import { mount, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-15';
import Home from '../../../src/pages/index';

configure({ adapter: new Adapter() });

describe('Home Page', () => {
  let home;

  beforeEach(() => {
    home = mount(<Home/>);
  });

  it('should be defined', () => {
    expect(home).toBeDefined();
    expect(home.find('#home').length).toBe(1);
  });

  it('should have some content', () => {
    expect(home.find('p').length).toBeGreaterThanOrEqual(3);
  });

});
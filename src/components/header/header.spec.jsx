import * as React from 'react';
import { mount, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-15';
import Header from './header';

configure({ adapter: new Adapter() });

xdescribe('Header Component', () => {
  let header;

  beforeEach(() => {
    header = mount(<Header/>);
  });

  xit('should not be null', () => {
    expect(header).not.toBeNull();
    expect(header.find('.header').length).toEqual(1);
  });

});
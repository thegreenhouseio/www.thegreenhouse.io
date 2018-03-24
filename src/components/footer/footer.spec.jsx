import * as React from 'react';
import { mount, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-15';
import SocialIcons from 'react-social-icons';
import Footer from './footer';

configure({ adapter: new Adapter() });

describe('Footer Component', () => {
  let footer;

  beforeEach(() => {
    footer = mount(<Footer />);
  });

  it('should not be null', () => {
    expect(footer).not.toBeNull();
    expect(footer.find('.footer').length).toEqual(1);
  });

  it('should have a <SocialIcons/> component', () => {
    expect(footer.find(SocialIcons).length).toEqual(1);
  });

  it('should have have URLs passed to <SocialLinksComponent?', () => {
    // TODO
  });

  it('should display twitter social link', () => { 
    // TODO
  });

  it('should display medium social link', () => { 
    // TODO
  });

  it('should display github social link', () => { 
    // TODO
  });

  it('should display linkedin social link', () => { 
    // TODO
  });
});
import * as React from 'react';
import { mount, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { SocialIcon } from 'react-social-icons';
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

  it('should have no <SocialIcon/> components', () => {
    expect(footer.find(SocialIcon).length).toEqual(0);
  });

  it('should display copyright text', () => {
    expect(footer.find('.copyright').text()).toEqual('© Owen Buckley / thegreenhouse.io');
  });

  it('should display the correct <SocialIcon/> components based on urls prop', () => {
    let socialIconElements = [];
    const mockUrls = [
      'it doesnt even',
      'really matter',
      'what I pass',
      '✌️'
    ];

    footer = mount(<Footer links={mockUrls}/>);
    socialIconElements = footer.find(SocialIcon);

    expect(socialIconElements.length).toEqual(mockUrls.length);

    socialIconElements.map((element, idx) => {
      expect(element.prop('url')).toEqual(mockUrls[idx]);
    });
  });

});
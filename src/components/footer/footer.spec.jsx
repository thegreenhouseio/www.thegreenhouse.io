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

  it('should have default urls prop set to <SocialIcons/>s urls prop', () => {
    expect(footer.find(SocialIcons).prop('urls')).toEqual([]);
  });

  it('should have passed urls prop set to <SocialIcons/>s urls prop', () => {
    const mockUrls = [
      'it doesnt even',
      'really matter',
      'what I pass',
      '✌️'
    ];

    footer = mount(<Footer links={mockUrls}/>);

    expect(footer.find(SocialIcons).prop('urls')).toEqual(mockUrls);
  });

});
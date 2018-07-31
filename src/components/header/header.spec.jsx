import * as React from 'react';
import { mount, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { MemoryRouter } from 'react-router-dom';
import Header from './header';

configure({ adapter: new Adapter() });

describe('Header Component', () => {
  let header;

  beforeEach(() => {
    header = mount(
      <MemoryRouter>
        <Header/>
      </MemoryRouter>
    ).children();
  });

  it('should not be null', () => {
    expect(header).not.toBeNull();
    expect(header.find('.header').length).toEqual(1);
  });

  it('should have a <header> element', () => {
    expect(header.find('header').length).toEqual(1);
  });

  it('should have <h2> element with text', () => {
    const heading = header.find('h2');

    expect(heading.length).toEqual(1);
    expect(heading.text()).toEqual('A DREAMER BY DESIGN');
  });

  it('should have a link to the home page', () => {
    const link = header.find('Link');

    expect(link.length).toEqual(1);
    expect(link.prop('to').pathname).toEqual('/');
  });

});
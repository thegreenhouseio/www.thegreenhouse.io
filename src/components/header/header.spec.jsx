import * as React from 'react';
import { mount, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { MemoryRouter } from 'react-router-dom';
import Header from './header';

configure({ adapter: new Adapter() });

describe('Header Component', () => {
  let header;

  global.___loader = {
    enqueue: jest.fn()
  };
  
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

});
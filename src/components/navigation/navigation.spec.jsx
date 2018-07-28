import * as React from 'react';
import { mount, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { MemoryRouter } from 'react-router-dom';
import Navigation from './navigation';

configure({ adapter: new Adapter() });

describe('Navigation Component', () => {
  let header;

  global.___loader = {
    enqueue: jest.fn()
  };
  
  beforeEach(() => {
    header = mount(
      <MemoryRouter>
        <Navigation/>
      </MemoryRouter>
    ).children();
  });

  it('should not be null', () => {
    expect(header).not.toBeNull();
    expect(header.find('.navigation').length).toEqual(1);
  });

});
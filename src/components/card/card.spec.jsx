import * as React from 'react';
import { SocialIcon } from 'react-social-icons';
import { mount, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-15';
import Card from './card';

configure({ adapter: new Adapter() });

describe('Card Component', () => {
  const mockItem = {
    abstract: 'Some abstract that tells about this thing',
    link: 'http://www.abc.com/1/',
    title: 'My Mock Item Title'
  };
  let card;
  
  describe('basic layout', () => {
    beforeEach(() => {
      card = mount(<Card item={mockItem}/>);
    });

    it('should not be null', () => {
      expect(card).not.toBeNull();
      expect(card.find('.card').length).toEqual(1);
    });

    it('should have a header element', () => {
      expect(card.find('.card-header').length).toBe(1);
    });

    it('should have a content element', () => {
      expect(card.find('.card-content').length).toBe(1);
    });

    it('should have a footer element', () => {
      expect(card.find('.card-footer').length).toBe(1);
    });
  });

  describe('rendering an item with (required) paramaters', () => {
    
    beforeEach(() => {
      card = mount(<Card item={mockItem}/>);
    });

    it('should have the title set in a heading', () => {
      expect(card.find('h3.card-header-heading').text()).toContain(mockItem.title);
    });

    it('should have the link set in an <a> tag', () => {
      expect(card.find('a.card-header-heading-link').prop('href')).toEqual(mockItem.link);
    });

    it('should have an abstract set in an article', () => {
      expect(card.find('.card-content').text()).toEqual(mockItem.abstract);
    });

    xit('should have a link set in a SocialLink component', () => {
      expect(card.find(<SocialIcon/>).length).toEqual(1);
    });
  });

  describe('rendering an item with an image', () => {
    const mockItemWithImage = {
      ...mockItem,
      img: 'https://www.domain.com/image.png'
    };

    beforeEach(() => {
      card = mount(<Card item={mockItemWithImage}/>);
    });

    it('should have an image tag in the footer ', () => {
      expect(card.find('img.card-image').prop('src')).toEqual(mockItemWithImage.img);
    });
  });

  describe('rendering an item with video', () => {
    const mockItemWithVideo = {
      ...mockItem,
      video: 'https://www.youtube.com?v=abx123'
    };

    beforeEach(() => {
      card = mount(<Card item={mockItemWithVideo}/>);
    });

    it('should have an iframe tag in the footer ', () => {
      expect(card.find('iframe.card-video').prop('src')).toEqual(mockItemWithVideo.video);
    });
  });

  describe('rendering an item with a date', () => {
    const mockItemWithDate = {
      ...mockItem,
      date: '3/23/2018'
    };

    beforeEach(() => {
      card = mount(<Card item={mockItemWithDate}/>);
    });

    it('should have a span tag with the date set', () => {
      expect(card.find('span.card-date').text()).toEqual(`Date: ${mockItemWithDate.date}`);
    });
  });

});
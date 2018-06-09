import * as React from 'react';
import { mount, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Card from '../card/card';
import CardList from '../card-list/card-list';

configure({ adapter: new Adapter() });

describe('CardList Component', () => {
  let cardList;

  beforeEach(() => {
    cardList = mount(<CardList />);
  });

  it('should not be null', () => {
    expect(cardList).not.toBeNull();
    expect(cardList.find('.card-list').length).toEqual(1);
  });

  describe('Counting Cards', () => {
    it('should display zero <Card> components when zero items are passed as props', () => {
      const mockItems = [];
    
      cardList = mount(<CardList items={mockItems}/>);

      expect(cardList.find(<Card/>).length).toEqual(mockItems.length);
    });
  
    // TODO fix why this count comes back as 0
    xit('should display two <Card> components when two items are passed as props', () => {
      const mockItems = [{
        title: 'A PWA For Providence Geeks pt. 1',
        abstract: `Part two in my performance focused series for the Providence Geeks website in which I go further into the technology used and the techniques 
                  implemented to improve the performance and user exprience of the website.`,
        link: 'https://medium.com/@thegreenhouseio/a-pwa-for-providence-geeks-a-case-study-in-performance-pt-2-4ba811b7be7',
        img: 'https://cdn-images-1.medium.com/max/2000/1*Itn_4AfT13qgCN-YcsuMsQ.png',
        date: '1/6/2018'
      }, {
        title: 'A PWA For Providence Geeks pt. 2',
        abstract: 'The start of a multipart series...',
        link: 'https://medium.com/@thegreenhouseio/a-pwa-for-pvd-geeks-a-case-study-in-performance-and-progressive-web-applications-pt-1-e8cc5c1d0f0a',
        img: 'https://cdn-images-1.medium.com/max/2000/1*Itn_4AfT13qgCN-YcsuMsQ.png',
        date: '1/6/2018'
      }];

      cardList = mount(<CardList items={mockItems}/>);

      expect(cardList.find(<Card/>).length).toEqual(mockItems.length);
    });
  
  });
});
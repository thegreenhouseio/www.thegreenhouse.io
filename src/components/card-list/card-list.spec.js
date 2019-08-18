import './card-list';

describe('CardList Component', () => {
  let cardList;

  beforeEach(async () => {
    cardList = document.createElement('app-card-list');

    document.body.appendChild(cardList);

    await cardList.updateComplete;
  });

  afterEach(() => {
    cardList.remove();
    cardList = null;
  });

  describe('Default Behavior', () => {
    it('should display zero <app-card> components when zero items are passed as props', () => {
      const card = cardList.shadowRoot.querySelectorAll('app-card');

      expect(card.length).toBe(0);
    });
  });

  describe('Counting Cards', () => {
    beforeEach(async () => {
      cardList = document.createElement('app-card-list');
      cardList.items = [{}, {}, {}, {}];
  
      document.body.appendChild(cardList);
  
      await cardList.updateComplete;
    });

    it('should display 4 <app-card> components when 4 items are passed as props', () => {
      const card = cardList.shadowRoot.querySelectorAll('app-card');

      expect(card.length).toBe(cardList.items.length);
    });
  });
});
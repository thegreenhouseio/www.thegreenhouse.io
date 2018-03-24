import React from 'react';
import PropTypes from 'prop-types';
import Card from '../card/card';

const CardList = (props) => {
  
  return (
    <div className="card-list">
      {
        props.items.map(item => {
          return <Card key={item.title} item={item}/>;
        })
      }
    </div>
  );
};

CardList.propTypes = {
  items: PropTypes.array
};

CardList.defaultProps = {
  items: []
};

export default CardList;
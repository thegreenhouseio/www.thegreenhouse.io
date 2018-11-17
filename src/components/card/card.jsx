import React from 'react';
import PropTypes from 'prop-types';
import { SocialIcon } from 'react-social-icons';
import './card.css';

const Card = (props) => {

  return (

    <div className="card">
  
      <div className="wrapper">    
        <div className="card-header-icon">
          <SocialIcon url={props.item.link}/>
        </div>

        <div className="card-header">
          
          <h3 className="card-header-heading">
            <a className="card-header-heading-link" target="_blank" href={props.item.link}>{props.item.title}</a>
          </h3>

          {
            props.item.date 
              ? <span className="card-date"><b>Date: {props.item.date}</b></span>
              : ''
          }

          {
            props.item.slides 
              ? <a href={props.item.slides} target="_blank" className="card-slides">📎 (slides)</a>
              : ''
          }
        </div>

        <div className="card-content">
          <article>{props.item.abstract}</article>
        </div>
        
        <div className="card-footer">
          {
            props.item.img 
              ? <img className="card-image" src={props.item.img} alt={props.item.abstract}/> 
              : ''
          }

          {
            props.item.video 
              ? <iframe title={props.item.abstract} className="card-video" width="100%" height="315" src={props.item.video} frameBorder="0" allowFullScreen/>
              : ''
          }
        </div>
      </div>
    </div>
  );
};

Card.propTypes = {
  item: PropTypes.shape({
    abstract: PropTypes.string.isRequired,
    date: PropTypes.string,
    img: PropTypes.string,
    link: PropTypes.string.isRequired,
    slides: PropTypes.string,
    title: PropTypes.string.isRequired,
    video: PropTypes.string
  })
};

export default Card;
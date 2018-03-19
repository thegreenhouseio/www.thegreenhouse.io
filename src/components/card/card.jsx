import React from "react";
import { SocialIcon } from "react-social-icons";
import './card.css';

const Card = (props) => {

  return (

    <div className="card">
      {props.item.img ? <img src={props.item.img}/>
                      : ''
      }
      
      {props.item.video ? <iframe width="560" height="315" src={props.item.video} frameBorder="0" allowFullScreen/>
                        : ''
      }

      <div className="side-bar">
        <SocialIcon url={props.item.link}/>
        <p>{props.item.date}</p>
      </div>
      <div className="body">
        <h3><a href={props.item.link}>{props.item.title}</a></h3>
        <p>{props.item.abstract}</p>
      </div>
    </div>
  )

};

export default Card;
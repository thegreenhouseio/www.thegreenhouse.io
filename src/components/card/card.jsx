import React from "react";
import { SocialIcon } from "react-social-icons";
import './card.css';

{/* <div>
  <div className="side-bar">
    <SocialIcon url={props.item.link}/>
    <p>{props.item.date}</p>
  </div>
  <div className="body">
    <h3><a href={props.item.link}>{props.item.title}</a></h3>
    <p>{props.item.abstract}</p>
  </div>
  <div className="clear-fix"></div>
</div>

{props.item.img ? <img src={props.item.img}/>
                : ''
}

{props.item.video ? <iframe width="560" height="315" src={props.item.video} frameBorder="0" allowFullScreen/>
                  : '' */}

const Card = (props) => {

  return (

    <div className="card">
  
      <div className="wrapper">       
        <div className="card-header-icon">
          <SocialIcon url={props.item.link}/>
        </div>

        <div className="card-header-heading">
          <h3><a href={props.item.link}>{props.item.title}</a></h3>
        </div>

        <div className="card-content">
          <article>{props.item.abstract}</article>
        </div>

        <div className="card-footer">
          {props.item.img ? <img src={props.item.img}/>
                          : ''
          }

          {props.item.video 
            ? <iframe width="100%" height="315" src={props.item.video} frameBorder="0" allowFullScreen/>
            : ''
          }
        </div>
      </div>
    </div>
  )
};

export default Card;
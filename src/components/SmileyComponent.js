import React from 'react';
import { Link } from 'react-router-dom';
import { Alert } from 'reactstrap';

export const IconComponent = (humor) => {
    if(humor >= 100){
      return "😂";
    }
    if(humor >= 75){
      return "😁";
    }
    if(humor >= 50){
      return "😅";
    }
    if(humor >= 25){
      return "😊";
    }
    if(humor >= 5){
      return "😏";
    }
    if(humor >= 0){
      return "😐";
    }
    if(humor >= -25){
      return "😕";
    }
    if(humor >= -50){
      return "😒";
    }
    if(humor >= -75){
      return "😔";
    }
    if(humor >= -100){
      return "😖";
    }
}

export const Smiley = (props) => {
  return (
    <div className="smiley-container">
      <Alert color="primary">
        <h1 className="smiley">
          <Link 
            title="Click me!" 
            to={props.link}
          >
            <span role="img" aria-label="smiley">{IconComponent(props.humor)}</span>
          </Link>
        </h1>
        <h2 className="humorLabel">
            Humor:&nbsp; 
              { props.humor !== 0 
                  ? props.humor < 0 
                  ? props.humor.toString().substr(1) + '%'
                  : props.humor + '%'
                  :''
                }
              { props.humor !== 0 
                  ? props.humor < 0
                  ?' triste' 
                  :' feliz' 
                  :' normal'
                }
        </h2>
      </Alert>
    </div>
  )
}
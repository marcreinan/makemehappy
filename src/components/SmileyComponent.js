import React from 'react';
import { Link } from 'react-router-dom';
import { Alert } from 'reactstrap';

export const IconComponent = (humor) => {
    if(humor >= 100){
      return "😂";
    }
    if(humor >= 85){
      return "😁";
    }
    if(humor >= 75){
      return "😅";
    }
    if(humor >= 65){
      return "😄";
    }
    if(humor >= 50){
      return "😄";
    }
    if(humor >= 35){
      return "😊";
    }
    if(humor >= 20){
      return "😏";
    }
    if(humor >= 10){
      return "🙂";
    }
    if(humor >= 0){
      return "😐";
    }
    if(humor >= -15){
      return "🙁";
    }
    if(humor >= -25){
      return "😕";
    }
    if(humor >= -35){
      return "🤨";
    }
    if(humor >= -50){
      return "😒";
    }
    if(humor >= -75){
      return "😔";
    }
    if(humor >= -85){
      return "😖";
    }
    if(humor >= -100){
      return "😫";
    }
}

export const Smiley = (props) => {
  return (
    <div className="smiley-container">
      <Alert color={props.humor !== 0 ? props.humor > 0 ? 'success' : 'danger' : 'primary'}>
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
        <h3 className={props.humor !== 0 
                        ?props.humor > 1 
                          ?'smiley smiley-feliz'
                          :'smiley smiley-triste'
                        :'smiley smiley-normal'}>
          <Link 
            title="Click me!" 
            to={props.link}
          >
            <span role="img" aria-label="smiley">{IconComponent(props.humor)}</span>
          </Link>
        </h3>
      </Alert>
    </div>
  )
}
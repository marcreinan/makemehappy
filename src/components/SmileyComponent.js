import React from 'react';
import { Link } from 'react-router-dom';

export const IconComponent = (humor) => {
  switch (humor) {
    case 100:
      return "😂";
    case 75:
      return "😅";
    case 50:
      return "😁";
    case 25:
      return "😊";
    case 0:
      return "😐";
    case -25:
      return "😕";
    case -50:
      return "😒";
    case -75:
      return "😔";
    case -100:
      return "😖";
    default:
      break;
  }
}

export const Smiley = (props) => {
  return (
    <h1 className="smiley">
      <Link to={props.link}>{IconComponent(props.humor)}</Link>
    </h1>
  )
}
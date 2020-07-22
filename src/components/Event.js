import React from 'react';
import '../App.css';
import { Typography } from '@material-ui/core';
import { FavoriteBorder } from '@material-ui/icons';

function Event(props) {
  const date = new Date(props.event.start_time)

  const getName = () => {
    const keys = Object.keys(props.event.name)
    if (keys.includes('en')) {
      return props.event.name.en
    }
    else return props.event.name[keys[0]]
  }

  return (
    <div className="eventContainer">
      <div className="oneLine">
        <Typography style={{ fontSize: '18px', fontWeight: 'bold', marginBottom: '10px' }}>{getName()}</Typography>
        <FavoriteBorder />
      </div>
      
      <div className="oneLine">
        <Typography className="category">{props.event.category[1].title}</Typography>
        <Typography>{date.toString()}</Typography>
      </div>
    </div>
  );
}

export default Event;
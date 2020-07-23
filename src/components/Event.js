import React from 'react';
import '../App.css';
import { Typography, Tooltip, IconButton } from '@material-ui/core';
import { Favorite, FavoriteBorder } from '@material-ui/icons';

function Event(props) {
  const startTime = new Date(props.event.start_time * 1000)

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
        {props.isFavorite 
        ? <IconButton>
              <Favorite /> 
          </IconButton>
        : <Tooltip title="Add to favorites" placement="left">
              <IconButton onClick={() => props.setAsFavorite(props.event)}>
                  <FavoriteBorder/>
              </IconButton>
          </Tooltip>}
      </div>
      
      <div className="oneLine">
        <Typography className="category">{props.event.category[1].title}</Typography>
        <Typography>{startTime.toString()}</Typography>
      </div>
    </div>
  );
}

export default Event;
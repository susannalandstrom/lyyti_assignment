import React from 'react';
import '../App.css';
import { Typography, Tooltip, IconButton } from '@material-ui/core';
import { Favorite, FavoriteBorder } from '@material-ui/icons';

const weekdays = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]

function Event(props) {

  const getName = () => {
    const keys = Object.keys(props.event.name)
    if (keys.includes('en')) {
      return props.event.name.en
    }
    else return props.event.name[keys[0]]
  }

  const formatTime = (startTime) => {
    const minute = startTime.getMinutes()
    const second = startTime.getSeconds()
    const minuteFormatted = minute < 10 ? "0" + minute : minute
    const secondFormatted = second < 10 ? "0" + second : second
    
    return weekdays[startTime.getDay()] + ' ' 
            + startTime.getDate() + '.' 
            + startTime.getMonth() + 1 + '.' 
            + startTime.getFullYear() + ' ' 
            + startTime.getHours() + ':' 
            + minuteFormatted + ':' 
            + secondFormatted
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
              <IconButton onClick={(e) => props.setAsFavorite(e, props.event)}>
                  <FavoriteBorder/>
              </IconButton>
          </Tooltip>}
      </div>
      
      <div className="oneLine">
        <Typography className="category">{props.event.category[1].title}</Typography>
        <Typography>{formatTime(new Date(props.event.start_time * 1000))}</Typography>
      </div>
    </div>
  );
}

export default Event;
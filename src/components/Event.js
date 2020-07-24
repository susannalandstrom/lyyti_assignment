import React from 'react';
import '../App.css';
import { Typography, Tooltip, IconButton } from '@material-ui/core';
import { Favorite, FavoriteBorder } from '@material-ui/icons';
import { getName } from '../functions/getName'
import { getCategories } from '../functions/getCategories'
import { formatTime } from '../functions/formatTime'

function Event(props) {

  return (
    <div className="eventContainer">
      <div className="oneLine">
        <Typography variant="h3">{getName(props.event)}</Typography>
        {props.isFavorite 
        ? <IconButton>
              <Favorite color="primary"/> 
          </IconButton>
        : <Tooltip title="Add to favorites" placement="left">
              <IconButton onClick={(e) => props.setAsFavorite(e, props.event)}>
                  <FavoriteBorder color="primary"/>
              </IconButton>
          </Tooltip>}
      </div>
      <div className="oneLine">
        {getCategories(props.event).map(category => <Typography className="category">{category}</Typography>)}
        <Typography>{formatTime(props.event.start_time)}</Typography>
      </div>
    </div>
  );
}

export default Event;
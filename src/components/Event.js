import React from 'react';
import '../App.css';
import { Typography, Tooltip, IconButton } from '@material-ui/core';
import { Favorite, FavoriteBorder } from '@material-ui/icons';
import { getName } from '../functions/getName'
import { getCategories } from '../functions/getCategories'
import { formatTime } from '../functions/formatTime'

function Event(props) {

  return (
    <div className="eventContainer" onClick={() => props.onClick(props.event.event_id)}>
      <div className="oneLine">
        <Typography variant="h3">{getName(props.event)}</Typography>
        {props.isFavorite 
        ? <Tooltip title="Remove from favorites" placement="left">
            <IconButton onClick={(e) => {
              e.stopPropagation()
              props.removeFavorite(props.event.id)}
            }>
                <Favorite color="primary"/> 
            </IconButton>
          </Tooltip>
        : <Tooltip title="Add to favorites" placement="left">
              <IconButton onClick={(e) => {
                e.stopPropagation()
                props.setAsFavorite(e, props.event)
                }}>
                  <FavoriteBorder color="primary"/>
              </IconButton>
          </Tooltip>}
      </div>
      <div className="oneLine">
        {getCategories(props.event).map(category => <Typography key={category} className="category">{category}</Typography>)}
        <Typography>{formatTime(props.event.start_time)}</Typography>
      </div>
    </div>
  );
}

export default Event;
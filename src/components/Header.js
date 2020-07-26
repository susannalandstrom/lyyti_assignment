import React from 'react';
import '../App.css';
import { Typography } from '@material-ui/core';
import FavoritesPopover from './FavoritesPopover'

function Header(props) {

  return (
    <div className="header">
        <Typography variant="h1">Paperstr Events</Typography>
        <FavoritesPopover 
          favorites={props.favorites}
          removeFavorite={props.removeFavorite}
          onEventClick={props.onEventClick}/>
    </div>
  );
}

export default Header;

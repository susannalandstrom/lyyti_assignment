import React from 'react';
import '../App.css';
import { Typography, Badge } from '@material-ui/core';
import { Favorite } from '@material-ui/icons';

function Header(props) {

  return (
    <div className="header">
        <Typography variant="h1">Paperstr Events</Typography>
        <Badge badgeContent={props.favorites.length} color="secondary">
            <Favorite fontSize="large"/>
        </Badge>
    </div>
  );
}

export default Header;

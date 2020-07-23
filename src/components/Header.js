import React from 'react';
import '../App.css';
import { Typography, Badge, Tooltip, IconButton } from '@material-ui/core';
import { Favorite } from '@material-ui/icons';

function Header(props) {

  return (
    <div className="header">
        <Typography variant="h1">Paperstr Events</Typography>
        <Tooltip title="Favorites">
            <IconButton>
                <Badge badgeContent={props.favorites.length} color="secondary">
                    <Favorite fontSize="large"/>
                </Badge>
            </IconButton>
        </Tooltip>
    </div>
  );
}

export default Header;

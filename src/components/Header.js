import React from 'react';
import '../App.css';
import { Typography } from '@material-ui/core';
import { Favorite } from '@material-ui/icons';

function Header() {

  return (
    <div className="oneLine" style={{ height: '100px' }}>
        <Typography>Paperstr Events</Typography>
        <Favorite />
    </div>
  );
}

export default Header;

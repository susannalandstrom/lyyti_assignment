import React from 'react';
import './App.css';
import EventsContainer from './components/EventsContainer'
import img_mobile from './bg_mobile.jpg'
import img_desktop from './bg_desktop.jpg'
import { Typography } from '@material-ui/core';

function App() {
  const image = window.innerWidth >= 650 ? img_desktop : img_mobile;

  return (
    <div className="app" style={{ backgroundImage:`url("${image}")`, backgroundRepeat: 'no-repeat', color: 'white', backgroundSize: 'cover' }}>
      <div style={{ backgroundColor: 'rgba(100, 52, 128, 0.49)' }}>
        <Typography>Paperstr Events</Typography>
        <EventsContainer />
      </div>
    </div>
  );
}

export default App;

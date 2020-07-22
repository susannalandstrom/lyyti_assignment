import React from 'react';
import './App.css';
import EventsContainer from './components/EventsContainer'
import { Typography } from '@material-ui/core';

function App() {

  return (
    <div>
      <div>
        <Typography>Paperstr Events</Typography>
        <EventsContainer />
      </div>
    </div>
  );
}

export default App;

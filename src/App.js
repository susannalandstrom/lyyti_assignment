import React, { useEffect } from 'react';
import './App.css';
import lyytiApi from './service.js'

function App() {

  useEffect(() => {
    lyytiApi("events?as_array=1").then(res => console.log(res))
  }, [])

  return (
    <div>
      <h1>Paperstr Events</h1>
    </div>
  );
}

export default App;

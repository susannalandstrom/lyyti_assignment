import React, { useState } from 'react';
import './App.css';
import EventsContainer from './components/EventsContainer'
import img_mobile from './bg_mobile.jpg'
import img_desktop from './bg_desktop.jpg'
import Header from './components/Header'

function App() {
  const [favorites, setFavorites] = useState([]);

  const image = window.innerWidth >= 650 ? img_desktop : img_mobile;

  const setAsFavorite = (event) =>
        setFavorites(oldFavorites => [...oldFavorites, event])

  return (
    <div className="gridContainer" style={{ backgroundImage:`url("${image}")`, backgroundRepeat: 'no-repeat', color: 'white', backgroundSize: 'cover' }}>
      <div style={{ backgroundColor: 'rgba(100, 52, 128, 0.49)', height: '100vh' }}>
        <Header favorites={favorites}/>
        <EventsContainer favorites={favorites} setAsFavorite={setAsFavorite}/>
      </div>
      <div className="footer"><p>© 2020 Paperstr, Inc.</p></div>
    </div>
  );
}

export default App;

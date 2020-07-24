import React, { useState } from 'react';
import './App.css';
import EventsContainer from './components/EventsContainer'
import img_mobile from './bg_mobile.jpg'
import img_desktop from './bg_desktop.jpg'
import Header from './components/Header'
import { MuiThemeProvider } from '@material-ui/core/styles'
import theme from './MuiTheme'
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

function App() {
  const [favorites, setFavorites] = useState([]);

  const image = window.innerWidth >= 650 ? img_desktop : img_mobile;

  const setAsFavorite = (e, event) => {
    e.stopPropagation()
    setFavorites(oldFavorites => [...oldFavorites, event])
  }

  const removeFavorite = (id) => {
    const newFavorites = favorites.filter(favorite => favorite.id !== id)
    setFavorites(newFavorites)
  }

  return (
    <Router>
      <MuiThemeProvider theme={theme}>
      <div className="gridContainer" style={{ backgroundImage:`url("${image}")`, backgroundRepeat: 'no-repeat', color: 'white', backgroundSize: 'cover' }}>
        <div style={{ backgroundColor: 'rgba(100, 52, 128, 0.49)', height: '100vh' }}>
          <Header favorites={favorites} removeFavorite={removeFavorite}/>
          <Switch>
            <Route exact path="/">
              <EventsContainer favorites={favorites} setAsFavorite={setAsFavorite}/>
            </Route>
            <Route path="/?categories:">
              <EventsContainer favorites={favorites} setAsFavorite={setAsFavorite}/>
            </Route>
          </Switch>
        </div>
        <div className="footer"><p>© {new Date().getFullYear()} Paperstr, Inc.</p></div>
      </div>
      </MuiThemeProvider>
    </Router>
  );
}

export default App;

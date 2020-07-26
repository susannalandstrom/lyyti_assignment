import React, { useState } from 'react';
import './App.css';
import EventsContainer from './components/EventsContainer'
import img_mobile from './bg_mobile.jpg'
import img_desktop from './bg_desktop.jpg'
import Header from './components/Header'
import { MuiThemeProvider } from '@material-ui/core/styles'
import theme from './MuiTheme'
import {
  Switch,
  Route,
  useHistory,
  useLocation
} from "react-router-dom";
import EventDetailedView from './components/EventDetailedView';

function App() {
  const [favorites, setFavorites] = useState([]);

  const history = useHistory()
  const image = window.innerWidth >= 650 ? img_desktop : img_mobile;

  function useQuery() {
    return new URLSearchParams(useLocation().search);
  }

  const setAsFavorite = (e, event) => {
    e.stopPropagation()
    setFavorites(oldFavorites => [...oldFavorites, event])
  }

  const removeFavorite = (id) => {
    const newFavorites = favorites.filter(favorite => favorite.id !== id)
    setFavorites(newFavorites)
  }

  const navigateToEvent = (id) => {
    history.push('/events/' + id)
  }

  return (
      <MuiThemeProvider theme={theme}>
      <div className="gridContainer" style={{ backgroundImage:`url("${image}")`, backgroundRepeat: 'no-repeat', color: 'white', backgroundSize: 'cover' }}>
        <div style={{ backgroundColor: 'rgba(100, 52, 128, 0.49)', height: '100vh' }}>
          <Header favorites={favorites} removeFavorite={removeFavorite} onEventClick={navigateToEvent}/>
          <Switch>
            <Route exact path={["/", "/?categories:"]}>
              <EventsContainer 
                categoryFilters={useQuery().get("categories")} 
                history={history} 
                favorites={favorites} 
                setAsFavorite={setAsFavorite} 
                onEventClick={navigateToEvent}/>
            </Route>
            <Route path="/events/:id">
              <EventDetailedView history={history} />
            </Route>
          </Switch>
        </div>
        <div className="footer"><p>© {new Date().getFullYear()} Paperstr, Inc.</p></div>
      </div>
      </MuiThemeProvider>
  );
}

export default App;

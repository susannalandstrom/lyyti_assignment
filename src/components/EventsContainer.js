import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Sort } from '@material-ui/icons';
import '../App.css';
import Event from './Event'
import lyytiApi from '../service.js'
import { Typography } from '@material-ui/core';

const monthNames = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

const filterEvents = (events, selectedTime) => 
    events.filter(event => 
        new Date(event.start_time * 1000).getMonth() === selectedTime.month 
        && new Date(event.start_time * 1000).getFullYear() === selectedTime.year)

function EventsContainer(props) {
    const [currentTime, setCurrentTime] = useState();
    const [selectedTime, setSelectedTime] = useState();
    const [events, setEvents] = useState([]);
    const [filteredEvents, setFilteredEvents] = useState([])
    // const [favorites, setFavorites] = useState([]);

    useEffect(() => {
        const currentTime = new Date()
        setCurrentTime(currentTime)
        setSelectedTime({ month: currentTime.getMonth(), year: currentTime.getFullYear() })

        lyytiApi("events?as_array=1")
        .then(res => setEvents(res.results))
    }, [])

    useEffect(() => {
        setFilteredEvents(filterEvents(events, selectedTime))
    }, [selectedTime, events])

    const changeSelectedTime = (direction) => {
        const newSelectedMonth = selectedTime.month + direction
        if ( newSelectedMonth <= 11 && newSelectedMonth >= 0) {
            const newSelectedTime = { month: newSelectedMonth, year: selectedTime.year }
            setSelectedTime(newSelectedTime)
        }
        else if (newSelectedMonth > 11) {
            setSelectedTime({ month: 0, year: selectedTime.year + 1 })
        }
        else if (newSelectedMonth < 0) {
            setSelectedTime({ month: 11, year: selectedTime.year - 1 })
        }
    }

    // const setAsFavorite = (event) =>
    //     setFavorites(oldFavorites => [...oldFavorites, event])

    const checkIfFavorite = (event) => {
        if (props.favorites.includes(event)) return true
        else return false
    }

  return (
    <div className="eventListContainer">
        <div className="oneLine" style={{ padding: '10px 0' }}>
            <div className="monthSelector">
                <ChevronLeft onClick={() => changeSelectedTime(-1)} fontSize="large"/>
                {selectedTime && <Typography variant="h2">{monthNames[selectedTime.month] + ' ' + selectedTime.year}</Typography>}
                <ChevronRight onClick={() => changeSelectedTime(1)} fontSize="large"/>
            </div>
            <Sort fontSize="large"/>
        </div>
        
        {filteredEvents.map(event => {
            return <Event key={event.id} event={event} setAsFavorite={props.setAsFavorite} isFavorite={checkIfFavorite(event)}/>
        })}
    </div>
  );
}

export default EventsContainer;
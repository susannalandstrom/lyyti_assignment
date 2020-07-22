import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Sort } from '@material-ui/icons';
import '../App.css';
import Event from './Event'
import lyytiApi from '../service.js'

const monthNames = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

function EventsContainer() {
    const [currentMonth, setCurrentMonth] = useState();
    const [events, setEvents] = useState([]);

    useEffect(() => {
        const currentMonth = new Date()
        setCurrentMonth(currentMonth.getMonth())
        lyytiApi("events?as_array=1").then(res => setEvents(res.results))
    }, [])

  return (
    <div className="eventListContainer">
        <div className="oneLine">
            <div className="monthSelector">
                <ChevronLeft/>
                <h2>{monthNames[currentMonth]}</h2>
                <ChevronRight/>
            </div>
            <Sort />
        </div>
        
        {events.map(event => {
            return <Event key={event.id} event={event}/>
        })}
    </div>
  );
}

export default EventsContainer;
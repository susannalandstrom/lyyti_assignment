import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Sort } from '@material-ui/icons';
import '../App.css';
import Event from './Event'
import lyytiApi from '../service.js'

const monthNames = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

const filterEvents = (events, selectedTime) => 
    events.filter(event => 
        new Date(event.start_time * 1000).getMonth() === selectedTime.month 
        && new Date(event.start_time * 1000).getFullYear() === selectedTime.year)

function EventsContainer() {
    const [currentTime, setCurrentTime] = useState();
    const [selectedTime, setSelectedTime] = useState();
    const [events, setEvents] = useState([]);
    const [filteredEvents, setFilteredEvents] = useState([])

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

  return (
    <div className="eventListContainer">
        <div className="oneLine">
            <div className="monthSelector">
                <ChevronLeft/>
                {selectedTime && <h2>{monthNames[selectedTime.month] + ' ' + selectedTime.year}</h2>}
                <ChevronRight />
            </div>
            <Sort />
        </div>
        
        {filteredEvents.map(event => {
            return <Event key={event.id} event={event}/>
        })}
    </div>
  );
}

export default EventsContainer;
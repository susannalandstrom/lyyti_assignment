import React, { useEffect, useState } from 'react';
import '../App.css';
import lyytiApi from '../service.js';
import { Typography, Button } from '@material-ui/core';
import { useParams } from 'react-router-dom';
import { getName } from '../functions/getName';
import { getCategories } from '../functions/getCategories';
import { formatTime } from '../functions/formatTime'

function EventDetailedView() {
    const [event, setEvent] = useState();
    const [currentTime, setCurrentTime] = useState();

    const { id } = useParams();

    useEffect(() => {
        const currentTime = new Date().getTime()
        setCurrentTime(currentTime)
    }, [])

    useEffect(() => {
        lyytiApi("events/" + id)
        .then(res => {
            const keys = Object.keys(res.results)
            if (keys.length === 0) {
                alert('Invalid event id ' + id)
            }
            const eventId = keys[0]
            setEvent(res.results[eventId])
        })
    }, [id])

    const getLocation = (event) => {
        if (!event) return "Location not found"
    
        const keys = Object.keys(event.location)
        if (keys.includes('en')) {
          return event.location.en
        }
        else return event.location[keys[0]]
    }

    const enableEnrollment = event && currentTime > (event.enrollment_open * 1000) && currentTime < (event.enrollment_deadline * 1000)
    const enrollmentHasEnded = event && currentTime > (event.enrollment_deadline * 1000)
    const enrollmentHasNotStarted = event && currentTime < (event.enrollment_open * 1000)

    return(
        <div className="detailedView">
            {event ? 
            <div>
                <Typography color="primary" variant="h2" style={{ padding: '10px 0'}}>
                    {getName(event)}
                </Typography>
                <Typography className="detailedViewHeader">
                    Category
                </Typography>
                {getCategories(event).map(category => 
                    <Typography key={category} color="primary" style={{ paddingLeft: '30px' }}>
                        {category}
                    </Typography>)}
                <Typography className="detailedViewHeader">
                    location
                </Typography>
                <Typography color="primary" style={{ paddingLeft: '30px' }}>
                    {getLocation(event)}
                </Typography>
                <Typography className="detailedViewHeader">
                    start time
                </Typography>
                <Typography color="primary" style={{ paddingLeft: '30px' }}>
                    {formatTime(event.start_time)}
                </Typography>
                <Typography className="detailedViewHeader">
                    end time
                </Typography>
                <Typography color="primary" style={{ paddingLeft: '30px' }}>
                    {formatTime(event.end_time)}
                </Typography>
                <div style={{ textAlign: 'center', paddingTop: '20px' }}>
                    <Button disabled={!enableEnrollment}>Enroll</Button>

                    {enrollmentHasNotStarted && 
                    <Typography color="error">
                        Enrollment to this event starts {formatTime(event.enrollment_open)}
                    </Typography>}

                    {enrollmentHasEnded && 
                    <Typography color="error">
                        Enrollment to this event has ended.
                    </Typography>}
                </div>
            </div>
            : <p>Fetching information</p>}
            
        </div>
    );
}

export default EventDetailedView
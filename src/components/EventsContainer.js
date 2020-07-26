import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from '@material-ui/icons';
import '../App.css';
import Event from './Event'
import FilterPopover from './FilterPopover'
import lyytiApi from '../service.js'
import { Typography, IconButton, Tooltip } from '@material-ui/core';

const monthNames = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

const filterEventsByMonth = (events, selectedTime) => 
    events.filter(event => 
        new Date(event.start_time * 1000).getMonth() === selectedTime.month 
        && new Date(event.start_time * 1000).getFullYear() === selectedTime.year)

const filterEventsByCategory = (events, categories) => {
    const categoryIds = categories.filter(category => category.isSelectedAsFilter === true).map(category => category.id)
    return events.filter(event => {
        let idFound = false;
        const categoryKeys = Object.keys(event.category)
        categoryKeys.forEach(key => {
            if (categoryIds.includes(event.category[key].id)) idFound = true;
        })
        return idFound;
    })
}

function EventsContainer(props) {
    const [selectedTime, setSelectedTime] = useState();
    const [events, setEvents] = useState([]);
    const [filteredEvents, setFilteredEvents] = useState([]);
    const [categories, setCategories] = useState([]);

    useEffect(() => {
        const currentTime = new Date()
        setSelectedTime({ month: currentTime.getMonth(), year: currentTime.getFullYear() })

        lyytiApi("events?as_array=1")
        .then(res => setEvents(res.results))
    }, [])

    useEffect(() => {
        const urlParameters = props.categoryFilters && props.categoryFilters.split(',')

        lyytiApi("categories?as_array=1")
        .then(res => {
            const categories = res.results.map(obj => ({ ...obj, isSelectedAsFilter: urlParameters ? urlParameters.includes(obj.title.toLowerCase()) : true}))
            setCategories(categories)
        })
    }, [events, props.categoryFilters])

    useEffect(() => {
        const timeFiltered = filterEventsByMonth(events, selectedTime)
        const categoryFiltered = filterEventsByCategory(timeFiltered, categories)
        setFilteredEvents(categoryFiltered)
    }, [selectedTime, events, categories])

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

    const checkIfFavorite = (event) => {
        const favoriteIds = props.favorites.map(favorite => favorite.id)
        if (favoriteIds.includes(event.id)) return true
        else return false
    }

    const handleFilterChange = (id) => {
        addToHistory(id)
        setCategories(oldCategories => 
            oldCategories.map(
                category => category.id === id
                ? {...category, isSelectedAsFilter: !category.isSelectedAsFilter}
                : category))
    }

    const addToHistory = (id) => {
        const selectedFilters = categories.filter(category => 
            (category.id !== id && category.isSelectedAsFilter === true)
            || (category.id === id && category.isSelectedAsFilter === false))
        const newParameters = selectedFilters.map(filter => filter.title.toLowerCase())
        props.history.push('/?categories=' + newParameters.join())
    }

  return (
    <div className="eventGrid">
        <div className="oneLine" style={{ marginBottom: '20px' }}>
            <div className="monthSelector">
                <Tooltip title="Previous" placement="top">
                    <IconButton onClick={() => changeSelectedTime(-1)}>
                        <ChevronLeft fontSize="large"/>
                    </IconButton>
                </Tooltip>
                {selectedTime && <Typography variant="h2">{monthNames[selectedTime.month] + ' ' + selectedTime.year}</Typography>}
                <Tooltip title="Next" placement="top">
                    <IconButton onClick={() => changeSelectedTime(1)}>
                        <ChevronRight fontSize="large"/>
                    </IconButton>
                </Tooltip>
            </div>
            <FilterPopover categories={categories} handleFilterChange={handleFilterChange}/>
        </div>
        { filteredEvents.length > 0 
        ? 
        <div style={{ overflow: 'scroll', height: 'inherit' }}>
            {filteredEvents.map(event => {
                return <Event 
                            key={event.id} 
                            event={event} 
                            setAsFavorite={props.setAsFavorite} 
                            isFavorite={checkIfFavorite(event)}
                            onClick={props.onEventClick}/>
            })}
        </div> 
        : 
        <Typography style={{ textAlign: 'center' }}>No events yet</Typography>
        }
  
    </div>
  );
}

export default EventsContainer;
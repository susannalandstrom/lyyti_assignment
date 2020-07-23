import React, { useState } from 'react';
import '../App.css';
import { IconButton, Tooltip, Popover, FormGroup, FormControl, FormLabel, FormHelperText, FormControlLabel } from '@material-ui/core';
import { Sort } from '@material-ui/icons';
import Checkbox from '@material-ui/core/Checkbox';

function FilterPopover(props) {
    const [anchorEl, setAnchorEl] = useState(null);
    const open = Boolean(anchorEl);

    const id = open ? 'simple-popover' : undefined;

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    return (
        <div>
            <Tooltip title="Filter" placement="left">
                <IconButton aria-describedby={id} onClick={handleClick}>
                    <Sort fontSize="large"/>
                </IconButton>
            </Tooltip>
            <Popover
                id={id}
                open={open}
                anchorEl={anchorEl}
                onClose={handleClose}
                anchorOrigin={{
                    vertical: 'bottom',
                    horizontal: 'left',
                }}
                transformOrigin={{
                    vertical: 'top',
                    horizontal: 'right',
                }}
                >
                
                <FormControl>
                    <FormLabel>Filter by Category</FormLabel>
                    <FormGroup>
                    {props.categories.map(category => {
                        return (
                        <FormControlLabel 
                            key={category.id}
                            control={<Checkbox checked={category.isSelectedAsFilter} onChange={() => props.handleFilterChange(category.id)} name={category.title} color="secondary"/>}
                            label={category.title}/>)
                    })}
                    </FormGroup>
                    <FormHelperText>Select one or multiple categories</FormHelperText>
                </FormControl>
                
            </Popover>
        </div>
    );
}

export default FilterPopover;

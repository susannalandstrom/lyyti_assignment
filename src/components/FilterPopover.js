import React, { useState } from 'react';
import '../App.css';
import { IconButton, Tooltip, Popover } from '@material-ui/core';
import { Sort } from '@material-ui/icons';

function FilterPopover(props) {
    const [anchorEl, setAnchorEl] = React.useState(null);
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
                {props.categories.map(category => {
                    return <p>{category.title}</p>
                })}
            </Popover>
      </div>
  );
}

export default FilterPopover;

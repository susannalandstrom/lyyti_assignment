import React, { useState } from 'react';
import '../App.css';
import { IconButton, Tooltip, Badge, Popover, Card, CardHeader, CardContent, Typography } from '@material-ui/core';
import { Favorite, Clear } from '@material-ui/icons';
import { getName } from '../functions/getName';
import { getCategories } from '../functions/getCategories'
import { formatTime } from '../functions/formatTime'

function FavoritesPopover(props) {
    const [anchorEl, setAnchorEl] = useState(null);
    const open = Boolean(anchorEl);

    const id = open ? 'favorites-popover' : undefined;

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    return (
        <div>
            <Tooltip title="Favorites" placement="left">
                <IconButton aria-describedby={id} onClick={handleClick}>
                    <Badge badgeContent={props.favorites.length} color="secondary">
                        <Favorite fontSize="large"/>
                    </Badge>
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
                }}>
                {props.favorites.map(favorite => {
                    return (
                        <Card key={favorite.id} onClick={() => props.onEventClick(favorite.event_id)}>
                            <CardHeader 
                                variant="h3" 
                                title={getName(favorite)} 
                                action={
                                    <IconButton onClick={(e) => {
                                        e.stopPropagation()
                                        props.removeFavorite(favorite.id)}
                                    }>
                                        <Clear fontSize="small" color="primary"/>
                                    </IconButton>
                                }
                            />
                            <CardContent>
                                {getCategories(favorite).map(category => <Typography key={category} color="secondary">{category}</Typography>)}
                                <Typography>{formatTime(favorite.start_time)}</Typography>
                            </CardContent>
                        </Card>
                    )
                })}
            </Popover>
        </div>
    );
}

export default FavoritesPopover;

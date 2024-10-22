import React from 'react';
import {Typography} from "@mui/material";

import './NotFound.css'

const NotFound = () => {
    return (
        <div className={'not-found-container'}>
            <Typography variant="h5">Репозитории с заданными параметрам не найдены</Typography>
        </div>
    );
};

export default NotFound;
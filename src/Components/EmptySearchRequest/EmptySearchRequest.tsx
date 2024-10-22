import React from 'react';

import {Typography} from "@mui/material";

import './EmptySearchRequest.css'

const EmptySearchRequest = () => {
    return (
        <div className="empty-request-container">
            <Typography variant="h5">Введите пожалуйста запрос</Typography>
        </div>
    );
};

export default EmptySearchRequest;
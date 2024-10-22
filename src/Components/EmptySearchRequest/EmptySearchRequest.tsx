import React from 'react';
import './EmptySearchRequest.css'
import {Typography} from "@mui/material";

const EmptySearchRequest = () => {
    return (
        <div className="empty-request-container">
            <Typography variant="h5">Введите пожалуйста запрос</Typography>
        </div>
    );
};

export default EmptySearchRequest;
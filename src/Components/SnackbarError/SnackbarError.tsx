import React, {useContext} from "react";
import {AppContext} from "../../App";
import Snackbar, {SnackbarCloseReason} from '@mui/material/Snackbar';
import {Alert} from "@mui/material";


export default function SnackbarError() {
    const {
        apiError,
        setApiError,
    } = useContext(AppContext);

    const handleClose = (
        event: React.SyntheticEvent | Event,
        reason?: SnackbarCloseReason,
    ) => {
        if (reason === 'clickaway') {
            setApiError(false);
        }
        setApiError(false);
    };


    return (
        <div>
            <Snackbar
                open={apiError}
                autoHideDuration={3000}
                onClose={handleClose}
            >
                <Alert
                    onClose={handleClose}
                    severity="error"
                    variant="filled"
                    sx={{width: '100%'}}
                >
                    <p>Внутренняя ошибка сервера!</p>
                    <p>Повторите Ваш запрос позже</p>
                </Alert>
            </Snackbar>
        </div>
    );
}

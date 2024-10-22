import React, {useContext} from "react";
import {AppContext} from "../../App";
import Snackbar from '@mui/material/Snackbar';
import {Alert} from "@mui/material";


export default function SnackbarError() {
    const {apiError, setApiError} = useContext(AppContext);

    const handleClose = () => {
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

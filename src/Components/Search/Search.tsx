import React from 'react';
import {InputAdornment, TextField} from "@mui/material";
import SearchIcon from '@mui/icons-material/Search';

import './Search.css'

const Search = () => {
    return (
        <TextField
           className='Search-field'
            slotProps={{
                input: {
                    startAdornment: (
                        <InputAdornment position="start">
                            <SearchIcon/>
                        </InputAdornment>
                    ),
                },
            }}
            size={'small'}
            placeholder={'Поиск...'}
            variant="standard"/>

    );
};

export default Search;
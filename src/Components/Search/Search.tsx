import React, {useContext} from 'react';
import {InputAdornment, TextField} from "@mui/material";
import SearchIcon from '@mui/icons-material/Search';

import './Search.css'
import {SearchContext} from "../../App";

const Search = () => {
    const {searchQuery, setSearchQuery} = useContext(SearchContext);

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
            variant="standard"
           value={searchQuery}
           onChange={(e) => setSearchQuery(e.target.value)}
        />


    );
};

export default Search;
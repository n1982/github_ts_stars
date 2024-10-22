import React, {useContext, useEffect} from 'react';
import {InputAdornment, TextField} from "@mui/material";
import SearchIcon from '@mui/icons-material/Search';
import {AppContext} from "../../App";
import {useDebounce} from "use-debounce";

import './Search.css'

const Search = () => {
    const {searchQuery, setSearchQuery, setCurrentPage} = useContext(AppContext);
    const [inputValue, setInputValue] = React.useState(searchQuery);
    const [debouncedValue] = useDebounce(inputValue, 500);

    useEffect(() => {
        setCurrentPage(1)
       setSearchQuery(debouncedValue);
    }, [debouncedValue]);

    const handleTextFieldChange = (value: string) => {
        setInputValue(value)
    }

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
            value={inputValue}
            onChange={(e) => handleTextFieldChange(e.target.value)}
        />


    );
};

export default Search;
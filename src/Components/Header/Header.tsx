import React, {useContext} from 'react';
import {AppContext} from "../../App";

import {Badge} from "@mui/material";

import Search from "../Search/Search";

import './Header.css'

const Header = () => {
    const{totalFound, searchQuery}=useContext(AppContext);
    return (

        <header className='App-header'>
            <Badge badgeContent={totalFound}
                   invisible={!Boolean(searchQuery)}
                   color="primary"
                   max={1000}
                   anchorOrigin={{
                       vertical: 'top',
                       horizontal: 'left',
                   }}>
                <Search/>
            </Badge>
        </header>
    );
};

export default Header;
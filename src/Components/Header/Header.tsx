import React, {useContext} from 'react';
import Search from "../Search/Search";
import './Header.css'
import {Badge} from "@mui/material";
import {AppContext} from "../../App";

const Header = () => {
    const{totalFound, searchQuery}=useContext(AppContext);
    console.log('totalFound',totalFound);
    return (

        <header className='App-header'>
            <Badge badgeContent={totalFound}
                   invisible={!Boolean(searchQuery)}
                   color="primary"
                   max={10000}
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
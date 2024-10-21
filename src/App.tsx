import React, {createContext} from 'react';
import Main from "./Components/Main/Main";
import Header from "./Components/Header/Header";
import './App.css';

export const AppContext = createContext({
    searchQuery: "TS",
    totalFound: 0,
    currentPage: 1,
    setSearchQuery: (searchQuery: string) => {
    },
    setCurrentPage: (page: number) => {
    },
    setTotalFound: (page: number) => {
    }
})


function App() {
    const [searchQuery, setSearchQuery] = React.useState("TS")
    const [currentPage, setCurrentPage] = React.useState(1);
    const [totalFound, setTotalFound] = React.useState(0);


    return (
        <AppContext.Provider
            value={{searchQuery, setSearchQuery, currentPage, setCurrentPage, totalFound, setTotalFound}}>

            <div className="App">
                <Header/>
                <Main/>
            </div>
        </AppContext.Provider>
    );
}

export default App;

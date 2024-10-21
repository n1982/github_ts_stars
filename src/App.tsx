import React, {createContext} from 'react';
import Main from "./Components/Main/Main";
import Header from "./Components/Header/Header";
import './App.css';

export const AppContext = createContext({
    searchQuery: "",
    totalFound: 0,
    currentPage: 1,
    loading: false,
    setSearchQuery: (searchQuery: string) => {
    },
    setCurrentPage: (page: number) => {
    },
    setTotalFound: (page: number) => {
    },
    setLoading: (loading: boolean) => {
    }
})


function App() {
    const [searchQuery, setSearchQuery] = React.useState('')
    const [currentPage, setCurrentPage] = React.useState(1);
    const [totalFound, setTotalFound] = React.useState(0);
    const [loading, setLoading] = React.useState(false);
    const contextValue = {
        searchQuery,
        setSearchQuery,
        currentPage,
        setCurrentPage,
        totalFound,
        setTotalFound,
        loading,
        setLoading
    }


    return (
        <AppContext.Provider
            value={contextValue}>
            <div className="App">
                <Header/>
                <Main/>
            </div>
        </AppContext.Provider>
    );
}

export default App;

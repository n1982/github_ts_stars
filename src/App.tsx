import React, {createContext} from 'react';
import {IRepository} from "./type";

import Main from "./Components/Main/Main";
import Header from "./Components/Header/Header";

import './App.css';

interface appContext {
    searchQuery: string;
    totalFound: number;
    currentPage: number;
    loading: boolean;
    reposList: IRepository[];
    apiError: boolean;
    setApiError: (error: boolean) => void;
    setReposList: (reposList: IRepository[]) => void
    setSearchQuery: (searchQuery: string) => void;
    setCurrentPage: (page: number) => void;
    setTotalFound: (page: number) => void;
    setLoading: (loading: boolean) => void;
}

export const AppContext = createContext<appContext>({
    searchQuery: "",
    totalFound: 0,
    currentPage: 1,
    loading: false,
    reposList: [],
    apiError: false,
    setApiError: ()=>{

    },
    setReposList: () => {
    },
    setSearchQuery: () => {
    },
    setCurrentPage: () => {
    },
    setTotalFound: () => {
    },
    setLoading: () => {
    }
})


function App() {
    const [searchQuery, setSearchQuery] = React.useState('')
    const [currentPage, setCurrentPage] = React.useState(1);
    const [totalFound, setTotalFound] = React.useState(0);
    const [loading, setLoading] = React.useState(false);
    const [reposList, setReposList] = React.useState<IRepository[]>([])
    const [apiError, setApiError] = React.useState(false)
    const contextValue = {
        reposList,
        setReposList,
        searchQuery,
        setSearchQuery,
        currentPage,
        setCurrentPage,
        totalFound,
        setTotalFound,
        loading,
        setLoading,
        apiError,
        setApiError,
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

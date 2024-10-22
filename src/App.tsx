import React, {createContext} from 'react';
import Main from "./Components/Main/Main";
import Header from "./Components/Header/Header";
import './App.css';
import {IRepository} from "./type";

interface appContext {
    searchQuery: string;
    totalFound: number;
    currentPage: number;
    loading: boolean;
    reposList: IRepository[];
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

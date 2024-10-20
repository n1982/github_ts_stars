import React, {createContext, useEffect} from 'react';
import Search from "./Components/Search/Search";
import CardsList from "./Components/CardsList/CardsList";
import './App.css';
import {searchResult} from "./type";
import {getRepositoryList} from "./api/getRepositoryList";

export const SearchContext = createContext({
    searchQuery: "TS", setSearchQuery: (searchQuery: string) => {
    }
})

function App() {
    const [reposList, setReposList] = React.useState<searchResult | undefined>(undefined)
    const [searchQuery, setSearchQuery] = React.useState("TS")
    useEffect(() => {
        if(searchQuery)getRepositoryList(searchQuery).then((response) => setReposList(response));
    }, [searchQuery]);

    return (
        <SearchContext.Provider value={{searchQuery, setSearchQuery}}>
            <div className="App">
                <header className="App-header">
                    <Search/>
                </header>
                <main className='Main-container'>
                    <CardsList reposList={reposList}/>
                </main>
            </div>
        </SearchContext.Provider>
    );
}

export default App;

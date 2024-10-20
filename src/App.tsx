import React, {createContext, useEffect} from 'react';
import Search from "./Components/Search/Search";
import CardsList from "./Components/CardsList/CardsList";
import './App.css';
import {searchResult} from "./type";

async function fetchData(searchQuery: string = 'TS'): Promise<searchResult> {

    let params = new URLSearchParams({
        language: "TS",
        sort: "stars",
        order: "desc",
    });

    params.append("q", searchQuery);

    const response = await fetch(
        `https://api.github.com/search/repositories?${params}`
    );
    return response.json();
}

export const SearchContext = createContext({
    searchQuery: "TS", setSearchQuery: (searchQuery: string) => {
    }
})

function App() {
    const [reposList, setReposList] = React.useState<searchResult | undefined>(undefined)
    const [searchQuery, setSearchQuery] = React.useState("TS")
    useEffect(() => {
        if(searchQuery)fetchData(searchQuery).then((response) => setReposList(response));
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

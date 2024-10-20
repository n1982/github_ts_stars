import React, {useEffect} from 'react';
import Search from "./Components/Search/Search";
import CardsList from "./Components/CardsList/CardsList";
import './App.css';
import {searchResult} from "./type";

async function fetchData(searchQuery: string ='TS'): Promise<searchResult> {

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

function App() {
    const [reposList, setReposList] = React.useState<searchResult | undefined>(undefined)

    useEffect(() => {
        fetchData().then((response)=>setReposList(response));
    }, []);

  return (
    <div className="App">
      <header className="App-header">
          <Search/>
      </header>
        <main className='Main-container'>
            <CardsList reposList={reposList} />
        </main>
    </div>
  );
}

export default App;

import React, {useEffect} from 'react';
import Search from "./Components/Search/Search";
import CardsList from "./Components/CardsList/CardsList";
import './App.css';
import {searchResult} from "./type";

async function fetchData(): Promise<searchResult> {

    const params = new URLSearchParams({
        q: "TS",
        language: "TypeScript",
        sort: "stars",
        order: "desc",
    }).toString();
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
        <main>
            <CardsList reposList={reposList} />
        </main>
    </div>
  );
}

export default App;

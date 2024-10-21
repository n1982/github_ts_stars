import React, {MutableRefObject, useContext, useEffect, useRef} from 'react';
import CardsList from "../CardsList/CardsList";
import {getRepositoryList} from "../../api/getRepositoryList";
import {IRepository} from "../../type";
import {AppContext} from "../../App";
import {useObserver} from "../../hooks/useObserver";

const Main = () => {
    const {searchQuery, currentPage, setTotalFound} =useContext(AppContext);
    const [reposList, setReposList] = React.useState<IRepository[] | undefined>(undefined)
    const triggerRef = useRef() as MutableRefObject<HTMLDivElement>
   useObserver({
       wrapperRef:null,
       triggerRef:triggerRef,
       callback:()=>console.log('->callback')

   })
    useEffect(() => {
        if (searchQuery) getRepositoryList(searchQuery, currentPage)
            .then((response) => {
                setReposList(response.items)
                setTotalFound(response.total_count)
            });
    }, [searchQuery, currentPage]);
    return (
        <main className='App-main'>
            <CardsList reposList={reposList}/>
            <div ref={triggerRef} className="App-page-end">end</div>

        </main>
    );
};

export default Main;
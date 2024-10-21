import React, {MutableRefObject, useContext, useEffect, useRef} from 'react';
import CardsList from "../CardsList/CardsList";
import NotFound from "../NotFound/NotFound";
import {getRepositoryList} from "../../api/getRepositoryList";
import {IRepository} from "../../type";
import {AppContext} from "../../App";
import {useObserver} from "../../hooks/useObserver";
import './Main.css'
import EmptyRequest from "../EmptyRequest/EmptyRequest";

const Main = () => {
    const {searchQuery, currentPage, setTotalFound} = useContext(AppContext);
    const [reposList, setReposList] = React.useState<IRepository[] | []>([])
    const triggerRef = useRef() as MutableRefObject<HTMLDivElement>

    useObserver({
        wrapperRef: null,
        triggerRef: triggerRef,
        callback: () => console.log('->callback')

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
            {searchQuery && reposList?.length > 0 &&
                <>
                    <CardsList reposList={reposList}/>
                    <div ref={triggerRef}/>
                </>
            }
            {searchQuery && reposList?.length === 0 && <NotFound/>}
            {!searchQuery && <EmptyRequest/>}
        </main>
    );
};

export default Main;
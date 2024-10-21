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

    useEffect(() => {
        if (searchQuery) getRepositoryList(searchQuery, currentPage)
            .then((response) => {
                setReposList(response.items)
                setTotalFound(response.total_count)
            });
    }, [searchQuery, currentPage]);

    useObserver({
        wrapperRef: null,
        triggerRef: triggerRef,
        callback: () => {
            if (searchQuery) getRepositoryList(searchQuery, currentPage+1)
                .then((response) => {
                    setReposList((prevState)=>[...prevState,...response.items])
                    setTotalFound(response.total_count)
                });
        }

    })


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
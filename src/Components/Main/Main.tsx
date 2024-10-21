import React, {MutableRefObject, useContext, useEffect, useRef} from 'react';
import {getRepositoryListApi} from "../../api/getRepositoryListApi";
import {IRepository} from "../../type";
import {AppContext} from "../../App";
import {useObserver} from "../../hooks/useObserver";
import CardsList from "../CardsList/CardsList";
import EmptyRequest from "../EmptyRequest/EmptyRequest";
import NotFound from "../NotFound/NotFound";
import LoadingSkeleton from "../LoadingSkeleton/LoadingSkeleton";
import './Main.css'

const Main = () => {
    const {searchQuery, currentPage, setTotalFound, loading, setLoading} = useContext(AppContext);
    const [reposList, setReposList] = React.useState<IRepository[] | []>([])
    const triggerRef = useRef() as MutableRefObject<HTMLDivElement>

    useEffect(() => {
        if (searchQuery) {
            setLoading(true);
            setReposList([])
            getRepositoryListApi(searchQuery, currentPage)
                .then((response) => {
                    setLoading(false);
                    setReposList(response.items)
                    setTotalFound(response.total_count)
                })
        }
    }, [searchQuery, currentPage]);

    const notFoundRepo = !loading && searchQuery && reposList?.length === 0
    const foundRepo = searchQuery && reposList?.length > 0

    useObserver({
        wrapperRef: null,
        triggerRef: triggerRef,
        callback: () => {
            if (searchQuery) {
                setLoading(true);
                getRepositoryListApi(searchQuery, currentPage + 1)
                    .then((response) => {
                        setLoading(false);
                        setReposList((prevState) => [...prevState, ...response.items])
                        setTotalFound(response.total_count)
                    });
            }
        }

    })


    return (
        <main className='App-main'>
            {foundRepo &&
                <>
                    <CardsList reposList={reposList}/>
                    <div ref={triggerRef}/>
                </>
            }
            {loading && <LoadingSkeleton/>}
            {notFoundRepo && <NotFound/>}
            {!searchQuery && <EmptyRequest/>}
        </main>
    );
};

export default Main;
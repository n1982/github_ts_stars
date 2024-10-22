import React, {MutableRefObject, useContext, useEffect, useRef} from 'react';
import {getRepositoryListApi} from "../../api/getRepositoryListApi";
import {AppContext} from "../../App";
import {useObserver} from "../../hooks/useObserver";
import CardsList from "../CardsList/CardsList";
import EmptyRequest from "../EmptyRequest/EmptyRequest";
import NotFound from "../NotFound/NotFound";
import LoadingSkeleton from "../LoadingSkeleton/LoadingSkeleton";
import './Main.css'

const Main = () => {
    const {searchQuery, currentPage, setCurrentPage, reposList, setReposList, setTotalFound, loading, setLoading} = useContext(AppContext);

    const triggerRef = useRef() as MutableRefObject<HTMLDivElement>

    useEffect(() => {
        const abortController = new AbortController()
        if (searchQuery) {
            setLoading(true);
            setReposList([])
            getRepositoryListApi(searchQuery, currentPage, abortController)
                .then((response) => {
                    setLoading(false);
                    setReposList(response.items)
                    setTotalFound(response.total_count)
                }).catch(error=> {
                setLoading(false);
                console.log(error)
            })
        }
    }, [searchQuery]);

    const notFoundRepo = !loading && searchQuery && reposList?.length === 0
    const foundRepo = searchQuery && reposList?.length > 0

    useObserver({
        wrapperRef: null,
        triggerRef: triggerRef,
        callback: () => {
            if (searchQuery && currentPage) {
                setLoading(true);
                getRepositoryListApi(searchQuery, currentPage + 1)
                    .then((response) => {
                        if(response.items.length > 0) {
                            setLoading(false);
                            setReposList( [...reposList, ...response.items])
                            setTotalFound(response.total_count)
                            setCurrentPage(currentPage + 1)
                        } else {
                            setLoading(false);
                            setCurrentPage(0)
                        }

                    }).catch(error=> {
                    setLoading(false);
                        console.log(error)
                });
            }
        }

    })


    return (
        <main className='App-main'>
            {foundRepo &&
                <>
                    <CardsList reposList={reposList}/>
                    {foundRepo && loading && <LoadingSkeleton/>}
                    <div ref={triggerRef}/>
                </>
            }
            {!foundRepo && loading && <LoadingSkeleton/>}
            {notFoundRepo && <NotFound/>}
            {!searchQuery && <EmptyRequest/>}
        </main>
    );
};

export default Main;
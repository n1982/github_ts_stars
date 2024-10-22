import React, {MutableRefObject, useContext, useEffect, useRef} from 'react';
import {AppContext} from "../../App";
import {useObserver} from "../../hooks/useObserver";
import CardsList from "../CardsList/CardsList";
import EmptySearchRequest from "../EmptySearchRequest/EmptySearchRequest";
import NotFound from "../NotFound/NotFound";
import SkeletonDataLoad from "../SkeletonDataLoad/SkeletonDataLoad";
import SnackbarError from "../SnackbarError/SnackbarError";

import {getRepositoryListApi} from "../../api/getRepositoryListApi";

import './Main.css'

const Main = () => {
    const {
        searchQuery,
        currentPage,
        setCurrentPage,
        reposList,
        setReposList,
        setTotalFound,
        loading,
        setLoading,
        apiError,
        setApiError,
        setSearchQuery
    } = useContext(AppContext);

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
                }).catch(error => {
                setApiError(true)
                setLoading(false);
                setReposList([])
                setSearchQuery('')
            })
        }
    }, [searchQuery]);

    const notFoundRepo = !loading && !apiError && searchQuery && reposList?.length === 0
    const foundRepo = searchQuery && reposList?.length > 0
    const showObserverTrigger = !apiError && !loading
    const showFirstLoadingSkeleton = !foundRepo && loading
    const showAdditionalLoadingSkeleton = foundRepo && loading

    useObserver({
        wrapperRef: null,
        triggerRef: triggerRef,
        callback: () => {
            if (searchQuery && currentPage && !apiError) {
                setLoading(true);
                getRepositoryListApi(searchQuery, currentPage + 1)
                    .then((response) => {
                        if (response.items.length > 0) {
                            setLoading(false);
                            setReposList([...reposList, ...response.items])
                            setTotalFound(response.total_count)
                            setCurrentPage(currentPage + 1)
                        } else {
                            setLoading(false);
                            setCurrentPage(0)
                        }

                    }).catch(error => {
                    setApiError(true)
                    setLoading(false);
                    setReposList([])
                    setSearchQuery('')
                });
            }
        }

    })


    return (
        <main className='App-main'>
            {foundRepo &&
                <>
                    <CardsList reposList={reposList}/>
                    {showAdditionalLoadingSkeleton && <SkeletonDataLoad/>}
                    { showObserverTrigger && <div ref={triggerRef}/>}
                </>
            }
            {showFirstLoadingSkeleton && <SkeletonDataLoad/>}
            {notFoundRepo && <NotFound/>}
            {!searchQuery && <EmptySearchRequest/>}
            <SnackbarError/>
        </main>
    );
};

export default Main;
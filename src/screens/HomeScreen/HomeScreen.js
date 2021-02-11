import React, { useEffect } from 'react'
import { useFetch } from '../../hooks';
import { Loading } from '../../components';
import { Home } from '../../containers';
import { useDispatch } from 'react-redux';

export function HomeScreen() {

    const dispatch = useDispatch();


    const {
        data: appData,
        loading: appDataLoding,
        error: appDataError,
        fetch: appDataFetch } = useFetch();

    useEffect(() => {
        appDataFetch('get-data');
    }, []);


    if (!appData || appDataLoding) {
        return (
            <Loading />
        );
    }
    dispatch({ type: 'SET_CATEGORIES', payload: { categories: appData.categories } })
    console.log(appData.categories);



    return (
        <Home latest_posts={appData.latest_posts} featured_posts={appData.featured_posts} />
    )
}

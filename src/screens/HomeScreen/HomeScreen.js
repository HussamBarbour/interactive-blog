import React, { useEffect,useState } from 'react'
import { useFetch } from '../../hooks';
import { Loading } from '../../components';
import { Home } from '../../containers';
import { useDispatch } from 'react-redux';

export function HomeScreen() {
    const [refreshing,setRefreshing] = useState(false);
    const dispatch = useDispatch();


    const {
        data: appData,
        loading: appDataLoding,
        error: appDataError,
        fetch: appDataFetch } = useFetch();

    function getData(){
        setRefreshing(true);
        appDataFetch('get-data').then(()=>{
            setRefreshing(false);
        });
    }
    useEffect(() => {
        getData();
    }, []);


    if (!appData) {
        return (
            <Loading />
        );
    }
    dispatch({ type: 'SET_CATEGORIES', payload: { categories: appData.categories } })



    return (
        <Home latest_posts={appData.latest_posts} onRefresh={getData} featured_posts={appData.featured_posts} refreshing={refreshing} />
    )
}

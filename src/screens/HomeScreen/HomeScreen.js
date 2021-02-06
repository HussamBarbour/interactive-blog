import React, { useEffect } from 'react'
import { useFetch } from '../../hooks';
import { Loading} from '../../components';
import {Home} from '../../containers';

export function HomeScreen() {
    const {
        data : latestNews,
        loading:latestNewsLoding,
        error:latestNewsError,
        fetch: latestNewsFetch } = useFetch();


    useEffect(() => {
        latestNewsFetch('posts');
    }, []);


    if (!latestNews || latestNewsLoding) {
        return (
            <Loading/>
        );
    }

    return (
       <Home latestNews= {latestNews}/>
    )
}

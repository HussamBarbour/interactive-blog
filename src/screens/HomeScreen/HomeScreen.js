import React, { useEffect } from 'react'
import { useFetch } from '../../hooks';
import { Loading} from '../../components';
import {Home} from '../../containers';

export function HomeScreen() {


    const {
        data : appData,
        loading:appDataLoding,
        error:appDataError,
        fetch: appDataFetch } = useFetch();
    
    useEffect(() => {
        appDataFetch('get-data');
    }, []);


    if (!appData || appDataLoding) {
        return (
            <Loading/>
        );
    }

    return (
       <Home latestNews= {appData.latest_posts} />
    )
}

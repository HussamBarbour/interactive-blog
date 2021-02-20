import React, { useEffect,useState } from 'react'
import { useFetch } from '../../hooks';
import { Loading } from '../../components';
import { Home } from '../../containers';
import { useDispatch } from 'react-redux';

export function HomeScreen() {
    const [refreshing,setRefreshing] = useState(false);
    const [page,setPage] = useState(1);
    const dispatch = useDispatch();



    const {
        data: appData,
        loading: appDataLoding,
        error: appDataError,
        fetch: appDataFetch } = useFetch();

        const {
            data: posts,
            loading: postsLoding,
            error: postsError,
            fetch: postsFetch,
            loadMore: postsLoadMore,
            loadingMore: postsLoadingMore,
            hasMoreItem: postsHasMoreItem } = useFetch();

            function loadMore(){
                if (postsHasMoreItem){
                    postsLoadMore('posts?posts_per_page=5&paged' + (page + 1));
                    setPage(page + 1);
                }
            }
        

    function getData(){
        setRefreshing(true);
        appDataFetch('get-data').then(()=>{
            setRefreshing(false);
        });
        postsFetch('posts?posts_per_page=5');
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
        <Home latest_posts={posts} onRefresh={getData} featured_posts={appData.featured_posts} refreshing={refreshing} loadMore={loadMore}
        loadingMore={postsLoadingMore}
        hasMoreItem={postsHasMoreItem}/>
    )
}

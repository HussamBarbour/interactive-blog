import React, { useEffect,useState } from 'react'
import { useFetch } from '../../hooks';
import { Loading } from '../../components';
import { Category } from '../../containers'

export function CategoryScreen({ route, navigation }) {
    const [page,setPage] = useState(1);
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
            postsLoadMore('posts?posts_per_page=7&cat=' + route.params.category.term_id+ '&paged=' + (page + 1));
            setPage(page + 1);
        }
    }

    useEffect(() => {
        postsFetch('posts?posts_per_page=7&cat=' + route.params.category.term_id);
        navigation.setOptions({
            title: route.params.category.name,
        });
    }, []);
    if (!posts || postsLoding) {
        return (
            <Loading />
        );
    }
    return (
        <Category
        category={route.params.category}
        posts={posts} loadMore={loadMore}
        loadingMore={postsLoadingMore}
        hasMoreItem={postsHasMoreItem}
        />
    )
}

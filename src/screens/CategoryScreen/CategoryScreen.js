import React, { useEffect } from 'react'
import { useFetch } from '../../hooks';
import { Loading } from '../../components';
import { Category } from '../../containers'

export function CategoryScreen({ route, navigation }) {

    const {
        data: posts,
        loading: postsLoding,
        error: postsError,
        fetch: postsFetch } = useFetch();

    
    useEffect(() => {
        postsFetch('posts?cat=' + route.params.category.term_id);
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
        <Category category={route.params.category} posts={posts} />
    )
}

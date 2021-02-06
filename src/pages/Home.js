import React, { useEffect } from 'react'
import { SafeAreaView, Text, ActivityIndicator,FlatList } from 'react-native'
import { useFetch } from '../hooks';
import {PostItem , Loading} from '../components';

export function Home() {
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

    const renderPosts = ({item}) => (
        <PostItem post={item} />
    );
    return (
        <SafeAreaView>
            <FlatList
                data={latestNews}
                keyExtractor={(item) => item.ID.toString()}
                renderItem={renderPosts}
            />
        </SafeAreaView>
    )
}

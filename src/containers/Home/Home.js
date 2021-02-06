import React from 'react'
import { SafeAreaView, FlatList } from 'react-native'
import {PostItem , Loading} from '../../components';

export  function Home({latestNews}) {
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

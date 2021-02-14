import React from 'react'
import { SafeAreaView,FlatList, View, Text } from 'react-native'
import global_styles from '../../styles/global';
import { PostItem } from '../../components';

export function SavedPosts({posts}) {

    
    const renderPosts = ({ item }) => (
        <PostItem post={item} />
    );
    return (
        <SafeAreaView style={global_styles.page_container}>
            <FlatList
                data={posts}
                keyExtractor={(item, index) => item.ID.toString()}
                renderItem={renderPosts}
            />
        </SafeAreaView>
    )
}

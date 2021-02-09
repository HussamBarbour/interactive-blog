import React from 'react'
import { SafeAreaView,View, Text,FlatList  } from 'react-native'
import {PostItem} from '../../components';
import global_styles from '../../styles/global';

export function Category({category,posts}) {

    const renderPosts = ({item}) => (
        <PostItem post={item}  />
    );
    return (
        <SafeAreaView style={global_styles.page_container}>
            <FlatList
                data={posts}
                keyExtractor={(item) => item.ID.toString()}
                renderItem={renderPosts}
            />
        </SafeAreaView>
    ) 
}

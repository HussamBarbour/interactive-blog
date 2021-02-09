import React from 'react'
import { SafeAreaView, FlatList } from 'react-native'
import {PostItem} from '../../components';
import global_styles from '../../styles/global';

export  function Home({latestNews}) {
  
    const renderPosts = ({item}) => (
        <PostItem post={item}  />
    );
    return (
        <SafeAreaView style={global_styles.page_container}>
            <FlatList
                data={latestNews}
                keyExtractor={(item) => item.ID.toString()}
                renderItem={renderPosts}
            />
        </SafeAreaView>
    )
}

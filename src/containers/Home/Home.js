import React from 'react'
import { SafeAreaView,View,Text, FlatList } from 'react-native'
import {PostItem, Slider} from '../../components';
import global_styles from '../../styles/global';


export  function Home({latest_posts,featured_posts,onRefresh,refreshing}) {
  
    const renderPosts = ({item}) => (
        <PostItem post={item}  />
    );

    const slider = () => (
        <Slider  featured_posts={featured_posts} />
    )
    return (
        <SafeAreaView style={global_styles.page_container}>
            
        
            
            <FlatList ListHeaderComponent= {slider}
                data={latest_posts}
                keyExtractor={(item) => item.ID.toString()}
                renderItem={renderPosts}
                onRefresh={() => onRefresh()}
                refreshing={refreshing}
            />
        </SafeAreaView>
    )
}

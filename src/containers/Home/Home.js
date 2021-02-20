import React from 'react'
import { SafeAreaView,View,Text, FlatList } from 'react-native'
import {PostItem, Slider, LoadingMore} from '../../components';
import global_styles from '../../styles/global';


export  function Home({latest_posts,featured_posts,onRefresh,refreshing,loadMore,loadingMore,hasMoreItem}) {
  
    const renderPosts = ({item}) => (
        <PostItem post={item}  />
    );

    const slider = () => (
        <Slider  featured_posts={featured_posts} />
    )

    renderFooter = () => {

        if (!loadingMore && !hasMoreItem) return null;
        return (
            <LoadingMore />
        );
    };
    return (
        <SafeAreaView style={global_styles.page_container}>
            
        
            
            <FlatList ListHeaderComponent= {slider}
                data={latest_posts}
                keyExtractor={(item,index) => item.ID.toString()}
                renderItem={renderPosts}
                onRefresh={() => onRefresh()}
                refreshing={refreshing}
                ListFooterComponent={renderFooter}
                onEndReachedThreshold={0.1}
                onEndReached={() => {
                    loadMore();
                }}
            />
        </SafeAreaView>
    )
}

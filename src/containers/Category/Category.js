import React from 'react'
import { SafeAreaView, View, ActivityIndicator, FlatList } from 'react-native'
import { PostItem, Header,LoadingMore } from '../../components';
import global_styles from '../../styles/global';



export function Category({ category, posts, loadMore,loadingMore,hasMoreItem }) {

    const renderPosts = ({ item }) => (
        <PostItem post={item} />
    );
    renderFooter = () => {
        //it will show indicator at the bottom of the list when data is loading otherwise it returns null
        if (!loadingMore && !hasMoreItem) return null;
        return (
            <LoadingMore />
        );
    };
    return (
        <SafeAreaView style={global_styles.page_container}>
            <Header title={category.name}></Header>


            <FlatList
                data={posts}
                keyExtractor={(item) => item.ID.toString()}
                renderItem={renderPosts}
                ListFooterComponent={renderFooter}
                onEndReachedThreshold={0.1}
                onEndReached={() => {
                    loadMore();
                }}
            />
        </SafeAreaView>
    )
}

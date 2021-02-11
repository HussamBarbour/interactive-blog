import React from 'react'
import { ScrollView,SafeAreaView,View,Text, FlatList, Dimensions } from 'react-native'
import {PostItem} from '../../components';
import {PostCard} from '../../components';
import global_styles from '../../styles/global';
import Carousel from 'react-native-snap-carousel';

export  function Home({latest_posts,featured_posts}) {
  
    const renderSlider = ({item}) => (
        <PostCard post={item}  />
    );
    const renderPosts = ({item}) => (
        <PostItem post={item}  />
    );

    const slider = () => (
        <Carousel
              data={featured_posts}
              renderItem={renderSlider}
              sliderWidth={Dimensions.get('window').width}
              itemWidth={400}

            />
    )
    return (
        <SafeAreaView style={global_styles.page_container}>
            
        
            
            <FlatList ListHeaderComponent= {slider}
                data={latest_posts}
                keyExtractor={(item) => item.ID.toString()}
                renderItem={renderPosts}
            />
        </SafeAreaView>
    )
}

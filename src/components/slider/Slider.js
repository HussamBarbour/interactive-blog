import React from 'react'
import { View, Text ,Dimensions} from 'react-native'
import Carousel from 'react-native-snap-carousel';
import {PostCard} from '../../components';

export  function Slider({featured_posts}) {

    const renderSlider = ({item}) => (
        <PostCard post={item}  />
    );

    return (
        <View>
       <Carousel
                
              data={featured_posts}
              renderItem={renderSlider}
              sliderWidth={Dimensions.get('window').width}
              itemWidth={350}
              loop={true}
              autoplay={true}
              autoplayInterval={5000}
              

            />
          
        </View>
    );
}

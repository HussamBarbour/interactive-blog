import React from 'react'
import { ScrollView, View, Text, SafeAreaView, Image, TouchableOpacity, Share } from 'react-native'
import styles from './styles'
import global_styles from '../../styles/global';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

export function Post({ post, back, share }) {
    return (
        <SafeAreaView style={global_styles.page_container}>
            <ScrollView>
                <TouchableOpacity style={styles.back_button} onPress={back}>
                    <Icon  style={styles.back_button_icon} name="arrow-left-bold-circle-outline" size={40} />
                </TouchableOpacity>
                <View style={styles.image_container}>
                    {post.thumbnails.thumbnail ?
                        <Image source={{ uri: post.thumbnails.full }} resizeMode="cover" style={styles.image} ></Image> :
                        null
                    }
                </View>
                <View style={styles.body}>
                    <Text style={styles.title}>{post.post_title}</Text>
                    <View style={styles.post_bar}>
                        <View style={styles.post_bar_left}> 
                        <View style={styles.category_container}>
                            <Text style={styles.category}>{post.category.name}</Text>
                        </View>
                        </View>
                        <View style={styles.post_bar_right}>
                        <Text style={styles.date}>{post.text_date_ago}</Text>
                        <TouchableOpacity onPress={share}>
                            <Icon name="share" size={30}/>
                        </TouchableOpacity>
                        <TouchableOpacity >
                            <Icon name="bookmark-outline" size={30}/>
                        </TouchableOpacity>
                        </View>
                      
                    </View>
                    <Text style={styles.content}>{post.post_content}</Text>
                </View>
            </ScrollView>
        </SafeAreaView>
    );
}

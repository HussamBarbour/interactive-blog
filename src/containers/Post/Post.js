import React from 'react'
import { ScrollView, View, Text, SafeAreaView, Image, TouchableOpacity, useWindowDimensions } from 'react-native'
import styles from './styles'
import global_styles from '../../styles/global';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import HTML from "react-native-render-html";
import { Header,Button,CommentForm } from '../../components';

export function Post({ post,user, share, save, isSaved ,goToLogin}) {

    const contentWidth = useWindowDimensions().width;

    return (
        <SafeAreaView style={global_styles.page_container}>
            <Header>
                <TouchableOpacity onPress={share}>
                    <Icon name="share" color={'white'} size={30} />
                </TouchableOpacity>
            </Header>
            <ScrollView>

                <View style={styles.image_container}>
                    {post.thumbnails.full ?
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

                            <TouchableOpacity onPress={save}>
                                {
                                    isSaved ? <Icon name="bookmark" size={30} /> : <Icon name="bookmark-outline" size={30} />
                                }

                            </TouchableOpacity>
                        </View>
                    </View>
                    <HTML baseFontStyle={styles.content} source={{ html: '<div>' + post.post_content + '</div>' }} contentWidth={contentWidth} />
                    <View style={styles.post_footer}>
                    {!user ? 
                    <Button style={styles.comment_button} onPress={goToLogin} label="Yorum Yap"/>
                    : <CommentForm post={post}/>
                    }
                    </View>
                </View>

            </ScrollView>
        </SafeAreaView>
    );
}

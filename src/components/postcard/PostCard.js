import React from 'react'
import { View, Text, Image, TouchableOpacity } from 'react-native'
import styles from './styles'
import { useNavigation } from '@react-navigation/native';

export function PostCard({ post }) {
    const navigation = useNavigation();

    return (
        <TouchableOpacity onPress={() => navigation.navigate('Post', { post })}>
            <View style={styles.container}>
                <View style={styles.image_container}>
                    {post.thumbnails.thumbnail ?
                        <Image source={{ uri: post.thumbnails.slider }} resizeMode="contain" style={styles.image} ></Image> :
                        null
                    }

                </View>
                <View style={styles.body}>
                    <Text style={styles.title}>{post.post_title}</Text>
                </View>




            </View>
        </TouchableOpacity>
    )
}

import React from 'react'
import { View, Text ,Image, TouchableOpacity} from 'react-native'
import styles from './styles'

export function PostItem({post}) {
    return (
        <TouchableOpacity>
        <View style={styles.container}>
            
            <View style={styles.body}>
            <Text style={styles.category}>{post.category.name}</Text>
            <Text style={styles.title}>{post.post_title}</Text>
            <Text style={styles.date}>{post.text_date_ago}</Text>
            </View>

            <View style={styles.image_container}>
                {post.thumbnails.thumbnail ? 
                <Image source={{uri:post.thumbnails.thumbnail}} style={styles.image} ></Image> :
                        null
            }

            </View>

           

           

        </View>
        </TouchableOpacity>
        
    );
}

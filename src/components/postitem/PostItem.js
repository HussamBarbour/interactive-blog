import React from 'react'
import { View, Text } from 'react-native'

export function PostItem({post}) {
    return (
        <View>
            <Text>{post.post_title}</Text>
        </View>
    )
}

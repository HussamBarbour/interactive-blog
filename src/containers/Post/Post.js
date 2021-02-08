import React from 'react'
import { View, Text, SafeAreaView } from 'react-native'

export  function Post({post}) {
    return (
        <SafeAreaView>
             <Text>{post.category.name}</Text>
            <Text>{post.post_title}</Text>
            <Text>{post.text_date_ago}</Text>
        </SafeAreaView>
    );
}

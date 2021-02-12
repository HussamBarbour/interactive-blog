import React, { useEffect } from 'react'
import { Post } from '../../containers'

export function PostScreen({ route, navigation }) {


    useEffect(() => {
        navigation.setOptions({
            title: route.params.post.post_title,
        });
    }, []);


    return (

        <Post post={route.params.post} back={()=>{navigation.goBack()}} />
    );
}

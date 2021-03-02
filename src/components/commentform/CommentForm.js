import React,{useState}from 'react'
import { View, Text } from 'react-native';
import {Button, Input} from '../index';
import axios from 'axios';
import { useSelector } from 'react-redux';

export function CommentForm({post}) {

    const [content,setContent]= useState('');
    const user = useSelector((state) => state.user);

     async function sendComment(){

        const comment = {author_name:user.user_display_name,author_email:user.user_email ,post:post.ID, content:content}
        const headers = {Authorization:' Bearer ' + user.token}
        await axios.post('https://interactive.hussamweb.com/wp-json/wp/v2/comments',comment,{headers})

    }

    return (
        <View>
            <Input 
            onChangeText={(value) => setContent(value)}
            placeholder="Yorum yap.."/>
            <Button label="Gönder" onPress={sendComment}/>

        </View>
    )
}

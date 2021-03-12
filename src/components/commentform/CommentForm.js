import React,{useState}from 'react'
import { View, Alert } from 'react-native';
import {Button, Input} from '../index';
import axios from 'axios';
import { useSelector } from 'react-redux';

export function CommentForm({post}) {

    const [content,setContent]= useState('');
    const user = useSelector((state) => state.user);

     async function sendComment(){

        const comment = {author_name:user.user_display_name,author_email:user.user_email ,post:post.ID, content:content}
        const headers = {Authorization:' Bearer ' + user.token}
        await axios.post('http://interactive.hussamweb.com/wp-json/wp/v2/comments',comment,{headers})
        setContent('');
        Alert.alert('Tebrikler!', 'Yorum onay bekleniyor en kısa zamanda değerlendirilecektir');
    }

    return (
        <View>
            <Input 
            onChangeText={(value) => setContent(value)}
            value={content}
            placeholder="Yorum yap.."/>
            <Button label="Gönder" onPress={sendComment}/>

        </View>
    )
}

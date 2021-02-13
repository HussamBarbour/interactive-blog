import React, { useEffect ,useState} from 'react'
import { Post } from '../../containers'
import { Share, Alert} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

export function PostScreen({ route, navigation }) {

    const [post,setPost]=useState({})

    async function savePost() {
        let posts = await AsyncStorage.getItem('@POSTS');
        if (!posts) {
            posts = [];
        } else {
            posts = JSON.parse(posts);
        }
    
        if (posts.some((fav) => fav.ID === post.ID)) {
            Alert.alert('Already in favorites');
        } else {
            posts.push(post);
            posts = JSON.stringify(posts);
            await AsyncStorage.setItem('@POSTS', posts);

        }        
    }

    
    const onShare = async () => {
        try {
          const result = await Share.share({
            message: post.guid,
          });
          if (result.action === Share.sharedAction) {
            if (result.activityType) {
            } else {
            }
          } else if (result.action === Share.dismissedAction) {
          }
        } catch (error) {
          alert(error.message);
        }
      };

    useEffect(() => {
        setPost(route.params.post)
        
    }, []);


    return (

        <Post post={route.params.post} back={()=>{navigation.goBack()}} share={onShare} save={savePost}/>
    );
}

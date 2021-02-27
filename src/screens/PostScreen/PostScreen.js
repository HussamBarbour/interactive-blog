import React, { useEffect ,useState} from 'react'
import { Post } from '../../containers'
import { Share} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useDispatch } from 'react-redux';

export function PostScreen({ route, navigation }) {

    const [post,setPost]=useState({});
    const [isSaved,setIsSaved]=useState(false);
    const dispatch = useDispatch();

    async function savePost() {
        let posts = await AsyncStorage.getItem('@POSTS');
        if (!posts) {
            posts = [];
        } else {
            posts = JSON.parse(posts);
        }
    
        if (posts.some((fav) => fav.ID === post.ID)) { // remove from saved posts
            setIsSaved(false);
            let index_remove = posts.findIndex((item) => item.ID === post.ID);
            if (index_remove > -1) {
                posts.splice(index_remove, 1);
                dispatch({ type: 'SET_SAVED_POSTS', payload: { save_posts: posts } });
                posts = JSON.stringify(posts);
                await AsyncStorage.setItem('@POSTS', posts);

            }
        } else { // add to saved posts
            posts.push(post);
            dispatch({ type: 'SET_SAVED_POSTS', payload: { save_posts: posts } });
            posts = JSON.stringify(posts);
            await AsyncStorage.setItem('@POSTS', posts);
            setIsSaved(true);
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
    async function isSavedPost(){
      let posts = await AsyncStorage.getItem('@POSTS');
      if (posts) {
        posts = JSON.parse(posts);
        if (posts.some((fav) => fav.ID === route.params.post.ID)) {
          setIsSaved(true);
        }
      }
    }
    useEffect(() => {
        setPost(route.params.post)
        isSavedPost();
    }, []);


    return (

        <Post post={route.params.post} back={()=>{navigation.goBack()}} share={onShare} save={savePost} isSaved={isSaved}/>
    );
}

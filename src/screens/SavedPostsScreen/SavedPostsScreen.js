import React,{useState,useEffect} from 'react'
import { View, Text, SafeAreaView } from 'react-native'
import AsyncStorage from '@react-native-async-storage/async-storage';

export  function SavedPostsScreen() {

    const [savedPosts,setsavedPosts]=useState([])

    async function getSavedPosts() {
        const saved_posts= await AsyncStorage.getItem('@POSTS')
       if(saved_posts){ 
           setsavedPosts(saved_posts)
       }
    }


    useEffect(()=>{
        getSavedPosts()
    },[])

    return (
        <SafeAreaView>
            <Text>Saved Post Screen</Text>
        </SafeAreaView>
    );
}

import React, { useState, useEffect } from 'react'
import AsyncStorage from '@react-native-async-storage/async-storage';
import { SavedPosts } from '../../containers';
import { useSelector, useDispatch } from 'react-redux';

export function SavedPostsScreen() {

    const savedPosts = useSelector((state) => state.save_posts);
    const dispatch = useDispatch();

    async function getSavedPosts() {
        const saved_posts = await AsyncStorage.getItem('@POSTS')
        const parsedPosts = JSON.parse(saved_posts);
        if (parsedPosts) {
            dispatch({ type: 'SET_SAVED_POSTS', payload: { save_posts: parsedPosts } });
        }
    }


    useEffect(() => {
        getSavedPosts()
    }, [])

    return (
        <SavedPosts posts={savedPosts} />
    );
}

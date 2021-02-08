import React from 'react'
import { View, Text, SafeAreaView } from 'react-native'
import {Post} from '../../containers'

export  function PostScreen({route}) {
    return (
        
     <Post post={route.params.post}/>
    );
}

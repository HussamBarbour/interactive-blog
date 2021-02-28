import React from 'react'
import { More } from '../../containers'
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useDispatch,useSelector } from 'react-redux';

export function MoreScreen({navigation}) {
    const user = useSelector((state) => state.user);
    const dispatch = useDispatch();

    async function logout(){
        await AsyncStorage.removeItem('@USER');
        dispatch({ type: 'SET_USER', payload: { user: null } });
    }

    return (
        
        <More isLoged={true} logout={logout} user={user}/>
    );
}

import React from 'react'
import { More } from '../../containers'
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useDispatch , useSelector} from 'react-redux';

export function MoreScreen({navigation}) {
    
    const dispatch = useDispatch();

    function logout(){
        dispatch({ type: 'SET_USER', payload: { user: null } });
    }

    return (
        
        <More isLoged={true} logout={logout}/>
    );
}

import React,{useEffect} from 'react'
import {Login} from '../../containers'
import {useNavigation} from '@react-navigation/native';
import {useAuth} from '../../hooks';
import {Alert} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useDispatch } from 'react-redux';

export  function LoginScreen() {
    const navigation = useNavigation();
    const {loading, login} = useAuth();
    //const {loged,check} = useAuth();
    const dispatch = useDispatch();

    async function handleSubmit(values) {
        const sign = await login(values);
        if (sign.status == 200) {
            await AsyncStorage.setItem('@USER', JSON.stringify(sign.data));
            dispatch({ type: 'SET_USER', payload: { user: sign.data } });
            navigation.navigate('BlogStack');
        } else {
            if (sign.data.code == '[jwt_auth] incorrect_password'){
                Alert.alert('Hata', 'Girdiniz şifre hatalıdır');
            } else {
                Alert.alert('Hata', sign.data.message);
            }
        }
    }
    async function checkLogin(){
        // await check('eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJodHRwczpcL1wvaW50ZXJhY3RpdmUuaHVzc2Ftd2ViLmNvbSIsImlhdCI6MTYxNDQzNDQ4NSwibmJmIjoxNjE0NDM0NDg1LCJleHAiOjE2MTUwMzkyODUsImRhdGEiOnsidXNlciI6eyJpZCI6IjIifX19.q2OXC4ZKxpOkOdPGcwrBR9WEECJd8wLbQ1x2cUeHt60');

        // console.log(loged);
    }
    useEffect(()=>{
        checkLogin();
    },[]);
    // if (loged){
    //     navigation.navigate('BlogStack');
    // }
    return (
        <Login loading={loading} onSubmit={handleSubmit} />
    );
}

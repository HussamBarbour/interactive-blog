import React from 'react'
import {Login} from '../../containers'
import {useNavigation} from '@react-navigation/native';
import {useAuth} from '../../hooks';
import {Alert} from 'react-native';

export  function LoginScreen() {
    const navigation = useNavigation();
    const {loading, signUp} = useAuth();

    async function handleSubmit(values) {
        const login = await signUp(values);
        if (login.status == 200) {
            navigation.navigate('More');
        } else {
            Alert.alert('Hata', login.data.data[0].message);
        }
    }
    return (
        <Login loading={loading} onSubmit={handleSubmit} />
    );
}

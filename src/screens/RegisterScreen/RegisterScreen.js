import React from 'react'
import {Register} from '../../containers'
import {useNavigation} from '@react-navigation/native';
import {useAuth} from '../../hooks';
import {Alert} from 'react-native';

export  function RegisterScreen() {
    const navigation = useNavigation();
    const {loading, signUp} = useAuth();

    async function handleSubmit(values) {
        const register = await signUp(values);
        if (register.status == 200) {
            navigation.navigate('More');
        } else {
            Alert.alert('Hata', register.data.data[0].message);
        }
    }
    return (
        <Register loading={loading} onSubmit={handleSubmit} />
    );
}

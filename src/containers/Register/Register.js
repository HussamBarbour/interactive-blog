import React from 'react'
import { SafeAreaView,View } from 'react-native'
import { Input,Button,Header } from '../../components';
import styles from './styles';
import global_styles from '../../styles/global';
export function Register() {
    return (
        <SafeAreaView  style={global_styles.page_container}>
            <Header title='Kayıt Ol'/>
            <View style={[styles.container,global_styles.top_space]}>

                <Input placeholder='Adınız..' />
                <Input placeholder='Soyadınız..' />
                <Input
                    placeholder='E-mail adresiniz..'
                    autoCapitalize="none"
                    keyboardType="email-address" />

                <Input
                    placeholder='Şifreniz..'
                    autoCapitalize="none"
                    secureTextEntry
                />

                <Button label='Kayıt Ol'/>
            </View>


        </SafeAreaView>
    );
}

import React from 'react'
import { SafeAreaView, View } from 'react-native'
import { Input, Button, Header } from '../../components';
import styles from './styles';
import global_styles from '../../styles/global';

export function Login(){
    return(
        <SafeAreaView  style={global_styles.page_container}>
            <Header title='Giriş Yap'/>
            <View style={[styles.container,global_styles.top_space]}>

                <Input
                    placeholder='E-mail adresiniz..'
                    autoCapitalize="none"
                    keyboardType="email-address" />

                <Input
                    placeholder='Şifreniz..'
                    autoCapitalize="none"
                    secureTextEntry
                />

                <Button label='Giriş Yap'/>
            </View>


        </SafeAreaView>
    )
}
import React from 'react'
import { SafeAreaView, View,Text } from 'react-native'
import global_styles from '../../styles/global';
import {ListItem} from '../../components';
import styles from './styles';

export function More({logout}) {
    return (
        <SafeAreaView  style={global_styles.page_container}>
            <View style={[styles.container,global_styles.top_space]}>
                <ListItem title="Giriş Yap" goTo="Login"/>
                <ListItem title="Kayıt Ol"  goTo="Register" />
                <ListItem title="Çıkış Yap" onPress={logout}/>
            </View>
        </SafeAreaView>
    );
}

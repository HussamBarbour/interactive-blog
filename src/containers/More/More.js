import React from 'react'
import { SafeAreaView, View,Text } from 'react-native'
import global_styles from '../../styles/global';
import {ListItem} from '../../components';
import styles from './styles';

export function More() {
    return (
        <SafeAreaView  style={global_styles.page_container}>
            <View style={styles.container}>
                <ListItem title="Giriş Yap" />
                <ListItem title="Kayıt Ol"  />
            </View>
        </SafeAreaView>
    );
}

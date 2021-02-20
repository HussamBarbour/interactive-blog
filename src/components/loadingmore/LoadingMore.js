import React from 'react'
import { View,ActivityIndicator } from 'react-native';
import styles from './styles';

export function LoadingMore() {
    return (
        <View style={styles.container}>

            <ActivityIndicator
            size='large'
                color='#f05545'
            />

        </View>
    )
}

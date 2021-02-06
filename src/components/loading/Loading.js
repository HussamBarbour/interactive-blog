import React from 'react'
import {SafeAreaView, ActivityIndicator,View, Text,StyleSheet } from 'react-native'
import styles from './style';

export function Loading() {
    return (
        <SafeAreaView style={{flex:1}}>
            <View style={styles.container}>
                <ActivityIndicator size="large" />
                <Text style={styles.text}>Yükleniyor</Text>
                </View>
        </SafeAreaView>
    )
}


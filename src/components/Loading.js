import React from 'react'
import {SafeAreaView, ActivityIndicator,View, Text,StyleSheet } from 'react-native'

export function Loading() {
    return (
        <SafeAreaView style={{flex:1}}>
            <View style={loding_styles.container}>
                <ActivityIndicator size="large" />
                <Text style={loding_styles.text}>Yükleniyor</Text>
                </View>
        </SafeAreaView>
    )
}


const loding_styles = StyleSheet.create({
    container:{
        flex:1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    text : {
        marginTop: 16,
        fontSize: 20,
    }
});
import React from 'react'
import { View, Text, TextInput } from 'react-native';
import styles from './styles';

export function Input({...otherProps}) {
    return (
        <View style={styles.container}>
            <TextInput style={styles.input}
            {...otherProps} />
        </View>
    )
}

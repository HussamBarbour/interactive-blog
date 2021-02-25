import React from 'react'
import { View, Text, TextInput } from 'react-native';
import styles from './styles';

export function Input({error,isTouched,...otherProps}) {
    return (

        <View style={styles.container}>
            <TextInput style={styles.input}
            {...otherProps} />
            {isTouched && error && <Text style={styles.errorText}>{error}</Text>}
        </View>
    )
}

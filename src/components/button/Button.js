import React from 'react'
import { View, Text, TouchableOpacity } from 'react-native';
import styles from './styles';

export function Button({ label, ...otherProps }) {
    return (

        <TouchableOpacity {...otherProps}
            style={styles.container}
        >
            <Text style={styles.label}>{label}</Text>
        </TouchableOpacity>

    )
}

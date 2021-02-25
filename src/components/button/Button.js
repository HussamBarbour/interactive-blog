import React from 'react'
import { View, Text, TouchableOpacity } from 'react-native';
import styles from './styles';

export function Button({ label,loading, ...otherProps }) {
    return (

        <TouchableOpacity {...otherProps}
            style={styles.container} disabled={loading}
        >
            <Text style={styles.label}>{label}</Text>
        </TouchableOpacity>

    )
}

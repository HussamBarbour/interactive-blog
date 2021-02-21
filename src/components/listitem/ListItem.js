import React from 'react'
import { View, Text } from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler'
import styles from './styles';

export  function ListItem({title, onClick}) {
    return (
        <View style={styles.container}>
           <TouchableOpacity style={styles.button} onPress={onClick}>
                <Text>{title}</Text>
           </TouchableOpacity>
        </View>
    );
}

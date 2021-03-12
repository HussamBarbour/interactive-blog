import React from 'react'
import { View, Text } from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler'
import styles from './styles';
import { useNavigation } from '@react-navigation/native';

export function ListItem({ title, goTo, onPress }) {
    const navigation = useNavigation();

    function onClick() {
        if (goTo) {
            navigation.navigate(goTo);
        } else {
            onPress();
        }
    }

    return (
        <View style={styles.container}>
            <TouchableOpacity style={styles.button} onPress={onClick}>
                <Text style={styles.buttonText}>{title}</Text>
            </TouchableOpacity>
        </View>
    );
}

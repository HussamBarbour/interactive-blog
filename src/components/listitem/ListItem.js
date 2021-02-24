import React from 'react'
import { View, Text } from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler'
import styles from './styles';
import {useNavigation} from '@react-navigation/native';

export  function ListItem({title, goTo}) {
    const navigation = useNavigation();

    
    return (
        <View style={styles.container}>
           <TouchableOpacity style={styles.button} onPress={()=> navigation.navigate(goTo)}>
                <Text>{title}</Text>
           </TouchableOpacity>
        </View>
    );
}

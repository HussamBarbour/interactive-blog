import React from 'react'
import { View, Text } from 'react-native'
import Icon  from 'react-native-vector-icons/MaterialCommunityIcons'
import styles from './styles' 
import {useNavigation} from '@react-navigation/native';


export  function Header({title, children}) {
    const navigation = useNavigation();
    return (
        <View style={styles.container}>
            <View style={styles.header_left}>
                <Icon name="arrow-left" style={styles.icon} size={30} onPress={()=>{navigation.goBack()}}/>

            </View>
            <View style={styles.header_center}>
                <Text style={styles.title}>{title}</Text>

            </View>
            <View style={styles.header_right}>
             {children}

            </View>
        </View>
    );
}

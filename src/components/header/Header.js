import React from 'react'
import { View, Text } from 'react-native'
import Icon  from 'react-native-vector-icons/MaterialCommunityIcons'
import styles from './styles' 
import {useNavigation} from '@react-navigation/native';


export  function Header() {
    const navigation = useNavigation();
    return (
        <View style={styles.container}>
            <View style={styles.header_left}>
                <Icon name="arrow-left" size={40} onPress={()=>{navigation.goBack()}}/>

            </View>
            <View style={styles.header_center}>

            </View>
            <View style={styles.header_right}>

            </View>
        </View>
    );
}

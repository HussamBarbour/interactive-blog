import React from 'react'
import { View, Text,TouchableOpacity } from 'react-native'
import styles from './styles';
import {useNavigation} from '@react-navigation/native';

export function CategoryItem({category}) {
    const navigation = useNavigation();

    return (
        <TouchableOpacity  onPress={()=> navigation.navigate('Category',{category})}>
            <View style={styles.container}>
                <Text>{category.name}</Text>
            </View>
        </TouchableOpacity>
    )
}

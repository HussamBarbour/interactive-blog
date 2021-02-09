import React from 'react'
import { View, Text } from 'react-native'


export function CategoryItem({category}) {
    return (
        <View>
            <Text>{category.name}</Text>
        </View>
    )
}

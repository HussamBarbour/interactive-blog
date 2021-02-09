import React from 'react'
import { View, Text,FlatList  } from 'react-native'

export function Category({categories}) {

    const renderCategories = ({item}) => (
        <Text>{item.name}</Text>
    );
    return (
        <View>
            
            <FlatList 
            data={categories}
            keyExtractor={item => item.term_id.toString()}
            renderItem={renderCategories}
            />
        </View>
    ) 
}

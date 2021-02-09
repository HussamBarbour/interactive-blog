import React from 'react'
import { SafeAreaView,View, Text,FlatList } from 'react-native'

export function Categories({categories}) {

    const renderCategories = ({item}) => (
        <Text>{item.name}</Text>
    );
    return (

        <SafeAreaView>
            
            <FlatList 
            data={categories}
            keyExtractor={item => item.term_id.toString()}
            renderItem={renderCategories}
            />
        </SafeAreaView>
    ) 
}

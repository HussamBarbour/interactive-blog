import React from 'react'
import { SafeAreaView,View, Text,FlatList } from 'react-native'
import {CategoryItem} from '../../components';

export function Categories({categories}) {

    const renderCategories = ({item}) => (
        <CategoryItem category={item}/>
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

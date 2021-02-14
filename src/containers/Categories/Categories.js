import React from 'react'
import { SafeAreaView,View, Text,FlatList } from 'react-native'
import {CategoryItem} from '../../components';
import global_styles from '../../styles/global';


export function Categories({categories}) {

    const renderCategories = ({item}) => (
        <CategoryItem category={item}/>
    );
    return (
        <SafeAreaView style={global_styles.page_container}>
            
            <FlatList 
            data={categories}
            keyExtractor={item => item.term_id.toString()}
            renderItem={renderCategories}
            />
        </SafeAreaView>
    ) 
}

import React from 'react'
import { Categories } from '../../containers';
import {useSelector} from 'react-redux';


export function CategoriesScreen() {

    const categoriesList = useSelector((state) => state.categories);
    return (
        
        <Categories categories= {categoriesList}/>
    )
}

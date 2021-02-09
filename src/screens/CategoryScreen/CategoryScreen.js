import React from 'react'
import {Category} from '../../containers'
import {useSelector} from 'react-redux';

export function CategoryScreen() {

const categoriesList = useSelector((state) => state.categories);
    return (
        
        <Category categories= {categoriesList}/>
    )
}

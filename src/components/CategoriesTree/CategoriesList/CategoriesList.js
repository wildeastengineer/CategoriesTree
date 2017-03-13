import React from 'react';
import { CategoryItem } from '../CategoryItem';
import './CategoriesList.css';

const CategoriesList = (props) => (
    <ul className='category-items-list'>
        {props.categories.map((category) => (
            <CategoryItem
                key={category.id}
                {...category}
            />
        ))}
    </ul>
);

export default CategoriesList;

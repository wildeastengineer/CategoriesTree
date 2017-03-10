import React from 'react';
import { CategoryItem } from '../CategoriesTree';

const CategoryList = (props) => (
    <ul>
        {props.categories.map((category) => (
            <CategoryItem
                key={category.id}
                {...category}
            />
        ))}
    </ul>
);

export default CategoryList;

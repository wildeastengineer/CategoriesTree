import React from 'react';
import { CategoryItem } from '../CategoriesTree';

const CategoryList = (props) => (
    <ul>
        {props.categories.map((category) => (
            <CategoryItem
                key={category.id}
                {...category}
                onNameChange={props.onNameChange}
                onRemoveClick={props.onRemoveClick}
                onAddClick={props.onAddClick}
            />
        ))}
    </ul>
);

export default CategoryList;

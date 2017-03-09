import React, { Component } from 'react';
import { AddCategoryForm, CategoryList } from '../CategoriesTree';

class CategoriesTree extends Component {
    constructor(props) {
        super(props);

        this.state = {
            categories: [
                {
                    id: '100',
                    name: 'Category 1'
                },
                {
                    id: '200',
                    name: 'Category 2',
                    children: [
                        {
                            id: '210',
                            name: 'Category 2 1'
                        },
                        {
                            id: '220',
                            name: 'Category 2 2',
                            children: [
                                {
                                    id: '221',
                                    name: 'Category 2 2 1'
                                }
                            ]
                        }
                    ]
                },
                {
                    id: '300',
                    name: 'Category 3'
                }
            ]
        };

        this.handleNameChange = this.handleNameChange.bind(this);
        this.handleRemoveClick = this.handleRemoveClick.bind(this);
        this.handleAddClick = this.handleAddClick.bind(this);
    }

    handleNameChange(categoryId, name) {
        console.info('handleNameChange');
        console.log('categoryId', categoryId);
        console.log('name', name);
    }

    handleRemoveClick(categoryId) {
        console.info('handleRemoveClick');
        console.log('categoryId', categoryId);
    }

    handleAddClick(parentId, name) {
        console.info('handleAddClick');
        console.log('parentId', parentId);
        console.log('name', name);
    }

    render() {
        return (
            <div>
                <AddCategoryForm
                    onAddClick={this.handleAddClick}
                />
                <CategoryList
                    categories={this.state.categories}
                    onNameChange={this.handleNameChange}
                    onRemoveClick={this.handleRemoveClick}
                    onAddClick={this.handleAddClick}
                />
            </div>
        );
    }
}

export default CategoriesTree;

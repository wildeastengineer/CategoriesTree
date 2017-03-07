import React, { Component } from 'react';
import CategoryItem from './CategoryItem';
import AddCategoryForm from './AddCategoryForm';

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
        console.info('handleNameChange', categoryId, name);
    }

    handleRemoveClick(categoryId) {
        console.info('handleRemoveClick', categoryId);
    }

    handleAddClick(parentId, name) {
        console.info('handleAddClick', parentId, name);
    }

    render() {
        return (
            <div>
                <div>
                    <AddCategoryForm
                        onAddClick={this.handleAddClick}
                    />
                </div>
                <div>
                    <ul>
                        {this.state.categories.map((category) => (
                            <CategoryItem
                                key={category.id}
                                {...category}
                                onNameChange={this.handleNameChange}
                                onRemoveClick={this.handleRemoveClick}
                                onAddClick={this.handleAddClick}
                            />
                        ))}
                    </ul>
                </div>
            </div>
        );
    }
}

export default CategoriesTree;

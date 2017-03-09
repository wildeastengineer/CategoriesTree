import React, { Component, PropTypes } from 'react';
import { CategoryList, EditCategoryForm, DisplayCategoryForm } from '../CategoriesTree';

const propTypes = {
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    children: PropTypes.array,
    onNameChange: PropTypes.func,
    onRemoveClick: PropTypes.func,
    onAddClick: PropTypes.func,
};

class CategoryItem extends Component {
    constructor(props) {
        super(props);

        this.state = {
            editMode: false
        };

        this.handleEditButtonClick = this.handleEditButtonClick.bind(this);
        this.handleSaveButtonClick = this.handleSaveButtonClick.bind(this);
        this.handleCancelButtonClick = this.handleCancelButtonClick.bind(this);
    }

    handleEditButtonClick() {
        this.setState({
            editMode: true
        });
    }

    handleSaveButtonClick(newCategoryName) {
        this.props.onNameChange(this.props.id, newCategoryName);

        this.setState({
            editMode: false
        });
    }

    handleCancelButtonClick() {
        this.setState({
            editMode: false
        });
    }

    render() {
        return (
            <li>
                {this.state.editMode ? (
                        <EditCategoryForm
                            defaultValue={this.props.name}
                            onSaveClick={this.handleSaveButtonClick}
                            onCancelClick={this.handleCancelButtonClick}
                        />
                    ) : (
                        <DisplayCategoryForm
                            name={this.props.name}
                            onEditClick={this.handleEditButtonClick}
                            onRemoveClick={this.props.onRemoveClick.bind(null, this.props.id)}
                            onAddClick={this.props.onAddClick.bind(null, this.props.id, null)}
                        />
                    )}
                {this.props.children && (
                    <CategoryList
                        categories={this.props.children}
                        onNameChange={this.props.onNameChange}
                        onRemoveClick={this.props.onRemoveClick}
                        onAddClick={this.props.onAddClick}
                    />
                )}
            </li>
        );
    }
}

CategoryItem.propTypes = propTypes;

export default CategoryItem;

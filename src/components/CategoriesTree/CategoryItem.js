import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import {
    editCategory,
    addCategory,
    removeCategory
} from '../../store/actions';
import {
    CategoryList,
    EditCategoryForm,
    DisplayCategoryForm
} from '../CategoriesTree';

const propTypes = {
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    children: PropTypes.array,
    onNameChange: PropTypes.func,
    onRemoveClick: PropTypes.func,
    onAddClick: PropTypes.func
};

class CategoryItem extends Component {
    constructor(props) {
        super(props);

        this.state = {
            editMode: false
        };

        this.handleEditButtonClick = this.handleEditButtonClick.bind(this);
        this.handleSaveButtonClick = this.handleSaveButtonClick.bind(this);
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
                            onAddClick={this.props.onAddClick.bind(null, this.props.name + ' - 1', this.props.id)}
                        />
                    )}
                {this.props.children && (
                    <CategoryList
                        categories={this.props.children}
                    />
                )}
            </li>
        );
    }
}

CategoryItem.propTypes = propTypes;

const mapDispatchToProps = (dispatch) => {
    return {
        onNameChange: (id, newName) => {
            dispatch(editCategory(id, newName))
        },
        onRemoveClick: (id) => {
            dispatch(removeCategory(id))
        },
        onAddClick: (name, parent) => {
            dispatch(addCategory(name, parent))
        },
    };
};

export default connect(
    () => ({}),
    mapDispatchToProps
)(CategoryItem);


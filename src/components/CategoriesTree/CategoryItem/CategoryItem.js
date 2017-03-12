import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import {
    editCategory,
    addCategory,
    removeCategory
} from '../../../store/actions';
import { Button, Glyphicon } from 'react-bootstrap';
import {
    EditCategoryForm,
    DisplayCategoryForm
} from '../CategoryItem';
import CategoriesList from '../CategoriesList/CategoriesList';
import './CategoryItem.css';

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
            editMode: false,
            expanded: true
        };

        this.handleEditButtonClick = this.handleEditButtonClick.bind(this);
        this.handleSaveButtonClick = this.handleSaveButtonClick.bind(this);
        this.handleCancelButtonClick = this.handleCancelButtonClick.bind(this);
        this.handleExpandClick = this.handleExpandClick.bind(this);
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

    handleExpandClick() {
        this.setState({
            expanded: !this.state.expanded
        });
    }

    render() {
        const hasChildren = !!this.props.children.length;
        const className = 'category-item' + (hasChildren ? ' expandable' : '');

        return (
            <li className={className}>
                <div className='category-item-info'>
                    {hasChildren && (
                        <Button
                            bsSize='xsmall'
                            onClick={this.handleExpandClick}
                            className='category-item-expand'
                        >
                            {
                                this.state.expanded ? (
                                    <Glyphicon glyph='menu-up'/>
                                ) : (
                                    <Glyphicon glyph='menu-down'/>
                                )
                            }
                        </Button>
                    )}
                    {
                        this.state.editMode ? (
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
                        )
                    }
                </div>
                {hasChildren && this.state.expanded && (
                    <CategoriesList
                        categories={this.props.children}
                    />
                )}
            </li>
        );
    }
}

CategoryItem.propTypes = propTypes;

const mapStateToProps = (state, ownProps) => {
    const children = [];

    for (const id in state.categories.data) {
        if (!state.categories.data.hasOwnProperty(id)) {
            continue;
        }

        const category = state.categories.data[id];

        if (category.parent === ownProps.id) {
            children.push(category);
        }
    }

    return {
        children
    };
};

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
    mapStateToProps,
    mapDispatchToProps
)(CategoryItem);


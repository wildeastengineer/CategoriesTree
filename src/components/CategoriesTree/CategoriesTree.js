import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { updateCategoriesList } from '../../store/actions';
import AddCategoryForm from './AddCategoryForm/AddCategoryForm';
import CategoriesList from './CategoriesList/CategoriesList';
import './CategoriesTree.css';

const propTypes = {
    updateCategoriesList: PropTypes.func.isRequired
};

class CategoriesTree extends Component {
    componentDidMount() {
        this.props.updateCategoriesList();
    }

    render() {
        return (
            <div className='categories-tree'>
                <AddCategoryForm/>
                <CategoriesList
                    categories={this.props.categories}
                />
            </div>
        );
    }
}

CategoriesTree.propTypes = propTypes;

const mapStateToProps = (state) => {
    const categories = [];

    for (const id in state.categories.data) {
        if (!state.categories.data.hasOwnProperty(id)) {
            continue;
        }

        const category = state.categories.data[id];

        if (category.parent === null) {
            categories.push(category);
        }
    }

    return {
        categories
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        updateCategoriesList: () => {
            dispatch(updateCategoriesList())
        }
    };
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(CategoriesTree);

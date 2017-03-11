import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { updateCategoriesList } from '../../store/actions';
import { AddCategoryForm, CategoryList } from '../CategoriesTree';

const propTypes = {
    updateCategoriesList: PropTypes.func.isRequired
};

class CategoriesTree extends Component {
    componentDidMount() {
        this.props.updateCategoriesList();
    }

    render() {
        return (
            <div>
                <AddCategoryForm/>
                <CategoryList
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

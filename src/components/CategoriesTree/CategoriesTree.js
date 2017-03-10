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
    //const categories = makeTree(state.categories.data);

    const data = state.categories.data;
    const categories = [];

    for (const categoryId in data) {
        if (!data.hasOwnProperty(categoryId)) {
            continue;
        }

        categories.push(data[categoryId]);
    }

    console.warn('fix it');

    return {
        categories
    };

    function makeTree(data) {
        const result = [];
        const queue = [ null ];

        while (queue.length) {
            const currentParentId = queue.shift();
            let currentParent;

            if (currentParentId === null) {
                currentParent = result;
            } else {
                currentParent = data[currentParentId];
                currentParent.children = currentParent.children || [];
                currentParent = currentParent.children;
            }

            for (const categoryId in data) {
                if (!data.hasOwnProperty(categoryId)) {
                    continue;
                }

                const category = data[categoryId];

                if (category.parent === currentParentId) {
                    currentParent.push(category);
                    queue.push(category.id);
                }
            }
        }

        return result;
    }
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

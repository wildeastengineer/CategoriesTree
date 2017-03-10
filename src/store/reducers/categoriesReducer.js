import {
    UPDATE_CATEGORIES_LIST_STARTED,
    UPDATE_CATEGORIES_LIST_FINISHED,
    UPDATE_CATEGORIES_LIST_FAILED,
    ADD_CATEGORY_STARTED,
    ADD_CATEGORY_FINISHED,
    ADD_CATEGORY_FAILED,
    EDIT_CATEGORY_STARTED,
    EDIT_CATEGORY_FINISHED,
    EDIT_CATEGORY_FAILED,
    REMOVE_CATEGORY_STARTED,
    REMOVE_CATEGORY_FINISHED,
    REMOVE_CATEGORY_FAILED
} from '../actions';

import {
    startCategoriesUpdating,
    finishCategoriesUpdating,
    failCategoriesUpdating,
    startCategoryAdding,
    finishCategoryAdding,
    failCategoryAdding,
    startCategoryEditing,
    finishCategoryEditing,
    failCategoryEditing,
    startCategoryRemoving,
    finishCategoryRemoving,
    failCategoryRemoving
} from './categoriesReducerMethods';

const initialState = {
    info: {
        inProgress: false
    },
    data: {}
};

export default function (state = initialState, action) {
    switch (action.type) {
        // Update categories list
        case UPDATE_CATEGORIES_LIST_STARTED:
            return startCategoriesUpdating(state);
        case UPDATE_CATEGORIES_LIST_FINISHED:
            return finishCategoriesUpdating(state, action.categories);
        case UPDATE_CATEGORIES_LIST_FAILED:
            return failCategoriesUpdating(state, action.error);
        // Add new category
        case ADD_CATEGORY_STARTED:
            return startCategoryAdding(state);
        case ADD_CATEGORY_FINISHED:
            return finishCategoryAdding(state, action.category);
        case ADD_CATEGORY_FAILED:
            return failCategoryAdding(state, action.error);
        // Edit category
        case EDIT_CATEGORY_STARTED:
            return startCategoryEditing(state);
        case EDIT_CATEGORY_FINISHED:
            return finishCategoryEditing(state, action.category);
        case EDIT_CATEGORY_FAILED:
            return failCategoryEditing(state, action.error);
        // Remove category
        case REMOVE_CATEGORY_STARTED:
            return startCategoryRemoving(state);
        case REMOVE_CATEGORY_FINISHED:
            return finishCategoryRemoving(state, action.categories);
        case REMOVE_CATEGORY_FAILED:
            return failCategoryRemoving(state, action.error);
        default:
            return state;
    }
}

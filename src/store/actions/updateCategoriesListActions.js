import { categoriesRepository } from '../../repositories';

export const UPDATE_CATEGORIES_LIST_STARTED = 'UPDATE_CATEGORIES_LIST_STARTED';
export const UPDATE_CATEGORIES_LIST_FINISHED = 'UPDATE_CATEGORIES_LIST_FINISHED';
export const UPDATE_CATEGORIES_LIST_FAILED = 'UPDATE_CATEGORIES_LIST_FAILED';

export function updateCategoriesList() {
    return (dispatch) => {
        dispatch(updateCategoriesListStart());

        categoriesRepository.getList()
            .then((categories) => {
                dispatch(updateCategoriesListFinished(categories));
            })
            .catch((error) => {
                dispatch(updateCategoriesListFailed(error));
            });
    };
}

function updateCategoriesListStart() {
    return {
        type: UPDATE_CATEGORIES_LIST_STARTED
    };
}

function updateCategoriesListFinished(categories) {
    return {
        type: UPDATE_CATEGORIES_LIST_FINISHED,
        categories
    };
}

function updateCategoriesListFailed(error) {
    return {
        type: UPDATE_CATEGORIES_LIST_FAILED,
        error
    };
}

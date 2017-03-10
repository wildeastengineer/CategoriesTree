import { categoriesRepository } from '../../repositories';

export const ADD_CATEGORY_STARTED = 'ADD_CATEGORY_STARTED';
export const ADD_CATEGORY_FINISHED = 'ADD_CATEGORY_FINISHED';
export const ADD_CATEGORY_FAILED = 'ADD_CATEGORY_FAILED';

export function addCategory(name, parent) {
    return (dispatch) => {
        dispatch(addCategoryStart());

        categoriesRepository.add(name, parent)
            .then((category) => {
                dispatch(addCategoryFinished(category));
            })
            .catch((error) => {
                dispatch(addCategoryFailed(error));
            });
    };
}

function addCategoryStart() {
    return {
        type: ADD_CATEGORY_STARTED
    };
}

function addCategoryFinished(category) {
    return {
        type: ADD_CATEGORY_FINISHED,
        category
    };
}

function addCategoryFailed(error) {
    return {
        type: ADD_CATEGORY_FAILED,
        error
    };
}

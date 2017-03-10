import { categoriesRepository } from '../../repositories';

export const EDIT_CATEGORY_STARTED = 'EDIT_CATEGORY_STARTED';
export const EDIT_CATEGORY_FINISHED = 'EDIT_CATEGORY_FINISHED';
export const EDIT_CATEGORY_FAILED = 'EDIT_CATEGORY_FAILED';

export function editCategory(id, newName) {
    return (dispatch) => {
        dispatch(editCategoryStart());

        categoriesRepository.edit(id, newName)
            .then((category) => {
                dispatch(editCategoryFinished(category));
            })
            .catch((error) => {
                dispatch(editCategoryFailed(error));
            });
    };
}

function editCategoryStart() {
    return {
        type: EDIT_CATEGORY_STARTED
    };
}

function editCategoryFinished(category) {
    return {
        type: EDIT_CATEGORY_FINISHED,
        category
    };
}

function editCategoryFailed(error) {
    return {
        type: EDIT_CATEGORY_FAILED,
        error
    };
}

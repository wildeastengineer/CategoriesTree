import { categoriesRepository } from '../../repositories';

export const REMOVE_CATEGORY_STARTED = 'REMOVE_CATEGORY_STARTED';
export const REMOVE_CATEGORY_FINISHED = 'REMOVE_CATEGORY_FINISHED';
export const REMOVE_CATEGORY_FAILED = 'REMOVE_CATEGORY_FAILED';

export function removeCategory(id) {
    return (dispatch) => {
        dispatch(removeCategoryStart());

        categoriesRepository.remove(id)
            .then((categories) => {
                dispatch(removeCategoryFinished(categories));
            })
            .catch((error) => {
                dispatch(removeCategoryFailed(error));
            });
    };
}

function removeCategoryStart() {
    return {
        type: REMOVE_CATEGORY_STARTED
    };
}

function removeCategoryFinished(categories) {
    return {
        type: REMOVE_CATEGORY_FINISHED,
        categories
    };
}

function removeCategoryFailed(error) {
    return {
        type: REMOVE_CATEGORY_FAILED,
        error
    };
}

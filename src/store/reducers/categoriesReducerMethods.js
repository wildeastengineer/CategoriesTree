// Update categories list

export function startCategoriesUpdating(state) {
    return Object.assign({}, state, {
        info: Object.assign({}, state.info, {
            inProgress: true
        })
    });
}

export function finishCategoriesUpdating(state, categories) {
    return Object.assign({}, state, {
        info: Object.assign({}, state.info, {
            inProgress: false,
            error: null
        }),
        data: mapArrayToObject(categories)
    });
}

export function failCategoriesUpdating(state, error) {
    return Object.assign({}, state, {
        info: Object.assign({}, state.info, {
            inProgress: false,
            error
        })
    });
}

// Add new category

export function startCategoryAdding(state) {
    return Object.assign({}, state, {
        info: Object.assign({}, state.info, {
            inProgress: true
        })
    });
}

export function finishCategoryAdding(state, category) {
    return Object.assign({}, state, {
        info: Object.assign({}, state.info, {
            inProgress: false,
            error: null
        }),
        data: Object.assign({}, state.data, {
            [category.id] : category
        })
    });
}

export function failCategoryAdding(state, error) {
    return Object.assign({}, state, {
        info: Object.assign({}, state.info, {
            inProgress: false,
            error
        })
    });
}

// Edit category

export function startCategoryEditing(state) {
    return Object.assign({}, state, {
        info: Object.assign({}, state.info, {
            inProgress: true
        })
    });
}

export function finishCategoryEditing(state, category) {
    return Object.assign({}, state, {
        info: Object.assign({}, state.info, {
            inProgress: false,
            error: null
        }),
        data: Object.assign({}, state.data, {
            [category.id] : category
        })
    });
}

export function failCategoryEditing(state, error) {
    return Object.assign({}, state, {
        info: Object.assign({}, state.info, {
            inProgress: false,
            error
        })
    });
}

// Remove category

export function startCategoryRemoving(state) {
    return Object.assign({}, state, {
        info: Object.assign({}, state.info, {
            inProgress: true
        })
    });
}

export function finishCategoryRemoving(state, categories) {
    const data = Object.assign({}, state.data);

    for (const removedCategory of categories) {
        delete data[removedCategory.id];
    }

    return Object.assign({}, state, {
        info: Object.assign({}, state.info, {
            inProgress: false,
            error: null
        }),
        data
    });
}

export function failCategoryRemoving(state, error) {
    return Object.assign({}, state, {
        info: Object.assign({}, state.info, {
            inProgress: false,
            error
        })
    });
}

// etc

function mapArrayToObject(array, field = 'id') {
    const result = {};

    for (const item of array) {
        result[item[field]] = item;
    }

    return result;
}

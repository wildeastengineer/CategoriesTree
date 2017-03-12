import {
    startCategoriesUpdating,
    finishCategoriesUpdating,
    failCategoriesUpdating
} from './categoriesReducerMethods';

describe('Check "startCategoriesUpdating" method', () => {
    it('should be a function', () => {
        const type = typeof startCategoriesUpdating;

        expect(type).toEqual('function');
    });

    it('should change state correctly', () => {
        const state = {
            info: {
                inProgress: false
            },
            data: {}
        };

        const newState = startCategoriesUpdating(state);

        expect(newState.info.inProgress).toBe(true);
    });

    it('should not mutate origin state', () => {
        const state = {
            info: {
                inProgress: false
            },
            data: {}
        };

        Object.freeze(state);
        const newState = startCategoriesUpdating(state);

        expect(state.info.inProgress).toBe(false);
        expect(newState.info.inProgress).toBe(true);
    });
});

describe('Check "finishCategoriesUpdating" method', () => {
    it('should be a function', () => {
        const type = typeof finishCategoriesUpdating;

        expect(type).toEqual('function');
    });

    it('should change state correctly', () => {
        const category = {
            id: 'id',
            name: 'name',
            parent: 'parent'
        };
        const categories = [category];
        const state = {
            info: {
                inProgress: true
            },
            data: {}
        };

        const newState = finishCategoriesUpdating(state, categories);

        expect(newState.info.inProgress).toBe(false);
        expect(newState.info.error).toBe(null);
        expect(newState.data.hasOwnProperty(category.id)).toBe(true);
        expect(newState.info.inProgress).toBe(false);
        expect(newState.data[category.id]).toBe(category);
    });

    it('should not mutate origin state', () => {
        const category = {
            id: 'id',
            name: 'name',
            parent: 'parent'
        };
        const categories = [category];
        const state = {
            info: {
                inProgress: true
            },
            data: {}
        };

        Object.freeze(state);
        const newState = finishCategoriesUpdating(state, categories);

        expect(state.info.inProgress).toBe(true);
        expect(newState.info.inProgress).toBe(false);
        expect(state.data.hasOwnProperty(category.id)).toBe(false);
        expect(newState.data.hasOwnProperty(category.id)).toBe(true);
    });
});

describe('Check "failCategoriesUpdating" method', () => {
    it('should be a function', () => {
        const type = typeof failCategoriesUpdating;

        expect(type).toEqual('function');
    });

    it('should change state correctly', () => {
        const error = 'some error';
        const state = {
            info: {
                inProgress: true,
                error: null
            },
            data: {}
        };

        const newState = failCategoriesUpdating(state, error);

        expect(newState.info.inProgress).toBe(false);
        expect(newState.info.error).toEqual(error);
    });

    it('should not mutate origin state', () => {
        const error = 'some error';
        const state = {
            info: {
                inProgress: true,
                error: null
            },
            data: {}
        };

        Object.freeze(state);
        const newState = failCategoriesUpdating(state, error);

        expect(newState.info.inProgress).toBe(false);
        expect(newState.info.error).toEqual(error);
        expect(state.info.inProgress).toBe(true);
        expect(state.info.error).toBe(null);
    });
});

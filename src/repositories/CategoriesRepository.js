const categories = [
    {
        id: '100',
        name: 'Category 1',
        parent: null
    },
    {
        id: '300',
        name: 'Category 3',
        parent: null
    },
    {
        id: '210',
        name: 'Category 2 1',
        parent: '200',
    },
    {
        id: '220',
        name: 'Category 2 2',
        parent: '200'
    },
    {
        id: '221',
        name: 'Category 2 2 1',
        parent: '210',
    },
    {
        id: '200',
        name: 'Category 2',
        parent: null
    },
];

class CategoriesRepository {
    constructor() {}

    getList() {
        return new Promise((resolve, reject) => {
            resolve(categories);
        });
    }

    add(name, parent) {
        const id = guid();
        const newCategory = {
            id,
            parent,
            name: name || 'New category'
        };

        categories.push(newCategory);

        return new Promise((resolve, reject) => {
            resolve(newCategory);
        });

        function guid() {
            function s4() {
                return Math.floor((1 + Math.random()) * 0x10000)
                    .toString(16)
                    .substring(1);
            }
            return s4() + s4() + '-' + s4() + '-' + s4() + '-' +
                s4() + '-' + s4() + s4() + s4();
        }
    }

    edit(id, newName) {
        const category = getCategoryById(id);

        category.name = newName;

        return new Promise((resolve, reject) => {
            resolve(category);
        });

        function getCategoryById(id) {
            for (const category of categories) {
                if (category.id === id) {
                    return category;
                }
            }

            return null;
        }
    }

    remove(id) {
        // todo: remove all sub-categories

        const category = categories[2];

        return new Promise((resolve, reject) => {
            resolve([category]);
        });
    }
}

export default new CategoriesRepository();
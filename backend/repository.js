var initialList = require('./initialList');

function Repository(categories) {
    this.categories = categories;
}

Repository.prototype.getAll = function () {
    return this.categories;
};

Repository.prototype.create = function (name, parentId) {
    //ToDo: validate parent id

    var newCategory = {
        id: this.getNewId(),
        name: name,
        parent: parentId
    };

    this.categories.push(newCategory);

    return newCategory;
};

Repository.prototype.edit = function (id, newName) {
    var category = this.getById(id);

    if (category === null) {
        return null;
    }

    category.data.name = newName;

    return category.data;
};

Repository.prototype.remove = function (id) {
    //ToDo: remove children

    var category = this.getById(id);
    var result;

    if (category === null) {
        return null;
    }

    result = this.categories.splice(category.index, 1);

    return result;
};

Repository.prototype.getById = function (id) {
    var category = null;
    var i;

    for (i = 0; i < this.categories.length; i++) {
        if (this.categories[i].id === id) {
            category = this.categories[i];
            break;
        }
    }

    return category !== null ? {
        data: category,
        index: i
    } : null;
};

Repository.prototype.getNewId = function () {
    return s4() + s4() + '-' + s4() + '-' + s4() + '-' + s4() + '-' + s4() + s4() + s4();

    function s4() {
        return Math.floor((1 + Math.random()) * 0x10000).toString(16).substring(1);
    }
};

module.exports = new Repository(initialList);

var config = require('./config');
var repository = require('./repository');

module.exports = function (app, router) {
    app.use(config.base, router);

    router.get('/categories', function (req, res) {
        res.json(repository.getAll());
    });

    router.put('/categories', function (req, res) {
        res.json(repository.create(req.body.name, req.body.parentId || null));
    });

    router.post('/categories/:id', function (req, res, next) {
        var editedCategory = repository.edit(req.params.id, req.body.name);

        if (editedCategory) {
            res.json(editedCategory);
        } else {
            next('No category with id=' + req.params.id);
        }
    });

    router.delete('/categories/:id', function (req, res, next) {
        var removedCategory = repository.remove(req.params.id);

        if (removedCategory) {
            res.json(removedCategory);
        } else {
            next('No category with id=' + req.params.id);
        }
    });
};
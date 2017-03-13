import request from 'superagent';
import Repository from './Repository';

class CategoriesRepository extends Repository {
    constructor() {
        super();

        this.endpont = 'categories';
    }

    getUrl(id) {
        const mainUrl = super.getUrl();

        return `${mainUrl}/${this.endpont}` + (id ? `/${id}` : '');
    }

    getList() {
        return new Promise((resolve, reject) => {
            request
                .get(this.getUrl())
                .end((error, response) => {
                    if (error) {
                        reject(error.message);
                        return;
                    }

                    resolve(response.body);
                });
        });
    }

    add(name, parentId) {
        return new Promise((resolve, reject) => {
            request
                .put(this.getUrl())
                .send({
                    name,
                    parentId
                })
                .set('Accept', 'application/json')
                .end((error, response) => {
                    if (error) {
                        reject(response.body);
                        return;
                    }

                    resolve(response.body);
                });
        });

    }

    edit(id, name) {
        return new Promise((resolve, reject) => {
            request
                .post(this.getUrl(id))
                .send({
                    name
                })
                .set('Accept', 'application/json')
                .end((error, response) => {
                    if (error) {
                        reject(response.body);
                        return;
                    }

                    resolve(response.body);
                });
        });
    }

    remove(id) {
        return new Promise((resolve, reject) => {
            request
                .delete(this.getUrl(id))
                .end((error, response) => {
                    if (error) {
                        reject(response.body);
                        return;
                    }

                    resolve(response.body);
                });
        });
    }
}

export default new CategoriesRepository();
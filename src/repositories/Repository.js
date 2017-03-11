class Repository {
    constructor() {
        this.protocol = 'http';
        this.address = 'localhost:3002/api';
    }

    getUrl() {
        return `${this.protocol}://${this.address}`;
    }
}

export default Repository;
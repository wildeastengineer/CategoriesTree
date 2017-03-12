class Repository {
    constructor() {
        this.protocol = 'http';
        this.address = 'localhost:3001/api';
    }

    getUrl() {
        return `${this.protocol}://${this.address}`;
    }
}

export default Repository;
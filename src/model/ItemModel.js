class Item {
    constructor() {
        this._data = {};
    }

    get name() {
        return this._data.name;
    }

    get description() {
        return this._data.description;
    }

    static create(name, description) {
        let item = new Item();
        item._data.name = name;
        item._data.description = description;
        return item;
    }

    static fromJSON(data) {
        let item = new Item();
        item._data = data._data;
        return item;
    }
}

export default Item;
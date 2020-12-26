import Item from "./ItemModel"

// Wrapper for top level Redux state object to
// abstract away shallow equality concerns
// TODO: Figure out more effective pattern for handling this.
class ItemList {
    constructor() {
        this._items = [];
    }

    get items() {
        return this._items;
    }

    addItem(item) {
        this._items.push(item)
        return ItemList.fromItems(this.items)
    }

    static fromItems(items) {
        let list = new ItemList();
        list._items = items;
        return list;
    }

    static fromJSON(data) {
        this._items = data.map(obj => Item.fromJSON(obj));
    }
}

export default ItemList;
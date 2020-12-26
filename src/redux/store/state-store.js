import ItemList from "../../model/ItemListModel"

// Actions in this class should always generate a new class object.
// The exception to this rule are helper setters for cloning or reviving from JSON
class StateStore {
    constructor() {
        this.items = new ItemList();
    }
    
    reviveState(state) {
        this.items = ItemList.fromJSON(state.items);
    }
}

export default StateStore;
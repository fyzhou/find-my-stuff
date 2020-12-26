import ItemList from "../../model/ItemListModel";

// === Action Constants ===
export const ADD_ITEM = "ADD_ITEM";

// === Actions ===
export function addItem(payload) {
    console.log("Firing Action: addItem")
    return { type: ADD_ITEM, payload }
};


// === Store ===
const initialState = {
    items: new ItemList()
};

// === Reducers ===
export function rootReducer(state = initialState, action) {
    if (action.type === ADD_ITEM) {
        if (!action.payload.name) {
            console.log("Invalid Item name");
        } else if(!state.items.items.every((item) => item.name !== action.payload.name)) {
            console.log("Name: " + action.payload.name + " already exists!");
        } else {
            console.log("Appending payload to state. Name: " + action.payload.name);
            state.items = state.items.addItem(action.payload);
            return Object.assign({}, state);
        }
    }
    return state;
}
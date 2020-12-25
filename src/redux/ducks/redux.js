// === Action Constants ===
export const ADD_ITEM = "ADD_ITEM";

// === Actions ===
export function addItem(payload) {
    console.log("Firing Action: addItem")
    return { type: ADD_ITEM, payload }
};


// === Store ===
const initialState = {
    items: []
};

// === Reducers ===
export function rootReducer(state = initialState, action) {
    if (action.type === ADD_ITEM) {
        if (!action.payload.name) {
            console.log("Invalid Item name");
        } else if(!state.items.every((item) => item.name !== action.payload.name)) {
            console.log("Name: " + action.name + " already exists!");
        } else {
            console.log("Appending payload to state. Name: " + action.name);
            return Object.assign({}, state, {
                items: state.items.concat(action.payload)
            });
        }
    }
    return state;
}
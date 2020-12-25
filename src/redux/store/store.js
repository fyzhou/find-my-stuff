import { createStore } from "redux";
import { rootReducer } from "../ducks/redux";
import { saveState, loadState } from '../../persistence/localstorage'
import Item from '../../model/ItemModel'

// TODO: Move this to a state handling class
function handleLoadedState() {
    let loadedState = loadState()
    if(!loadedState) {
        return { items: [] }
    } else {
        return { items: loadedState.items.map(obj => Item.fromJSON(obj)) }
    }
}

const store = createStore(
    rootReducer,
    handleLoadedState()
);

store.subscribe(() => {
    saveState(store.getState())
});
  

export default store;
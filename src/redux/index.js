import store from "./store/store";
import { addItem } from "./ducks/redux";

window.store = store;
window.addItem = addItem;
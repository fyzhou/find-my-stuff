import { createStore } from "redux";
import { rootReducer } from "../ducks/redux";

const store = createStore(
    rootReducer
);
  
export default store;
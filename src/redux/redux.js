import { combineReducers, createStore } from "redux";
import wordReducer from "../redux/word-reduser";

let reducers = combineReducers({
    word: wordReducer,
});

let store = createStore(reducers);
window.store = store;

export default store;

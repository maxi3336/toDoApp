import {combineReducers, createStore} from "redux";
import doReducer from "./reducers/doReducer";

let reducers = combineReducers({
    toDoData: doReducer
})

let store = createStore(reducers);

window.store = store

export default store

import {combineReducers, createStore} from "redux";
import doReducer from "./reducers/doReducer";

let store = createStore(combineReducers({
    toDo: doReducer
}))

window.store = store

export default store

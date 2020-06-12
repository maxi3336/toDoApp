import {combineReducers, createStore} from "redux";
import doReducer from "./reducers/doReducer";

let reducers = combineReducers({
    toDoData: doReducer
})

let store = createStore(reducers);

export default store

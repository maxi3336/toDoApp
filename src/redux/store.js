import {combineReducers, createStore} from "redux";
import doReducer from "./reducers/doReducer";
import {reducer as formReducer} from 'redux-form'

let store = createStore(combineReducers({
    toDo: doReducer,
    form: formReducer
}))

window.store = store

export default store

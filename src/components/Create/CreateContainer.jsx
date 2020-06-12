import React from 'react'
import Create from './Create'
import {addDoActionCreator, updateDoTextActionCreator} from "../../redux/reducers/doReducer";

const CreateContainer = (props) => {
    let state = props.store.getState()

    let addDo = () => {
        let action = addDoActionCreator()
        props.store.dispatch(action)
    }

    let onDoChange = (text) => {
        let action = updateDoTextActionCreator(text)
        props.store.dispatch(action)
    }

    return <Create
                updateNewDoText={onDoChange}
                addDo={addDo}
                newDoText={state.toDoData.newDoText}
           />
}

export default CreateContainer
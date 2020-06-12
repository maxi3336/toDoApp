import React from 'react'
import {updateMarkActionCreator} from "../../../../../redux/reducers/doReducer";
import UnMarked from "./UnMarked";

const UnMarkedContainer = (props) => {

    let markChange = () => {
        let action = updateMarkActionCreator(props.doId, true)
        props.store.dispatch(action)
    }

    return (
        <UnMarked markChange={markChange}/>
    )
}

export default UnMarkedContainer
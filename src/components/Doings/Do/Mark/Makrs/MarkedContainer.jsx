import React from 'react'
import {updateMarkActionCreator} from "../../../../../redux/reducers/doReducer";
import Marked from "./Marked";

const MarkedContainer = (props) => {

    let markChange = () => {
        let action = updateMarkActionCreator(props.doId, false)
        props.store.dispatch(action)
    }

    return (
        <Marked markChange={markChange}/>
    )
}

export default MarkedContainer
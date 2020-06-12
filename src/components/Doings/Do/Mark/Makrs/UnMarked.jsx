import React from 'react'
import style from './Mark.module.css'
import {updateMarkActionCreator} from "../../../../../redux/reducers/doReducer";

const UnMarked = (props) => {

    return (
        <div className={style.mark} onClick={props.markChange}/>
    )
}

export default UnMarked
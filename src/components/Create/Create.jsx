import React from 'react'
import style from "./Create.module.css";
import TextareaAutosize from "react-textarea-autosize";

const Create = (props) => {

    let onDoChange = (event) => {
        let text = event.target.value
        props.updateNewDoText(text)
    }

    return (
        <div className={style.create}>
            <TextareaAutosize
                className={style.textEnter}
                placeholder="Write what you need to do"
                onChange={onDoChange}
                value={props.newDoText}
            />
            <button className={style.btn} onClick={props.addDo}>Add</button>
        </div>
    )
}

export default Create
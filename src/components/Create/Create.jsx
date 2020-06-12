import React from 'react'
import style from "./Create.module.css";
import TextareaAutosize from "react-textarea-autosize";

const Create = () => {
    return (
        <TextareaAutosize
            className={style.textEnter}
            placeholder="Write what you need to do"
        />
    )
}

export default Create
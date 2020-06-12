import React from 'react'
import style from './Main.module.css'
import TextareaAutosize from 'react-textarea-autosize';


const Main = (props) => {

    return (
        <div className={style.main}>
            <h1 className={style.text}>ToDo App</h1>
            <TextareaAutosize
                className={style.textEnter}
                placeholder="Write what you need to do"
            ></TextareaAutosize>
        </div>
    )
}

export default Main

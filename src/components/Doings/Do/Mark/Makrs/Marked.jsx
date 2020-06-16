import React from 'react'
import style from './Marked.module.css'

const Marked = (props) => {

    return (
        <div className={style.mark} onClick={props.markChange}/>
    )
}

export default Marked
import React from 'react'
import style from './DoneContent.module.css'

const DoneContent = (props) => {
    return (
        <p className={style.done}>
            {props.doneContent}
        </p>
    )
}

export default DoneContent
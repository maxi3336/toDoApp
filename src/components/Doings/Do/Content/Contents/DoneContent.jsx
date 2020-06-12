import React from 'react'
import style from './DoneContent.module.css'

const DoneContent = (props) => {
    return (
        <div className={style.done}>
            {props.doneContent}
        </div>
    )
}

export default DoneContent
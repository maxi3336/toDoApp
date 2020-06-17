import React from 'react'
import style from './Delete.module.css'

const Delete = (props) => {
    return (
        <button className={style.delete} onClick={props.deleteDo}/>
    )
}

export default Delete
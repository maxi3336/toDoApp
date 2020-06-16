import React from 'react'
import style from './Doings.module.css'

const Doings = (props) => {
    return (
        <div className={style.doing}>
            {props.doData}
        </div>
    )
}

export default Doings

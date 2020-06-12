import React from 'react'
import style from './Doings.module.css'
import Do from "./Do/Do";

const Doings = () => {
    return (
        <div className={style.doing}>
            <Do />
        </div>
    )
}

export default Doings
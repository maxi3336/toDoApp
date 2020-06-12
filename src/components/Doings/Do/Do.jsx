import React from 'react'
import style from './Do.module.css'
import Mark from "./Mark/Mark";
import Content from "./Content/Content";

const Do = () => {
    return (
        <div className={style.do}>
            <Mark/>
            <Content/>
        </div>
    )
}

export default Do

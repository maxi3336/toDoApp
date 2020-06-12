import React from 'react'
import style from './Do.module.css'
import Mark from "./Mark/Mark";
import Content from "./Content/Content";

const Do = (props) => {

    return (
        <div className={style.do}>
            <Mark isMarked={props.isMarked}/>
            <Content doContent={props.doContent} isMarked={props.isMarked}/>
        </div>
    )
}

export default Do

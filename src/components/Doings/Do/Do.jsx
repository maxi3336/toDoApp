import React from 'react'
import style from './Do.module.css'
import Mark from "./Mark/Mark";
import Content from "./Content/Content";

const Do = (props) => {

    return (
        <div className={style.do}>
            <Mark store={props.store} isMarked={props.isMarked} doId={props.doId}/>
            <Content doContent={props.doContent} isMarked={props.isMarked}/>
        </div>
    )
}

export default Do

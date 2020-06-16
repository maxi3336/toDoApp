import React from 'react'
import style from './Do.module.css'
import Content from "./Content/Content";
import MarkedContainer from "./Mark/Makrs/MarkedContainer";
import UnMarkedContainer from "./Mark/Makrs/UnMarkedContainer";

const Do = (props) => {

    return (
        <div className={style.do}>
            {props.isMarked?<MarkedContainer doId={props.doId}/>:<UnMarkedContainer doId={props.doId}/>}
            <Content doContent={props.doContent} isMarked={props.isMarked}/>
        </div>
    )
}

export default Do

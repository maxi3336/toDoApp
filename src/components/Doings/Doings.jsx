import React from 'react'
import style from './Doings.module.css'
import Do from "./Do/Do";
import Content from "./Do/Content/Content";
import Mark from "./Do/Mark/Mark";

const Doings = (props) => {

    let state = props.store.getState()

    let doData = state.toDoData.doData.map(doData => <Do doContent={doData.text} isMarked={doData.mark}/>)


    return (
        <div className={style.doing}>
            {doData}
        </div>
    )
}

export default Doings
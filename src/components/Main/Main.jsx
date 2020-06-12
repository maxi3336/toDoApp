import React from 'react'
import style from './Main.module.css'
import Doings from './../Doings/Doings'
import CreateContainer from "../Create/CreateContainer";


const Main = (props) => {

    return (
        <div className={style.main}>
            <h1 className={style.text}>ToDo App</h1>
            <CreateContainer store={props.store}/>
            <Doings />
        </div>
    )
}

export default Main

import React from 'react'
import style from './Main.module.css'
import Doings from './../Doings/Doings'
import CreateContainer from "../Create/CreateContainer";
import DoingsContainer from "../Doings/DoingsContainer";


const Main = (props) => {

    return (
        <div className={style.main}>
            <h1 className={style.text}>ToDo App</h1>
            <CreateContainer/>
            <DoingsContainer/>
        </div>
    )
}

export default Main

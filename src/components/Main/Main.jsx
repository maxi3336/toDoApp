import React from 'react'
import style from './Main.module.css'
import Doings from './../Doings/Doings'
import Create from "../Create/Create";


const Main = (props) => {

    return (
        <div className={style.main}>
            <h1 className={style.text}>ToDo App</h1>
            <Create />
            <Doings />
        </div>
    )
}

export default Main

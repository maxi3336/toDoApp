import React from 'react'
import CreateContainer from "../Create/CreateContainer";
import DoingsContainer from "../Doings/DoingsContainer";


const Main = (props) => {

    const onSubmit = (data) => {
        props.addDo(data.toDo)
        props.reset('toDo')
    }

    return (
        <div className="container d-flex flex-column align-items-center">
            <h1 className="text-primary m-5">ToDo App</h1>
            <CreateContainer onSubmit={onSubmit}/>
            <DoingsContainer/>
        </div>
    )
}

export default Main

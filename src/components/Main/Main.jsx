import React from 'react'
import CreateContainer from "../Create/CreateContainer";
import DoingsContainer from "../Doings/DoingsContainer";


const Main = () => {
    return (
        <div className="container d-flex flex-column align-items-center">
            <h1 className="text-primary m-5">ToDo App</h1>
            <CreateContainer/>
            <DoingsContainer/>
        </div>
    )
}

export default Main

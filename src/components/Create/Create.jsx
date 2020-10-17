import React from 'react'

const Create = (props) => {

    let onDoChange = (event) => {
        props.updateText(event.target.value)
    }

    return (
        <div className="form-group w-50 d-flex justify-content-around">
            <input
                className="form-control w-75"
                placeholder="Write what you need to do"
                onChange={onDoChange}
                value={props.newDoText}
            />
            <button className="btn btn-outline-primary " onClick={props.addDo}>Add</button>
        </div>
    )
}

export default Create

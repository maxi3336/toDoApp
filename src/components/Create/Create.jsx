import React from 'react'
import {Field} from "redux-form";
import {maxLength, requiredField} from "../validators";
import {Input} from "../FormsControls";

const maxLength30 = maxLength(30)

const Create = (props) => {
    return (
        <form className="form-group w-50 d-flex justify-content-around" onSubmit={props.handleSubmit}>
            <Field
                className="form-control w-100"
                name={'toDo'}
                component={Input}
                placeholder="Write what you need to do"
                validate={[requiredField, maxLength30]}
            />
            <button className="btn btn-outline-primary ">Add</button>
        </form>
    )
}

export default Create

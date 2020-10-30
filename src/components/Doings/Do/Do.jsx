import React from 'react'
import {Input} from "../../FormsControls";
import {Field, reduxForm} from "redux-form";
import {requiredField} from "../../validators";

const Do = (props) => {
    return (
        <div className="d-flex w-50 justify-content-between align-items-center m-2">
            {
                props.editing ? '' :
                    props.isMarked
                        ?
                        <button className="btn material-icons text-success b" onClick={() => props.updateMark(props.id)}>
                            check_box
                        </button>
                        :
                        <button className="btn material-icons" onClick={() => props.updateMark(props.id)}>
                            check_box_outline_blank
                        </button>
            }
            {
                props.editing ?
                    <form className="d-flex align-items-center form-group m-0 w-100" onSubmit={props.handleSubmit}>
                        <Field
                            name={'doText'}
                            className="form-control"
                            placeholder={props.content}
                            component={Input}
                            validate={[requiredField]}
                        />
                        <button className="material-icons btn btn-success">check</button>
                    </form> :
                    !props.isMarked ? <span className="text-primary">{props.content}</span> : <s>{props.content}</s>
            }
            <div className="d-flex">
                {
                    !props.editing ?
                        <button className="material-icons btn btn-outline-info mr-1" onClick={() => props.setEdit(props.id)}>
                            create
                        </button>
                        : ''
                }
                <button className="material-icons btn btn-outline-danger" onClick={() => props.deleteDo(props.id)}>
                    delete
                </button>
            </div>
        </div>
    )
}

export default reduxForm({form: 'changeDo'})(Do)

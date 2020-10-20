import React from 'react'
import Create from './Create'
import {connect} from "react-redux";
import {addDo, updateText} from "../../redux/reducers/doReducer";
import {reduxForm} from "redux-form";

const mapStateToProps = (state) => {
    return {newDoText: state.toDo.newDoText}
}

const CreateContainer = connect(mapStateToProps, { addDo })(Create)

export default reduxForm({form: 'toDo'})(CreateContainer)

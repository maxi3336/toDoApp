import React from 'react'
import Create from './Create'
import {connect} from "react-redux";
import {addDo} from "../../redux/reducers/doReducer";
import {reduxForm} from "redux-form";

const CreateContainer = connect(null, { addDo })(Create)

export default reduxForm({form: 'toDo'})(CreateContainer)

import React from 'react'
import Create from './Create'
import {addDoActionCreator, updateDoTextActionCreator} from "../../redux/reducers/doReducer";
import {connect} from "react-redux";

const mapStateToProps = (state) => {
    return {newDoText: state.toDoData.newDoText}
}

const mapDispatchToProps = (dispatch) => {
    return {
        updateNewDoText: (text) => {
            let action = updateDoTextActionCreator(text)
            dispatch(action)
        },

        addDo: () => {
            let action = addDoActionCreator()
            dispatch(action)
        }
    }
}

const CreateContainer = connect(mapStateToProps, mapDispatchToProps)(Create)

export default CreateContainer
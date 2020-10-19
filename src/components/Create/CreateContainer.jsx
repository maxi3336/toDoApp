import React from 'react'
import Create from './Create'
import {connect} from "react-redux";
import {addDo, updateText} from "../../redux/reducers/doReducer";

const mapStateToProps = (state) => {
    return {newDoText: state.toDo.newDoText}
}

export default connect(mapStateToProps, { addDo })(Create)

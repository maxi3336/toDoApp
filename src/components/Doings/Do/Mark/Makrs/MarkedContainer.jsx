import React from 'react'
import {updateMarkActionCreator} from "../../../../../redux/reducers/doReducer";
import Marked from "./Marked";
import {connect} from "react-redux";


const mapStateToProps = (state) => {
    return {}
}

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        markChange: () => {
            let action = updateMarkActionCreator(ownProps.doId, false)
            dispatch(action)
        }
    }
}

const MarkedContainer = connect(mapStateToProps, mapDispatchToProps)(Marked)

export default MarkedContainer
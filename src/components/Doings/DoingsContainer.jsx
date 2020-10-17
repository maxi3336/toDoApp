import React from 'react'
import {connect} from "react-redux";
import Doings from "./Doings";
import {deleteDo, updateMark } from "../../redux/reducers/doReducer";

const mapStateToProps = (state) => {
    return {
        doData: state.toDo.doData
    }
}

const DoingsContainer = connect(mapStateToProps, { updateMark, deleteDo })(Doings)

export default DoingsContainer

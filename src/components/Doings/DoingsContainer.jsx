import React from 'react'
import {connect} from "react-redux";
import Doings from "./Doings";
import {deleteDo, updateMark } from "../../redux/reducers/doReducer";
import {getDoData} from "../../redux/selectors/doSelector";

const mapStateToProps = (state) => {
    return {
        doData: getDoData(state)
    }
}

export default connect(mapStateToProps, { updateMark, deleteDo })(Doings)

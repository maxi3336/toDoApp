import React from 'react'
import {connect} from "react-redux";
import Doings from "./Doings";
import Do from "./Do/Do";

const mapStateToProps = (state) => {
    return {
        doData: state.toDoData.doData.map(doData => <Do key={doData.id} doId={doData.id} doContent={doData.text} isMarked={doData.mark}/>)
    }
}


const DoingsContainer = connect(mapStateToProps)(Doings)

export default DoingsContainer
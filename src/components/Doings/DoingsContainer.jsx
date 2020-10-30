import {connect} from "react-redux";
import Doings from "./Doings";
import {changeDo, deleteDo, setEdit, updateMark} from "../../redux/reducers/doReducer";
import {getDoData} from "../../redux/selectors/doSelector";
import {reset} from 'redux-form'

const mapStateToProps = (state) => {
    return {
        doData: getDoData(state)
    }
}

export default connect(mapStateToProps, { updateMark, deleteDo, setEdit, changeDo, reset })(Doings)

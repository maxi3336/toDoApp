import Main from "./Main";
import {connect} from "react-redux";
import {addDo} from "../../redux/reducers/doReducer";
import {reset} from "redux-form";

export default connect(null, {addDo, reset})(Main)

import Main from "./Main";
import {connect} from "react-redux";
import {addDo} from "../../redux/reducers/doReducer";

export default connect(null, {addDo})(Main)

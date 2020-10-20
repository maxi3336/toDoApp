import Main from "./Main";
import {connect} from "react-redux";
import {addDo} from "../../redux/reducers/doReducer";

const mapStateToProps = (state) => {
    return {}
}

export default connect(mapStateToProps, {addDo})(Main)

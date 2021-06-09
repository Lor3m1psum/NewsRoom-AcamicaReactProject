import { connect } from "react-redux";
import Header from "../components/Header";
import { search } from "../actions/Actions";

const mapStateToProps = (state) => ({
  value: state.search
});

const mapDispatchToProps = (dispatch) => ({
  onChangeSearch: (e) => dispatch(search(e))
});

export default connect(mapStateToProps, mapDispatchToProps)(Header);

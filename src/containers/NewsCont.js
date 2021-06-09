import { connect } from "react-redux";
import News from "../components/News";
import { getNews, clearNews } from "../actions/Actions";

const mapStateToProps = (state) => ({
  news: state.news,
  hasError: state.loadingError,
  isLoading: state.loadingInProgress
});

const mapDispatchToProps = (dispatch) => ({
  getNews: (section) => dispatch(getNews(section)),
  clearNews: () => dispatch(clearNews())
});

export default connect(mapStateToProps, mapDispatchToProps)(News);

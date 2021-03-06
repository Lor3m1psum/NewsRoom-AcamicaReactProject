import { combineReducers } from "redux";

const loadingError = (state = false, action) => {
  switch (action.type) {
    case "LOADING_ERROR":
      return action.hasErrored;
    default:
      return state;
  }
};

const loadingInProgress = (state = false, action) => {
  switch (action.type) {
    case "LOADING_IN_PROGRESS":
      return action.isLoading;
    default:
      return state;
  }
};

const news = (state = [], action) => {
  switch (action.type) {
    case "LOADING_SUCCESS":
      return action.news;
    case "CLEAR_NEWS":
      return [];
    default:
      return state;
  }
};

const search = (value = "", action) => {
  switch (action.type) {
    case "ONCHANGE_SEARCH":
      return action.value;
    default:
      return value;
  }
};
export default combineReducers({
  news,
  loadingError,
  loadingInProgress,
  search
});

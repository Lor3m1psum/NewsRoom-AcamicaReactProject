export const loadingError = (bool) => ({
  type: "LOADING_ERROR",
  hasErrored: bool
});

export const loadingInProgress = (bool) => ({
  type: "LOADING_IN_PROGRESS",
  isLoading: bool
});

export const loadingSuccess = (news) => ({
  type: "LOADING_SUCCESS",
  news
});

export const search = (e) => ({
  type: "ONCHANGE_SEARCH",
  value: e.target.value
});

export const clearNews = (news) => ({
  type: "CLEAR_NEWS",
  news
});

export const getNews = (section) => {
  let URL = "";
  if (section.includes("search")) {
    URL = `https://api.canillitapp.com${section}`;
  }
  if (section.length < 6) {
    const currentDate = new Date();
    const year = currentDate.getFullYear();
    const month = currentDate.getMonth() + 1;
    const day = currentDate.getDate();
    URL = `https://api.canillitapp.com/latest/${year}-${month}-${day}`;
  }

  if (section.includes("Internacionales")) {
    URL = "https://api.canillitapp.com/news/category/2";
  }
  if (section.includes("Tecnologia")) {
    URL = "https://api.canillitapp.com/news/category/3";
  }
  if (section.includes("Deportes")) {
    URL = "https://api.canillitapp.com/news/category/5";
  }
  if (section.includes("Diseño")) {
    URL = "https://api.canillitapp.com/news/category/6";
  }
  if (section.includes("Gaming")) {
    URL = "https://api.canillitapp.com/news/category/7";
  }

  return (dispatch) => {
    dispatch(clearNews());

    dispatch(loadingError(false));

    dispatch(loadingInProgress(true));

    fetch(URL)
      .then((response) => {
        if (!response.ok) {
          throw Error(response.statusText);
        }

        dispatch(loadingInProgress(false));
        //console.log(response);
        return response;
      })
      .then((response) => response.json())
      .then((news) => dispatch(loadingSuccess(news)))
      .catch(() => dispatch(loadingError(true)));
  };
};

import React from "react";
import NewsCard from "./NewsCard";
import { Link } from "react-router-dom";

class News extends React.Component {
  componentDidMount() {
    const { getNews, location } = this.props;
    getNews(location.pathname);
  }

  componentDidUpdate(prevProps) {
    let prevSection = prevProps.location.pathname;
    let newSection = this.props.location.pathname;
    if (newSection !== prevSection) {
      this.props.getNews(this.props.location.pathname);
    }
  }

  getPaginationURL(page) {
    let section = this.props.location.pathname;
    let lastChar = section.charAt(section.length - 1);
    let lastCharInt = parseInt(lastChar, 10);
    if (lastChar === "/") {
      return `${section}${page}`;
    } else if (Number.isInteger(lastCharInt)) {
      return section.replace(lastChar, page);
    } else {
      return `${section}/${page}`;
    }
  }

  title() {
    let section = this.props.location.pathname;
    if (section.includes("search")) {
      return "Busqueda especifica";
    }
    if (section.length < 6) {
      return "Últimas Noticias";
    }
    if (section.includes("Internacionales")) {
      return "Internacionales";
    }
    if (section.includes("Tecnologia")) {
      return "Tecnologia";
    }
    if (section.includes("Deportes")) {
      return "Deportes";
    }
    if (section.includes("Diseño")) {
      return "Diseño";
    }
    if (section.includes("Gaming")) {
      return "Gaming";
    }
  }

  render() {
    let { news, hasError, isLoading } = this.props;
    let numOfPages = 5;
    let newsPerPage = new Array(numOfPages).fill(0);
    let section = this.props.location.pathname;
    let currentPage = section.charAt(section.length - 1) - 1;
    if (news.length < 50) {
      numOfPages = Math.floor(news.length / 10);
      newsPerPage = new Array(numOfPages).fill(0);
    }
    for (let i = 0; i < numOfPages; i++) {
      newsPerPage[i] = news.slice(10 * i, 10 * (i + 1));
    }
    if (hasError) {
      return (
        <div className="container">
          <h6>Error al buscar las noticias</h6>
        </div>
      );
    }

    if (isLoading) {
      return (
        <div className="container">
          <h6>Loading…</h6>
        </div>
      );
    } else {
      return (
        <div>
          <div className="container-h2">
            <h2 className="titleh2">{this.title()}</h2>
          </div>
          <nav aria-label="...">
            <ul className="pagination">
              {newsPerPage.map((news, i) => (
                <li className="page-item disabled" key={i}>
                  <Link to={this.getPaginationURL(i + 1)}>
                    <span className="page-link">{i + 1}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
          <div className="album py-8 bg-light">
            <div className="container-fluid">
              <div className="row">
                {(newsPerPage[currentPage] || news.slice(0, 10)).map(
                  (each, i) => (
                    <NewsCard
                      title={each.title}
                      photoUrl={each.img_url}
                      portal={each.source_name}
                      url={each.url}
                      key={i}
                    />
                  )
                )}
              </div>
            </div>
          </div>
        </div>
      );
    }
  }
}
export default News;

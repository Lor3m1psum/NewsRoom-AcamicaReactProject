import React from "react";
import { Link } from "react-router-dom";

function Header({ onChangeSearch, value }) {
  const categories = [
    "Internacionales",
    "Tecnologia",
    "Deportes",
    "Diseño",
    "Gaming"
  ];

  return (
    <header>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <Link to="/">
          <div className="navbar-brand">
            <i class="fa fa-grav fa-spin fa-2x fa-fw" aria-hidden="true"></i>
            <span>
              {" "}
              <b> CosmoNoticias </b>{" "}
            </span>
          </div>
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav mr-auto">
            <li className="nav-item active">
              <Link to="/">
                <div
                  className="nav-link"
                  data-toggle="collapse"
                  data-target=".navbar-collapse"
                >
                  Home <span className="sr-only">(current)</span>
                </div>
              </Link>
            </li>
            {categories.map((category, i) => {
              return (
                <li
                  className="nav-item"
                  data-toggle="collapse"
                  data-target=".navbar-collapse"
                  key={i}
                >
                  <Link to={`/${category}`}>
                    <div className="nav-link">{category}</div>
                  </Link>
                </li>
              );
            })}
          </ul>
          <form className="form-inline my-2 my-lg-0">
            <input
              className="form-control mr-sm-2"
              type="search"
              placeholder="Escriba aqui su busqueda"
              aria-label="search"
              onChange={onChangeSearch}
            />
            <Link to={`/search/${value}`}>
              <button
                className="btn btn-outline-info my-2 my-sm-0"
                type="submit"
              >
                Buscar
              </button>
            </Link>
          </form>
        </div>
      </nav>
    </header>
  );
}
export default Header;

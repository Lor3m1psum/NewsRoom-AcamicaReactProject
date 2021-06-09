import React from "react";

function NewsCard(props) {
  const { title, photoUrl, portal, url } = props;
  const errorURL = "https://i.ibb.co/q7BGS0t/newspages.jpg";
  return (
    <div className="col-md-4  d-flex">
      <div className="card mb-4  shadow-sm">
        <img className="card-img-top" src={photoUrl || errorURL} alt={title} />
        <div className="card-body">
          <p className="card-text">{title}</p>
          <div className="d-flex justify-content-between align-items-center">
            <div className="btn-group">
              <div
                className="btn btn-sm btn-outline-secondary"
                onClick={() => window.open(url)}
              >
                Más informacion
              </div>
            </div>
            <small className="text-muted">{portal}</small>
          </div>
        </div>
      </div>
    </div>
  );
}
export default NewsCard;

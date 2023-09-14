import React, { Component } from "react";

export default class NewsItem extends Component {
  render() {
    let { title, description, imageUrl, newsUrl, author, date, source } =
      this.props;
    return (
      <div className="my-3 mx-2">
        <div
          className="card"
          style={{ width: "18 rem", border: "2px solid black" }}
        >
          <div
            style={{
              display: "flex",
              justifyContent: "flex-end",
              position: "absolute",
              right: "0",
            }}
          >
            <span className="badge rounded-pill bg-info">{source}</span>
          </div>
          <img
            height={"300px"}
            src={
              !imageUrl
                ? "https://www.dsij.in/Portals/0/EasyDNNnews/33152/image_8115.jpg"
                : imageUrl
            }
            className="card-img-top rounded"
            alt="..."
          />
          <div className="card-body">
            <h5 className="card-title">{title}</h5>
            <p className="card-text">{description}</p>
            <p class="card-text">
              <small className="text-muted">
                By {author ? author : "Unknown"} At{" "}
                {new Date(date).toGMTString()}
              </small>
            </p>
            <a
              href={newsUrl}
              target="_blank"
              className="btn btn-sm btn-primary"
            >
              Read Full Article
            </a>
          </div>
        </div>
      </div>
    );
  }
}

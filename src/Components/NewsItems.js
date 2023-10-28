import React, { Component } from 'react'

export class NewsItems extends Component {
  render() {
    let {
      title,
      description,
      ImgUrl,
      newsUrl,
      author,
      date,
      source,
    } = this.props
    return (
      <div>
        <div className="card" style={{ width: ' 18rem' }}>
          <img
            src={
              !ImgUrl
                ? 'https://c.ndtvimg.com/2023-01/fqjt4e0o_amazon-reuters_625x300_05_January_23.jpg'
                : ImgUrl
            }
            className="card-img-top"
            alt="..."
          />
          <div className="card-body">
            <span
              className="position-absolute top-0  translate-middle badge rounded-pill bg-danger"
              style={{ left: '90%' }}
            >
              {source}
            </span>
            <h5 className="card-title">{title}...</h5>
            <p className="card-text">{description}...</p>
            <a href={newsUrl} className="btn btn-primary">
              Read full Document
            </a>
            <p className="card-text">
              <small className="text-body-secondary">
                By {!author ? 'Unknow' : author} on {<br />}
                {new Date(date).toGMTString()}
              </small>
            </p>
          </div>
        </div>
      </div>
    )
  }
}

export default NewsItems

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
      <div className="card" style={{ width: ' 18rem', margin: '0 auto' }}>
        <img
          src={
            !ImgUrl
              ? 'https://propertywiselaunceston.com.au/wp-content/themes/property-wise/images/no-image@2x.png'
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
    )
  }
}

export default NewsItems

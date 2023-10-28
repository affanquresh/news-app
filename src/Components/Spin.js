import React, { Component } from 'react'
import loading from './Spinner-1s-200px.gif'

export default class spinner extends Component {
  render() {
    return (
      <div className="container d-flex justify-content-center">
        {/* <img src={loading} alt="loading" /> */}
        <iframe
          src="https://giphy.com/embed/KG4PMQ0jyimywxNt8i"
          width="100"
          height="100"
          frameBorder="0"
          className="giphy-embed"
          allowFullScreen
        ></iframe>
        <p>
          <a href="https://giphy.com/gifs/AmpersandAdvisory-loading-ampersandadvisory-KG4PMQ0jyimywxNt8i"></a>
        </p>
      </div>
    )
  }
}

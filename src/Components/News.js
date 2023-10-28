import React, { Component } from 'react'
import NewsItems from './NewsItems'
import Spinner from './Spin'
import PropTypes from 'prop-types'
import InfiniteScroll from 'react-infinite-scroll-component'

export class News extends Component {
  constructor() {
    super()
    this.state = {
      articles: [],
      loading: true,
      page: 1,
      totalResult: 0,
    }
  }

  async componentDidMount() {
    this.props.setProgress(0)
    const url = ` https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&page=${this.state.page}&apiKey=${this.props.apikey}&pageSize=${this.props.pageSize}`
    let data = await fetch(url)
    this.props.setProgress(30)
    let parsedData = await data.json()
    this.props.setProgress(70)
    this.setState({
      articles: parsedData.articles,
      totalResult: parsedData.totalResults,
      loading: false,
    })
    this.props.setProgress(100)
  }

  fetchMoreData = async () => {
    this.setState({ page: this.state.page + 1 })
    const url = ` https://newsapi.org/v2/top-headlines?country=${
      this.props.country
    }&category=${this.props.category}&page=${this.state.page + 1}&apiKey=${
      this.props.apikey
    }&pageSize=${this.props.pageSize}`
    let data = await fetch(url)
    let parsedData = await data.json()
    this.setState({
      articles: this.state.articles.concat(parsedData.articles),
      totalResult: parsedData.totalResults,
    })
  }

  render() {
    return (
      <div className="container m-3">
        <h2 className="text-center"> Top headlines</h2>

        <InfiniteScroll
          dataLength={this.state.articles.length}
          next={this.fetchMoreData}
          hasMore={this.state.articles.length != this.state.totalResult}
          loader={<Spinner />}
        >
          <div className="container">
            {this.state.loading && <Spinner />}
            <div className="row">
              {this.state.articles.map((elements) => {
                return (
                  <div className="col-md-4  my-3" key={elements.title}>
                    <NewsItems
                      title={elements.title}
                      description={elements.description}
                      ImgUrl={elements.urlToImage}
                      newsUrl={elements.url}
                      author={elements.author}
                      date={elements.publishedAt}
                      source={elements.source.name}
                    />
                  </div>
                )
              })}
            </div>
          </div>
        </InfiniteScroll>
      </div>
    )
  }
}

export default News

{
  /* <div className="container d-flex justify-content-between">
            <button
              disabled={this.state.page <= 1}
              type="button"
              className="btn btn-secondary "
              onClick={this.handlePrev}
            >
              &larr; Previous
            </button>
            <button
              disabled={
                this.state.page + 1 >
                Math.ceil(this.state.totalResult / this.props.pageSize)
              }
              type="button"
              className="btn btn-secondary "
              onClick={this.handleNext}
            >
              Next &rarr;
            </button>
          </div> */
}

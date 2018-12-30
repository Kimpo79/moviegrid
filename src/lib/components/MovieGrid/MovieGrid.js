import React from 'react'
import MovieDetailsDialog from '../MovieDetailsDialog'
import { getMovieDetails, getMoviesByFreeTextSearch } from '../../api'
import { MOVIE_POSTER_BASE_PATH } from '../../config'
import { debounce } from 'lodash'

export default class MovieGrid extends React.Component {
  constructor() {
    super()
    this.state = {
      movieList: [],
      searchText: 'Batman',
      showModal: false,
      pageCount: 1,
      selectedMovie: {
        details: {},
        cast: []
      }
    }
  }

  search(shouldAppendResults) {
    getMoviesByFreeTextSearch(this.state.searchText, this.state.pageCount)
      .then(response => {
        this.setState({
          movieList: shouldAppendResults
            ? [...this.state.movieList, ...response.data.results]
            : [...response.data.results]
        })
      })
      .catch(console.log)
  }

  componentWillMount() {
    this.searchDebounced = debounce(() => {
      this.search()
    }, 300)
  }

  handleCloseModal = () => {
    this.setState({ showModal: false })
  }

  handleSearchFieldChange = e => {
    this.setState(
      {
        searchText: e.target.value,
        pageCount: 1
      },
      () => {
        this.searchDebounced()
      }
    )
  }

  handleShowMore = () => {
    this.setState(
      {
        pageCount: this.state.pageCount + 1
      },
      () => {
        this.search(true)
      }
    )
  }

  displayMovieDetails(id) {
    getMovieDetails(id)
      .then(([details, credits]) => {
        this.setState({
          selectedMovie: { details: details.data, cast: credits.data.cast },
          showModal: true
        })
      })
      .catch(console.log)
  }

  componentDidMount() {
    this.search()
  }

  render() {
    return (
      <React.Fragment>
        <input
          className="search-field"
          onChange={this.handleSearchFieldChange}
          placeholder="Start typing..."
        />
        <div className="movie-grid">
          {this.state.movieList &&
            this.state.movieList.map((movie, i) => {
              return (
                <div
                  className="grid-item"
                  key={i}
                  onClick={() => this.displayMovieDetails(movie.id)}
                >
                  {movie.poster_path ? (
                    <img
                      src={MOVIE_POSTER_BASE_PATH + movie.poster_path}
                      alt={movie.title}
                    />
                  ) : (
                    <div className="fallback-placeholder">{movie.title}</div>
                  )}
                </div>
              )
            })}
        </div>
        <div className="show-more">
          <button onClick={this.handleShowMore}>Show more</button>
        </div>
        <MovieDetailsDialog
          selectedMovie={this.state.selectedMovie}
          showModal={this.state.showModal}
          handleCloseModal={this.handleCloseModal}
        />
      </React.Fragment>
    )
  }
}

import React from 'react'
import { shallow } from 'enzyme'
import MovieDetailsDialog from './MovieDetailsDialog'
import { MOVIE_POSTER_BASE_PATH } from '../../config'

let wrapper
const MovieDetailsProps = {
  selectedMovie: {
    details: {
      poster_path: '/test_path',
      title: 'test_title',
      vote_average: 9.9,
      release_date: '2018-05-21',
      homepage: 'https://www.example.com',
      genres: [{ name: 'genre1' }, { name: 'genre2' }]
    },
    cast: [{ name: 'castname', profile_path: 'test_path' }]
  }
}

beforeEach(() => {
  wrapper = shallow(<MovieDetailsDialog {...MovieDetailsProps} />)
})

describe('Movie Dialog', () => {
  it('should render movie title', () => {
    expect(wrapper.find('h2.title').text()).toEqual(
      MovieDetailsProps.selectedMovie.details.title
    )
  })

  it('Movie img path should be present', () => {
    expect(wrapper.find('img.movie-poster').prop('src')).toEqual(
      `${MOVIE_POSTER_BASE_PATH}${
        MovieDetailsProps.selectedMovie.details.poster_path
      }`
    )
  })

  it('should render rating', () => {
    expect(wrapper.find('li.rating').text()).toContain(
      MovieDetailsProps.selectedMovie.details.vote_average
    )
  })

  it('should render release date', () => {
    expect(wrapper.find('li.release-date').text()).toContain(
      MovieDetailsProps.selectedMovie.details.release_date
    )
  })

  it('Movie homepage href should be present', () => {
    expect(wrapper.find('li.homepage a').prop('href')).toEqual(
      MovieDetailsProps.selectedMovie.details.homepage
    )
  })

  it('should render list of genres', () => {
    expect(wrapper.find('li.genres span')).toHaveLength(
      MovieDetailsProps.selectedMovie.details.genres.length
    )
  })

  it('should render list of cast members', () => {
    expect(wrapper.find('div.cast-grid div.item')).toHaveLength(
      MovieDetailsProps.selectedMovie.cast.length
    )
  })
})

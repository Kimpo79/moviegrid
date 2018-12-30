import React from 'react'
import { shallow } from 'enzyme'
import MovieGrid from './MovieGrid'

let wrapper

beforeEach(() => {
  wrapper = shallow(<MovieGrid />)
})

describe('Movie Grid', () => {
  it('should update state when search input changes', () => {
    const fakeEvent = {
      target: { value: 'Superman' }
    }

    wrapper.find('input.search-field').simulate('change', fakeEvent)
    expect(wrapper.instance().state.searchText).toBe(fakeEvent.target.value)
  })

  it('should render movie grid when movies are present', () => {
    const fakeMovies = [
      {
        title: 'Batman'
      },
      {
        title: 'Watman'
      },
      {
        title: 'Ratman'
      }
    ]

    wrapper.instance().setState({ movieList: fakeMovies })
    expect(wrapper.find('div.movie-grid div.grid-item')).toHaveLength(
      fakeMovies.length
    )
  })

  it('should update page count when show more is clicked', () => {
    wrapper.find('div.show-more button').simulate('click')
    expect(wrapper.instance().state.pageCount).toBe(2)
  })
})

import axios from 'axios'
import { API_KEY, API_BASE_PATH, MOVIES_API_SEARCH_ENDPOINT } from '../config'

const coreParamConfig = {
  api_key: API_KEY,
  language: 'en-US',
  include_adult: false,
  include_video: false
}

const buildUrlParams = params => {
  return Object.keys(params)
    .map(key => `${key}=${params[key]}`)
    .join('&')
}

export const getMovieDetails = id => {
  return Promise.all([
    axios.get(`${API_BASE_PATH}/${id}?${buildUrlParams(coreParamConfig)}`),
    axios.get(
      `${API_BASE_PATH}/${id}/credits?${buildUrlParams(coreParamConfig)}`
    )
  ])
}

export const getMoviesByFreeTextSearch = (query, page = 1) => {
  return axios.get(
    `${MOVIES_API_SEARCH_ENDPOINT}${buildUrlParams(
      coreParamConfig
    )}&query=${query}&page=${page}`
  )
}

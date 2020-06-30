import getGenres from '../util/genres_api_util'

export const RECEIVE_GENRES = 'RECEIVE_GENRES';

export const receiveGenres = genres => ({
  type: RECEIVE_GENRES,
  genres
})

export const fetchGenres = () => dispatch => (
  getGenres()
    .then(genres => dispatch(receiveGenres(genres)))
);
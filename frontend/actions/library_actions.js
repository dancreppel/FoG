import * as LibraryApiUtil from '../util/library_api_util';
import { receiveErrors } from './errors_actions';

export const RECEIVE_LIBRARY = "RECEIVE_LIBRARY";
export const RECEIVE_LIBRARY_ITEM = "RECEIVE_LIBRARY_ITEM";
export const REMOVE_LIBRARY_ITEM = "REMOVE_LIBRARY_ITEM";

const receiveLibrary = library => ({
  type: RECEIVE_LIBRARY,
  library
});

const receiveLibraryItem = libraryItem => ({
  type: RECEIVE_LIBRARY_ITEM,
  libraryItem
});

const removeLibraryItem = libraryItemId => ({
  type: REMOVE_LIBRARY_ITEM,
  libraryItemId
});

export const fetchLibrary = () => dispatch => (
  LibraryApiUtil.getLibrary()
    .then(
      library => dispatch(receiveLibrary(library)),
      errors => dispatch(receiveErrors(errors.responseJSON))
    )
);

export const createLibraryItem = (gameId, owned) => dispatch => (
  LibraryApiUtil.postLibraryItem(gameId, owned)
    .then(
      libraryItem => dispatch(receiveLibraryItem(libraryItem)),
      errors => dispatch(receiveErrors(errors.responseJSON))
    )
);

export const deleteLibraryItem = libraryItemId => dispatch => (
  LibraryApiUtil.deleteLibraryItem(libraryItemId)
    .then(
      () => dispatch(removeLibraryItem(libraryItemId)),
      errors => dispatch(receiveErrors(errors.responseJSON))
    )
);
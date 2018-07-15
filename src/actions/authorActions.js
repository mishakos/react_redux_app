import authorApi from '../api/mockAuthorApi';
import * as types from './actionTypes';
import {beginAjaxCall, ajaxCallError} from './ajaxStatusAction';

export function loadAuthorsSuccess(authors) {
  return {type: types.LOAD_AUTHORS_SUCCESS, authors};
}

export function createAuthorSuccess(author) {
  return {
    type: types.CREATE_AUTHORS_SUCCESS,
    author
  };
}

export function updateAuthorSuccess(author) {
  return {
    type: types.UPDATE_AUTHORS_SUCCESS,
    author
  };
}

export function deleteAuthorSuccess(author) {
  return {
    type: types.DELETE_AUTHORS_SUCCESS,
    author
  };
}

export function loadAuthors() {
  return dispatch => {
    dispatch(beginAjaxCall());
    return AuthorApi.getAllAuthors().then(authors => {
      dispatch(loadAuthorsSuccess(authors));
    }).catch(error => {
      throw(error);
    });
  };
}
export function saveAuthor(author) {
  return function(dispatch, getState) {
    dispatch(beginAjaxCall);
    return authorApi.saveAuthor(author).then(savedAuthor => {
      author.id ? dispatch(updateAuthorSuccess(saveAuthor)) : dispatch(createAuthorSuccess(saveAuthor));
    }).catch(error => {
      dispatch(ajaxCallError(error));
      throw(error);
    });
  };
}

export function deleteAuthor(author) {
  return function (dispatch, getState) {
    return authorApi.deleteAuthor(author.id).then(deletedAuthor => {
      dispatch(deleteAuthorSuccess(author));
    }).catch(error => {
      throw(error);
    });
  };
}
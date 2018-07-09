import * as types from './actionTypes';
import courseApi from '../api/mockCourseApi';
import {
  beginAjaxCall,
  ajaxCallError
} from './ajaxStatusAction';

export function loadCoursesSuccess(courses) {
  return {
    type: types.LOAD_COURSES_SUCCESS,
    courses
  };
}
export function createCourseSuccess(course) {
  return {
    type: types.CREATE_COURSES_SUCCESS,
    course
  };
}
export function updateCourseSuccess(course) {
  return {
    type: types.UPDATE_COURSES_SUCCESS,
    course
  };
}

export function deleteCourseSuccess(course) {
  return {
    type: types.DELETE_COURSES_SUCCESS,
    course
  };
}

export function loadCourses() {
  return function (dispatch) {
    dispatch(beginAjaxCall());
    return courseApi.getAllCourses().then(courses => {
      dispatch(loadCoursesSuccess(courses));
    }).catch(error => {
      throw (error);
    });
  };
}

export function saveCourse(course) {
  return function (dispatch, getState) {
    dispatch(beginAjaxCall());
    return courseApi.saveCourse(course).then(savedCourse => {
      course.id ? dispatch(updateCourseSuccess(savedCourse)) : dispatch(createCourseSuccess(savedCourse));
    }).catch(error => {
      dispatch(ajaxCallError(error));
      throw (error);
    });
  };
}

export function deleteCourse(course) {
  return function (dispatch, getState) {
    return courseApi.deleteCourse(course.id).then(deletedCourse => {
      dispatch(deleteCourseSuccess(course));
    }).catch(error => {
      throw(error);
    });
  };
}
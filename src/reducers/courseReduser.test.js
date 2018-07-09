import expect from 'expect';
import courseReduser from './courseReduser';
import * as actions from '../actions/courseActions';

describe('Course Reducer', () => {
  it('should add course when passed CREATE_COURSE_SUCCESS', () => {
    //arrange
    const initialState = [
      {title: 'A'},
      {title: 'B'}
    ];

    const newCourse = {title: 'C'};
    const action = actions.createCourseSuccess(newCourse);

    //act
    const newState = courseReduser(initialState, action);

    //assert
    expect(newState.length).toEqual(3);
    expect(newState[0].title).toEqual('A');
    expect(newState[1].title).toEqual('B');
    expect(newState[2].title).toEqual('C');
  });

  it('should update course when passed UPDATE_COURSE_SUCCESS', () => {
    //arrange
    const initialState = [
      {id: 'A', title: 'A'},
      {id: 'B', title: 'B'},
      {id: 'C', title: 'C'}
    ];

    const course = {id: 'B', title: 'New Title'};
    const action = actions.updateCourseSuccess(course);

    //act
    const newState = courseReduser(initialState, action);
    const updateCourse = newState.find(a => a.id == course.id);
    const untochedCourse = newState.find(a => a.id == 'A');

    //assert
    expect(updateCourse.title).toEqual('New Title');
    expect(untochedCourse.title).toEqual('A');
    expect(newState.length).toEqual(3);
  });
});
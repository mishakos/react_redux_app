import React, {PropTypes} from 'react';
import {Link} from 'react-router';

const CourseListRow = ({course}) => {
    return (
        <tr>
            <td><a href={course.watchHref} target="blank">Watch</a></td>
            <td><Link to={'/course/' + course.id}>{course.title}</Link></td>
            <td>{course.authorId}</td>
            <td>{course.category}</td>
            <td>{course.length}</td>
            <td>
              <button className="btn btn-primary btn-sm" >Delete</button>
            </td>
        </tr>
    );
};

deleteCourse(event) {
  console.log(event);
  event.preventDefault();
  this.props.actions.deleteCourse(this.state.course)
    .then(() =>{
      toastr.success('Course deleted.');
    })
    .catch(error => {
      toastr.error(error);
    });
}



CourseListRow.propTypes = {
    course: PropTypes.object.isRequired
};

export default CourseListRow;
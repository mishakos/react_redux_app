import React, {PropTypes} from 'react';
import {Link} from 'react-router';

const AuthorListRow = ({author}) => {
    return (
        <tr>
            <td><Link to={'/author/' = author.id}>{author.id}</Link></td>
            <td>{author.firstName}</td>
            <td>{author.lastName}</td>
            <td>
                <button className="btn btn-primary btn-sm">Delete</button>
            </td>
        </tr>
    )
}

deleteAuthor(event) {
    console.log(event);
    event.preventDefault();
    this.props.actions.deleteAuthor(this.state.author)
        .then(() => {
            toast.success('Author deleted.');
        })
        .catch(error => {
            toastr.error(error);
        });
}

AuthorListRow.propTypes = {
    author: PropTypes.object.isRequired
};

export default AuthorListRow;
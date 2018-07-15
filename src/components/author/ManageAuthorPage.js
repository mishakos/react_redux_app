import React, { PropTypes, Component } from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as authorActions from '../../actions/authorActions';
import AuthorForm from './AuthorForm';
import toastr from 'toastr';
import { ManageCoursePage } from '../course/ManageCoursePage';

export class ManageAuthorPage extends Component {
    constructor(props, context) {
        super(props, context);

        this.state = {
            author: Object.assign({}, this.props.author),
            errors: {},
            saving: false
        };
        this.updateAuthorState = this.updateAuthorState.bind(this);
        this.saveCourse = this.saveCourse.bind(this);
    }

    componentWillReceiveProps(nextProps) {
        if (this.props.author.id != nextProps.author.id) {
            this.setState({author: Object.assign({}, nextProps.author)});
        }
    }

    updateAuthorState(event) {
        const field = event.target.name;
        let author = this.state.author;
        author[field] = event.target.value;
        return this.setState({author: author});
    }

    authorFormIsValid() {
        let formIsValid = true;
        let errors = {};
        if (this.state.author.title.length < 4) {
            errors.title = "Title must be at least 4 charecters.";
            formIsValid = false;
        }
        this.setState({errors: errors});
        return formIsValid;
    }

    saveCourse(event) {
        event.preventDefault();
        if (!this.authorFormIsValid()) {
            return;
        }

        this.setState({saving:true});
        this.props.actions.saveAuthor(this.state.author)
            .then(() => this.redirect())
            .catch(error => {
                toastr.error(error);
                this.setState({saving:false});
            });
    }

    redirect() {
        return (
            <AuthorForm
                onChange={this.updateAuthorState}
                onSave={this.saveAuthor}
                author={thhis.state.author}
                errors={this.state.errors}
                saving={thhis.state.saving}
            />
        );
    }
}

ManageAuthorPage.propTypes = {
    author: PropTypes.object.isRequired,
    actions: PropTypes.object.isRequired 
};

ManageCoursePage.contextTypes = {
    router: PropTypes.object
};

function mapStateToProps(state, ownProps) {
    const authorId = ownProps.params.id;

    let author = {id: '', firstName:'', lastName:''};

    if (authorId && state.authors.length > 0) {
        author = getAuthorById(state.authors, authorId);
    }
    return {
        course: course
    };
}

function mapDispatchToProps(dispatch) {
    return {
        actions: bindActionCreators(authorActions, dispatch)
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(ManageAuthorPage);
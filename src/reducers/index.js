import {combineReducers} from 'redux';
import courses from './courseReduser';
import authors from './authorReduser';
import ajaxCallsInProgress from './ajaxStatusReducer';

const rootReducer = combineReducers({
    courses,
    authors,
    ajaxCallsInProgress
});

export default rootReducer;
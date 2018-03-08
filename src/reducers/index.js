import {combineReducers} from 'redux';
import courses from './courseReduser';

const rootReducer = combineReducers({
    courses
});

export default rootReducer;
import { combineReducers } from 'redux';
import errorsReducer from 'src/store/reducers/errorsReducer';
import postsReducer from 'src/store/reducers/postsReducer';
import scheduleReducer from 'src/store/reducers/scheduleReducer';

const rootReducer = combineReducers({
	errors: errorsReducer,
	posts: postsReducer,
	schedule: scheduleReducer
});

export default rootReducer;

import { combineReducers } from 'redux';
import errorsReducer from 'src/store/reducers/errorsReducer';
import postsReducer from 'src/store/reducers/postsReducer';

const rootReducer = combineReducers({
	errors: errorsReducer,
	newsfeed: postsReducer
});

export default rootReducer;

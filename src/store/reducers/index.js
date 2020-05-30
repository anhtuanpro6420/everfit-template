import { combineReducers } from 'redux';
import errorsReducer from 'src/store/reducers/errorsReducer';
import newsfeedReducer from 'src/store/reducers/newsfeedReducer';

const rootReducer = combineReducers({
	errors: errorsReducer,
	newsfeed: newsfeedReducer
});

export default rootReducer;

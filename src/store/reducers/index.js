import { combineReducers } from 'redux';
import errorsReducer from 'src/store/reducers/errorsReducer';
import scheduleReducer from 'src/store/reducers/scheduleReducer';

const rootReducer = combineReducers({
	errors: errorsReducer,
	schedule: scheduleReducer
});

export default rootReducer;

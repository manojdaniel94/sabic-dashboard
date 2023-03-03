import { combineReducers } from 'redux';
import CommonReducer from './CommonReducer';


const rootReducer = combineReducers({
    Common: CommonReducer,
});

export default rootReducer;
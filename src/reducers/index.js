import {combineReducers} from 'redux';
import {feed,visibilityFilter} from './feedReducer';

const rootReducer = combineReducers({
  feed, 
  visibilityFilter
})
export default rootReducer;
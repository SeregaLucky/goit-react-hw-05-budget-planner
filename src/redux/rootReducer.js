import { combineReducers } from 'redux';
import plannerReducers from './planner/plannerReducer';

export default combineReducers({
  planner: plannerReducers,
});

import { combineReducers } from 'redux';
import page from './page/reducer';
import user from './user/reducer';
import request from './request/reducer';
import response from './response/reducer';
import history from './history/reducer';

const rootReducer = combineReducers({
  page,
  user,
  request,
  response,
  history,
});

export default rootReducer;

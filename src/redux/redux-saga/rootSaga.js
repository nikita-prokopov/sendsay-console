import { takeEvery } from 'redux-saga/effects';
import logout from './sagas/logout';
import fetchRequestValue from './sagas/fetchRequestValue';
import authFromSession from './sagas/authFromSession';

export default function* rootSaga() {
  yield takeEvery('LOGOUT', logout);
  yield takeEvery('FETCH_REQUEST_VALUE', fetchRequestValue);
  yield takeEvery('AUTH_FROM_SESSION', authFromSession);
}

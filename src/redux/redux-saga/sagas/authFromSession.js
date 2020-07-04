import { put } from 'redux-saga/effects';
import { setPage } from '../../page/actions';
import { setUser } from '../../user/actions';
import { authFromSession as sendsayAuthFromSession } from '../../../services/sendsay';

export default function* authFromSession() {
  try {
    const user = yield sendsayAuthFromSession();
    yield put(setUser(user));
    yield put(setPage('console'));
  } catch {
    yield sessionStorage.clear();
    yield put(setPage('auth'));
  }
}

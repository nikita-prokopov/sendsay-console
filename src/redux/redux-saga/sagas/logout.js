import { put } from 'redux-saga/effects';
import { setPage } from '../../page/actions';
import { resetUser } from '../../user/actions';
import { resetResponse } from '../../response/actions';
import { resetRequest } from '../../request/actions';
import { clearHistory } from '../../history/actions';
import { logout as sendsayLogout } from '../../../services/sendsay';

export default function* logout() {
  yield put(setPage('auth'));
  yield put(resetUser());
  yield put(resetResponse());
  yield put(resetRequest());
  yield put(clearHistory());
  yield sessionStorage.clear();

  try {
    yield sendsayLogout();
  } catch {
    // Обработка ошибки
  }
}

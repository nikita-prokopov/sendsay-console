import { put } from 'redux-saga/effects';
import { v4 as uuidv4 } from 'uuid';
import { sendRequest } from '../../../services/sendsay';
import { formatJson } from '../../../services/sendsayFormatter';
import { isPlainObject, isValidJson } from '../../../services/validation';
import { setRequestLoading, setRequestInvalid, setRequestValue } from '../../request/actions';
import { setResponseValue, setResponseInvalid, setResponseValid } from '../../response/actions';
import { addItemToHistory } from '../../history/actions';
import { delayIfNeccesary } from '../../../services/delay';

export default function* fetchRequestValue({ value }) {
  if (!isValidJson(value)) {
    yield put(setRequestInvalid());
    return;
  }

  const requestObject = JSON.parse(value);

  if (!isPlainObject(requestObject) || !requestObject.action) {
    yield put(setRequestInvalid());
    return;
  }

  const formattedRequestJson = formatJson(value);
  yield put(setRequestValue(formattedRequestJson));

  yield put(setRequestLoading(true));

  try {
    const responseObject = yield delayIfNeccesary(600, sendRequest.bind(null, requestObject));
    const responseJson = JSON.stringify(responseObject);
    const formattedResponseJson = formatJson(responseJson);

    yield put(setResponseValue(formattedResponseJson));
    yield put(setResponseValid());

    const historyItem = {
      requestJson: formattedRequestJson,
      responseJson: formattedResponseJson,
      actionName: requestObject.action,
      isSuccess: true,
      id: uuidv4(),
    };

    yield put(addItemToHistory(historyItem));
  } catch (err) {
    const responseJson = JSON.stringify(err);
    const formattedResponseJson = formatJson(responseJson);

    yield put(setResponseValue(formattedResponseJson));
    yield put(setResponseInvalid());

    try {
      if (err.includes('fetch')) {
        return;
      }
    } catch {}

    const historyItem = {
      requestJson: formattedRequestJson,
      responseJson: formattedResponseJson,
      actionName: requestObject.action,
      isSuccess: false,
      id: uuidv4(),
    };

    yield put(addItemToHistory(historyItem));
  }

  yield put(setRequestLoading(false));
}

import SendsayApi from 'sendsay-api';

const sendsayApi = new SendsayApi();

export async function authorization({ login, password, sublogin }) {
  const options = {
    login,
    password,
  };

  if (sublogin) {
    sessionStorage.setItem('isLoggedWithSublogin', true);
    options.sublogin = sublogin;
  } else {
    sessionStorage.setItem('isLoggedWithSublogin', false);
  }

  try {
    await sendsayApi.login(options);
    saveSession();

    const user = await getUser();
    return user;
  } catch (err) {
    // throw new Error(handleError(err));
    // class MyCustomError extends Error {...}
    // instanceof MyCustomError
    throw handleError(err);
  }
}

export async function authFromSession() {
  setSession();

  const user = await getUser();
  return user;
}

export async function sendRequest(options) {
  try {
    return await sendsayApi.request(options);
  } catch (err) {
    throw handleError(err);
  }
}

export async function logout() {
  const options = {
    action: 'logout',
  };

  try {
    await sendsayApi.request(options);
  } catch (err) {
    throw handleError(err);
  }
}

function saveSession() {
  const { session } = sendsayApi;
  sessionStorage.setItem('sendsay_session', session);
}

function setSession() {
  const session = sessionStorage.getItem('sendsay_session');
  sendsayApi.setSession(session);
}

async function getUser() {
  const options = {
    action: 'pong',
  };

  try {
    const { account, sublogin } = await sendsayApi.request(options);

    const user = {
      login: account,
    };

    if (isLoggedWithSublogin()) {
      user.sublogin = sublogin;
    }

    return user;
  } catch (err) {
    throw handleError(err);
  }
}

function isLoggedWithSublogin() {
  const json = sessionStorage.getItem('isLoggedWithSublogin');
  return JSON.parse(json);
}

function handleError(err) {
  if (err.id && err.explain) {
    const str = `{id: "${err.id}", explain: "${err.explain}"}`;
    return str;
  }

  if (err.message && err.message.includes('fetch')) {
    return err.message;
  }

  return err;
}

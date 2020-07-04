export function fetchRequestValue(value) {
  return {
    type: 'FETCH_REQUEST_VALUE',
    value,
  };
}

export function logout() {
  return {
    type: 'LOGOUT',
  };
}

export function authFromSession() {
  return {
    type: 'AUTH_FROM_SESSION',
  };
}

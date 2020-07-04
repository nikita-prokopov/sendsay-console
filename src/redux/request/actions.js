export function formatRequestValue() {
  return {
    type: 'FORMAT_REQUEST_VALUE',
  };
}

export function setRequestValue(value) {
  return {
    type: 'SET_REQUEST_VALUE',
    value,
  };
}

export function setRequestInvalid() {
  return {
    type: 'SET_REQUEST_INVALID',
  };
}

export function setRequestValid() {
  return {
    type: 'SET_REQUEST_VALID',
  };
}

export function setRequestLoading(isLoading) {
  return {
    type: 'SET_REQUEST_LOADING',
    isLoading,
  };
}

export function resetRequest() {
  return {
    type: 'RESET_REQUEST',
  };
}

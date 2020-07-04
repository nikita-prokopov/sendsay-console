export function formatResponseValue() {
  return {
    type: 'FORMAT_RESPONSE_VALUE',
  };
}

export function setResponseValue(value) {
  return {
    type: 'SET_RESPONSE_VALUE',
    value,
  };
}

export function setResponseInvalid() {
  return {
    type: 'SET_RESPONSE_INVALID',
  };
}

export function setResponseValid() {
  return {
    type: 'SET_RESPONSE_VALID',
  };
}

export function resetResponse() {
  return {
    type: 'RESET_RESPONSE',
  };
}

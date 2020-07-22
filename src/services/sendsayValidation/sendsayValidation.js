/* eslint-disable no-useless-escape */
import { isContainCyrillic, isEmail, isStringEmpty } from '../validation';

const FORBIDDEN_SYMBOLS = /[!"#$%&'()\-*+\,.\/:;<=\]?@\[>\\^`{|}~]/;

// validator.js

// this validator fits better to LoginForm Feature
export const isLoginCorrect = login => {
  if (isStringEmpty(login) || isContainCyrillic(login)) {
    return false;
  }

  if (isEmail(login)) {
    return true;
  }

  if (login.match(FORBIDDEN_SYMBOLS)) {
    return false;
  }

  return true;
};

export const isSubloginCorrect = sublogin => {
  if (isContainCyrillic(sublogin) || sublogin.match(FORBIDDEN_SYMBOLS)) {
    return false;
  }

  return true;
};

export const isPasswordCorrect = password => {
  if (isStringEmpty(password) || isContainCyrillic(password)) {
    return false;
  }

  return true;
};

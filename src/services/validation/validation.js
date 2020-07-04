export { default as isEmail } from 'is-email';
export { default as isPlainObject } from 'is-plain-object';

export const isStringEmpty = string => {
  return string.length === 0;
};

export const isContainCyrillic = string => {
  const regExp = /[а-яА-Я]/;

  if (string.match(regExp)) {
    return true;
  }

  return false;
};

export const isValidJson = string => {
  try {
    JSON.parse(string);
  } catch {
    return false;
  }

  return true;
};

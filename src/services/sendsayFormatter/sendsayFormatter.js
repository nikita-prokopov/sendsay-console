/* eslint-disable import/prefer-default-export */
import { formatJson as formatterFormatJson } from '../formatter';

const SPACE = 4;

export const formatJson = json => {
  return formatterFormatJson(json, SPACE);
};

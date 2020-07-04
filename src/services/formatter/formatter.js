/* eslint-disable import/prefer-default-export */

export function formatJson(json, space = 4) {
  try {
    const el = JSON.parse(json);
    const formatted = JSON.stringify(el, null, space);

    return formatted;
  } catch {
    return null;
  }
}

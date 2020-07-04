/* eslint-disable import/prefer-default-export */

async function delay(ms) {
  return new Promise(resolve => {
    setTimeout(resolve, ms);
  });
}

export async function delayIfNeccesary(treshold, func, ...args) {
  const startTime = new Date();

  try {
    const result = await func(...args);
    const endTime = new Date();
    const functionExecutionTime = endTime - startTime;

    if (functionExecutionTime > treshold) {
      return result;
    }

    await delay(treshold - functionExecutionTime);
    return result;
  } catch (err) {
    const endTime = new Date();
    const functionExecutionTime = endTime - startTime;

    if (functionExecutionTime > treshold) {
      throw err;
    }

    await delay(treshold - functionExecutionTime);
    throw err;
  }
}

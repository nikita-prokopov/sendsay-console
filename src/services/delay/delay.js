/* eslint-disable no-unsafe-finally */
/* eslint-disable import/prefer-default-export */

async function delay(ms) {
  return new Promise(resolve => {
    setTimeout(resolve, ms);
  });
}

export async function delayIfNeccesary(treshold, func) {
  const startTime = new Date();

  let result;
  let error;

  try {
    result = await func();
  } catch (err) {
    error = err;
  } finally {
    const endTime = new Date();
    const functionExecutionTime = endTime - startTime;

    if (functionExecutionTime > treshold) {
      if (error) {
        throw error;
      }

      return result;
    }

    await delay(treshold - functionExecutionTime);

    if (error) {
      throw error;
    }

    return result;
  }
}

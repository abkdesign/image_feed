export const isDevelopment = process.env.NODE_ENV !== 'production' && typeof window === 'object';
export const stringToArray = str => devider=>str.split(devider);

/**
 * Remove empty values and duplicates from a comma separated string
 * @param {string} value - comma separated value to clean
 * @returns {string} cleaned comma separated value
 */
export const cleanCSV = (value) => {
  return (value || '').split(' ').filter(Boolean).filter(function(item, index, all) {
      return (index === all.indexOf(item));
  });
}

export const throttle = (callback, delay) => {
  let throttleTimeout = null;
  let storedEvent = null;

  const throttledEventHandler = event => {
    storedEvent = event;

    const shouldHandleEvent = !throttleTimeout;

    if (shouldHandleEvent) {
      callback(storedEvent);

      storedEvent = null;

      throttleTimeout = setTimeout(() => {
        throttleTimeout = null;

        if (storedEvent) {
          throttledEventHandler(storedEvent);
        }
      }, delay);
    }
  };

  return throttledEventHandler;
};
/*
 * Format the params of a url and return it as an object
 */
function getAllUrlParams(url) {
  // get query string from url (optional) or window
  const queryString = url && url.split('?')[1];

  // if not params in the url, so return
  if (!queryString || queryString === '') return {};

  // we'll store the parameters here
  const obj = {};

  // stuff after # is not part of query string, so get rid of it
  const query = queryString.split('#')[0];

  // split our query string into its component parts
  const arr = query.split('&');

  for (let i = 0; i < arr.length; i += 1) {
    // separate the keys and the values
    const a = arr[i].split('=');

    // set parameter name and value (use 'true' if empty)
    const paramName = a[0];
    const paramValue = typeof a[1] === 'undefined' ? true : a[1];

    if (!obj[paramName]) {
      // if it doesn't exist, create property
      obj[paramName] = paramValue;
    } else if (obj[paramName] && typeof obj[paramName] === 'string') {
      // if property does exist and it's a string, convert it to an array
      obj[paramName] = [obj[paramName]];
      obj[paramName].push(paramValue);
    } else {
      // otherwise add the property
      obj[paramName].push(paramValue);
    }
  }

  return obj;
}

export default getAllUrlParams;

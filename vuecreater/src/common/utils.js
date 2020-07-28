


export function isObject (obj) {
  return obj && typeof obj === 'object';
}

export function isArray (arr) {
  return arr instanceof Array;
}

export function isString (str) {
  return typeof str === 'string';
}


function strIsJson(str) {
  return str.indexOf('[') == 0 || str.indexOf('{') == 0
}

export function ifValueIsJsonStr2Json(obj) {
  if (isString(obj)) {
    return strIsJson(obj) ? ifValueIsJsonStr2Json(JSON.parse(obj)) : obj;
  } else if (isArray(obj)) {
    obj.forEach((item, index) => {
      obj[index] = ifValueIsJsonStr2Json(item)
    })
  } else if (isObject(obj)) {
    let keys = Object.keys(obj);
    keys.forEach(key => {
      obj[key] = ifValueIsJsonStr2Json(obj[key])
    })
  }
  return obj
}
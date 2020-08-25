/*########################################
TYPE CHECK
######################################## */
// Returns if a value is an array
export function isArray (value) {
  return value && typeof value === 'object' && value.constructor === Array ? true : undefined ;
}

// Returns if a value is a boolean
export function isBoolean (value) {
  return typeof value === 'boolean' ? true : undefined ;
}

// Returns if a value is an object
export function isObject (value) {
  return value && typeof value === 'object' && value.constructor === Object ? true : undefined ;
}
// Returns if a value is a string
export function isString (value) {
  return value && typeof value === 'string' && value.constructor === String ? true : undefined ;
}

/**
 * @module global
*/

/**
 * Get the raw type string of a value, e.g., [object Object].
 */
const _toString = Object.prototype.toString;

/**
 * Return the params raw type
 * @param {Any} params  any
 * @return {String} [object, ***]
 *
 * @example
 *  getRawType(new Array())         // => [object Array]
 *  getRawType(new Object())        // => [object Object]
 *  getRawType(new Date())          // => [object Date]
 *  getRawType(new RegExp())        // => [object RegExp]
 *  getRawType(null)                // => [object Null]
 *  getRawType(undefined)           // => [object Undefined]
 *
*/
const getRawType = function (params) {
    return _toString.call(params)
};

export default {
    getRawType
}

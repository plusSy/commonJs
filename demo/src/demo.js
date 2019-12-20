/**
 * @file dom.js
 * @module dom
 */

/**
 * 检查字符串是否没有空格
 *
 * @param {string} str
 *        The string to check
 *
 * @return {boolean}
 *         - True if the string is non-blank
 *         - False otherwise
 *
 */
function isNonBlankString(str) {
    return typeof str === 'string' && /\S/.test(str);
}

/**
 * 如果字符串有空格则抛出错误。用于让类方法和classList API 保持一致
 *
 * @param {string} str
 *         The string to check for whitespace.
 *
 * @throws {Error}
 *         Throws an error if there is whitespace in the string.
 *
 */
function throwIfWhitespace(str) {
    if (/\s/.test(str)) {
        throw new Error('class has illegal whitespace characters');
    }
}

/**
 * 生成匹配元素className的正则表达式
 *
 * @param {string} className
 *         The className to generate the RegExp for.
 *
 * @return {RegExp}
 *         The RegExp that will check for a specific `className` in an elements
 *         className.
 */
function classRegExp(className) {
    return new RegExp('(^|\\s)' + className + '($|\\s)');
}


export default {
    isNonBlankString,
    throwIfWhitespace,
    classRegExp
}

/**
 * 过滤器
 * @alias $_.fillzero
 * @param {string | number} num 传入的参数
 * @return { string | number } 返回参数
 * @example
 *  fillzero(1)
 *  //=> "01"
 *
 *  fillzero(11)
 *  // => 11
*/
const fillzero = num => {
    return num < 10 ? '0' + num : num;
}

export default {
    fillzero
}

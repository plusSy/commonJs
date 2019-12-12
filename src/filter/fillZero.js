/**
 * @module filter
 * @description 小于10的数字 补零
 * @param {number} num - 传入的参数
 * @return {string} - 补零后的值
*/
const fillZero = function (num) {
  return num < 10 ? "0" + num : num;
}

export default fillZero;
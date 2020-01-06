/**
 * @description 位运算符
 *  Javascript 完全套用了 Java 的位运算符，包括按位与&、按位或|、按位异或^、按位非~、左移<<、带符号的右移>>和用0补足的右移>>>。这套运算符针对的是整数，所以对 JavaScript 完全无用，因为 JavaScript 内部，所有数字都保存为双精度浮点数。如果使用它们的话，JavaScript 不得不将运算数先转为整数，然后再进行运算，这样就降低了速度。而且"按位与运算符"&同"逻辑与运算符"&&，很容易混淆。
 * @module BitwiseOperands
*/

/**
 * << 使用左移运算符可以迅速得出2的次方
 * @example
 *  1 << 2 // => 1 * 2 *2 = 4
 *  3 << 2 // => 3 * 2 * 2 = 12
*/
const square = '<<';

export default {
    square
}

/**
 * @module valid
 * @description 校验规则
*/

const valid = {
  /* 证件号码验证 */
  IDCard: /(^\d{15}$)|(^\d{18}$)|(^\d{17}(\d|X|x)$)/g,

  /* 数字验证 */
  Number: /^[0-9]*$/g,

  /* 6位数验证码验证 */
  VerificationCode: /^\d{6}$/g,

  /* 手机号码或者电话号码验证 */
  // MobilePhoneNumber: /^1[3|5|7|8]\d{9}$/,
  MobilePhoneNumber: /^(\+)?(\d{2,3})?1\d{10}$/,

  TelPhoneNumber: /^0\d{2,3}-?\d{7,8}$/,

  /* 网址地址验证 */
  Www: /\b(([\w-]+:\/\/?|www[.])[^\s()<>]+(?:[\w\d]+|([^[:punct:]\s]|\/)))/,

  /* 邮箱地址输入验证 */
  Email: /^[A-Za-z\d]+([-_.][A-Za-z\d]+)*@([A-Za-z\d]+[-.])+[A-Za-z\d]{2,4}$/,

  /* 统一社会信用代码验证 */
  CreditCode: /^[^_IOZSVa-z\W]{2}\d{6}[^_IOZSVa-z\W]{10}$/g,

  /* 统一社会信用代码验证 */
  Fax: /^(\d{3,4}-)?\d{7,8}$/,

  /* 中文、英文、数字 */
  ChEnNumber: /^[a-zA-Z0-9\u4e00-\u9fa5]+$/g,

  // 正整数
  positiveInteger: /^\+?[1-9]\d*$/g,

  // 邮编
  PostalCode: /^[a-zA-Z0-9 ]{3,12}$/
};

export default valid;

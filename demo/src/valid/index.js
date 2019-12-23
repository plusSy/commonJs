/**
 * @file valid
 * @module valid
*/
/**
 * @description 证件号码验证
 * @example
 *  const IDCard = /(^\d{15}$)|(^\d{18}$)|(^\d{17}(\d|X|x)$)/g;
 *  const reg = new RegExp(IDCard);
 *  reg.test(123456)
 *  //=> false
 *
 *  reg.test(188888188808088888)
 *  //=> true
*/
const IDCard = /(^\d{15}$)|(^\d{18}$)|(^\d{17}(\d|X|x)$)/g;

/**
 * @description 数字验证
 * @example
 *  const Number = /^[0-9]*$/g;
 *  const reg = new RegExp(Number);
 *  reg.test('非数字')
 *  //=> false
 *
 *  reg.test(1234)
 *  //=> true
*/
const Number = /^[0-9]*$/g;

/**
 * @description 6位数验证码验证
 * @example
 *  const VerificationCode = /^\d{6}$/g;
 *  const reg = new RegExp(VerificationCode);
 *  reg.test('123456')
 *  //=> false
 *
 *  reg.test(865485)
 *  //=> true
*/
const VerificationCode = /^\d{6}$/g;

/**
 * @description 手机号码验证
 * @example
 *  const MobilePhoneNumber = /^(\+)?(\d{2,3})?1\d{10}$/;
 *  const reg = new RegExp(MobilePhoneNumber);
 *  reg.test(+8616688886666)
 *  //=> true
 *
 *  reg.test(16688886666)
 *  //=> true
 *
 *  reg.test(+16688886666)
 *  //=> false
*/
// MobilePhoneNumber: /^1[3|5|7|8]\d{9}$/,
const MobilePhoneNumber = /^(\+)?(\d{2,3})?1\d{10}$/;

/**
 * @description 电话号码验证
 * @example
 *  const TelPhoneNumber = /^0\d{2,3}-?\d{7,8}$/;
 *  const reg = new RegExp(TelPhoneNumber);
 *  reg.test(021-51119900)
 *  //=> true
 *
 *  reg.test(02151119900)
 *  //=> true
 *
 *  reg.test(16688886666)
 *  //=> false
*/
const TelPhoneNumber = /^0\d{2,3}-?\d{7,8}$/;

/**
 * @description 网址地址验证
 * @example
 *  const Www = /\b(([\w-]+:\/\/?|www[.])[^\s()<>]+(?:[\w\d]+|([^[:punct:]\s]|\/)))/;
 *  const reg = new RegExp(Www);
 *  reg.test('www.ocj.com.cn)'
 *  //=> true
*/
const Www = /\b(([\w-]+:\/\/?|www[.])[^\s()<>]+(?:[\w\d]+|([^[:punct:]\s]|\/)))/;

/**
 * @description 邮箱地址输入验证
 * @example
 *  const Email = /^[A-Za-z\d]+([-_.][A-Za-z\d]+)*@([A-Za-z\d]+[-.])+[A-Za-z\d]{2,4}$/;
 *  const reg = new RegExp(Email);
 *  reg.test('ocj.com@opg.cn')
 *  //=> true
*/
const Email = /^[A-Za-z\d]+([-_.][A-Za-z\d]+)*@([A-Za-z\d]+[-.])+[A-Za-z\d]{2,4}$/;

/**
 * @description 统一社会信用代码验证
 * @example
 *  const CreditCode = /^[^_IOZSVa-z\W]{2}\d{6}[^_IOZSVa-z\W]{10}$/g;
 *  const reg = new RegExp(CreditCode);
 *  reg.test('310000400369272')
 *  //=> true
*/
const CreditCode = /^[^_IOZSVa-z\W]{2}\d{6}[^_IOZSVa-z\W]{10}$/g;

/**
 * @description 传真验证
 * @example
 *  const Fax = /^(\d{3,4}-)?\d{7,8}$/;
 *  const reg = new RegExp(Fax);
 *  reg.test(021-51119900)
 *  //=> true
*/
const Fax = /^(\d{3,4}-)?\d{7,8}$/;

/**
 * @description 中文、英文、数字 混合正则
 * @example
 *  const ChEnNumber = /^[a-zA-Z0-9\u4e00-\u9fa5]+$/g;
 *  const reg = new RegExp(ChEnNumber);
 *  reg.test('你好 word 123')
 *  //=> false
 *
 *  reg.test('你好word123')
 *  //=> true
*/
const ChEnNumber = /^[a-zA-Z0-9\u4e00-\u9fa5]+$/g;

/**
 * @description 正整数 正则
 * @example
 *  const positiveInteger = /^\+?[1-9]\d*$/g;
 *  const reg = new RegExp(positiveInteger);
 *  reg.test(-123)
 *  //=> false
 *
 *  reg.test(123)
 *  //=> true
*/
const positiveInteger = /^\+?[1-9]\d*$/g;

/**
 * @description 邮编 正则
 * @example
 *  const PostalCode = /^[a-zA-Z0-9 ]{3,12}$/;
 *  const reg = new RegExp(PostalCode);
 *  reg.test(200000)
 *  //=> true
*/
const PostalCode = /^[a-zA-Z0-9 ]{3,12}$/;

  export default {
    IDCard,
    Number,
    VerificationCode,
    MobilePhoneNumber,
    TelPhoneNumber,
    Www,
    Email,
    CreditCode,
    Fax,
    ChEnNumber,
    positiveInteger,
    PostalCode
  };

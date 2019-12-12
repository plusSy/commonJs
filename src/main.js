import foo from './foo.js';
import version from './version';
import { fillZero } from './filter/index';
import valid from './valid';

export default  {
  foo,
  version,
  fillZero,
  valid
}

/**
 * Tree-shaking
*/
export {
  version,
  fillZero,
  valid
}
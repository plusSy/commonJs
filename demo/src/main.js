
import nameSpace from './nameSpace';
import filter from './filter/index';
import valid from './valid/index';
import version from './version';
import bitwise from './bitwise/operands';

export default {
    version,
    ...valid,
    nameSpace,
    filter,
    bitwise
}

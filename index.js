import Objects from './src/main/Objects.js';
import Strings from './src/main/Strings.js';
import Arrays from './src/main/Arrays.js';
import Seq from './src/main/Seq.js';
import Reader from './src/main/Reader.js'


const jsprelude = { Objects, Strings, Arrays, Seq, Reader };

export default jsprelude;

if (typeof define === 'function' && define.amd) {
    define(() => jsprelude);
}

if (typeof exports === 'object' && typeof module !== 'undefined') {
    module.exports = jsprelude;
}

if (typeof window === 'object' && window) {
    window.jsprelude = jsprelude;
}

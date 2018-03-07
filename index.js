'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

function _interopDefault (ex) { return (ex && (typeof ex === 'object') && 'default' in ex) ? ex['default'] : ex; }

var IPFS = _interopDefault(require('ipfs-api'));

const twelveHours = 43200000;
var index = ((published, { ipfs, time, once }, cb) => {
  if (!ipfs) {
    ipfs = new IPFS();
  }
  const aliveTimeout = () => {
    setTimeout(async () => {
      published = await ipfs.name.resolve(published['name'] || published);
      published = await ipfs.name.publish(published);
      if (cb) {
        cb(null, published);
      }
      if (!once) {
        return aliveTimeout();
      }
    }, time || twelveHours);
  };
  aliveTimeout();
});

exports.twelveHours = twelveHours;
exports['default'] = index;
//# sourceMappingURL=index.js.map

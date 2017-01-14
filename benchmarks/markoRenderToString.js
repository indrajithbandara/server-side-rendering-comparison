'use strict';

const MarkoApp = require('marko').load(require.resolve('../assets/src/app/index.marko'));

const appProps = {
  listData: require('../mock/list'),
  bannerData: require('../mock/banner')
};

console.time('marko');
for (var i = 0; i < 100; i++) {
  MarkoApp.renderToString(appProps);
}
console.timeEnd('marko');
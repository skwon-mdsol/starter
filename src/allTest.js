import 'babel-polyfill';

const testsContext = require.context('.', true, /\.test$/);
testsContext.keys().forEach(testsContext);
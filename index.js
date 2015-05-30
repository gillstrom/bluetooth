'use strict';

if (process.platform === 'darwin') {
	module.exports = require('osx-bluetooth');
} else {
	throw new Error('Only OS X systems are supported');
}

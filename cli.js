#!/usr/bin/env node
'use strict';
var meow = require('meow');
var bluetooth = require('./');

var cli = meow({
	help: [
		'Example',
		'  $ bluetooth',
		'  $ bluetooth on',
		'  $ bluetooth off'
	].join('\n')
});

if (!cli.input.length) {
	bluetooth.get(function (err, state) {
		if (err) {
			console.error(err.message);
			process.exit(1);
		}

		console.log('Bluetooth is ' + (state === 1 ? 'on' : 'off'));
	});

	return;
}

if (cli.input[0] !==  'on' && cli.input[0] !== 'off') {
	console.log(cli.help);
	return;
}

bluetooth.set(cli.input[0] === 'on' ? 1 : 0, function (err) {
	if (err) {
		console.error(err.message);
		process.exit(1);
	}

	console.log('Bluetooth state set to %s', cli.input[0])
});

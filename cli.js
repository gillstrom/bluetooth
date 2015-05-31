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
	bluetooth.isOn(function (err, state) {
		if (err) {
			console.error(err.message);
			process.exit(3);
		}

		console.log('Bluetooth is ' + (state ? 'on' : 'off'));
		process.exit(state ? 0 : 1);
	});

	return;
}

if (cli.input[0] !== 'on' && cli.input[0] !== 'off') {
	console.log(cli.help);
	return;
}

bluetooth.toggle(cli.input[0] === 'on' ? true : false, function (err) {
	if (err) {
		console.error(err.message);
		process.exit(3);
	}

	console.log('Bluetooth state set to %s', cli.input[0]);
});

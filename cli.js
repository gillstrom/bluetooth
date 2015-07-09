#!/usr/bin/env node
'use strict';
var logSymbols = require('log-symbols');
var meow = require('meow');
var bluetooth = require('./');

var cli = meow({
	help: [
		'Example',
		'  $ bluetooth',
		'  $ bluetooth on',
		'  $ bluetooth off'
	]
});

if (!cli.input.length) {
	bluetooth.isOn(function (err, state) {
		if (err) {
			console.error(err.message);
			process.exit(3);
		}

		console.log(state ? logSymbols.success + ' On' : logSymbols.error + ' Off');
		process.exit(state ? 0 : 1);
	});

	return;
}

if (cli.input[0] !== 'on' && cli.input[0] !== 'off') {
	console.log('Set bluetooth state to either `on` or `off`');
	process.exit(3);
}

var state = cli.input[0] === 'on' ? true : false;

bluetooth.toggle(state, function (err) {
	if (err) {
		console.error(err.message);
		process.exit(3);
	}

	console.log(state ? logSymbols.success + ' On' : logSymbols.error + ' Off');
	process.exit(state ? 0 : 1);
});

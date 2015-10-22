'use strict';
var test = require('ava');
var bluetooth = require('./');

if (!process.env.CI) {
	test('isOn', function (t) {
		t.plan(1);

		bluetooth.isOn().then(function (res) {
			t.assert(typeof res === 'boolean');
		});
	});

	test('set state to 0', function (t) {
		t.plan(1);

		bluetooth.off().then(function () {
			bluetooth.isOn().then(function (res) {
				t.assert(res === false);
			});
		});
	});
}

'use strict';
var test = require('ava');
var bluetooth = require('./');

if (!process.env.CI) {
	test('isOn', function (t) {
		t.plan(2);

		bluetooth.isOn(function (err, res) {
			t.assert(!err, err);
			t.assert(typeof res === 'boolean');
		});
	});

	test('set state to 0', function (t) {
		t.plan(3);

		bluetooth.off(function (err) {
			t.assert(!err, err);

			bluetooth.isOn(function (err, res) {
				t.assert(!err, err);
				t.assert(res === false);
			});
		});
	});
}

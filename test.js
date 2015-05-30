'use strict';
var test = require('ava');
var bluetooth = require('./');

if (!process.env.CI) {
	test('get state', function (t) {
		t.plan(2);

		bluetooth.get(function (err, state) {
			t.assert(!err, err);
			t.assert(typeof state === 'number');
		});
	});

	test('set state to 0', function (t) {
		t.plan(3);

		bluetooth.set(0, function (err) {
			t.assert(!err, err);

			bluetooth.get(function (err, state) {
				t.assert(!err, err);
				t.assert(state === 0);
			});
		});
	});
}

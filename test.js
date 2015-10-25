import test from 'ava';
import bluetooth from './';

if (!process.env.CI) {
	test('isOn', async t => {
		t.is(typeof await bluetooth.isOn(), 'boolean');
	});

	test('set state to 0', async t => {
		await bluetooth.off();
		t.false(await bluetooth.isOn());
	});
}

# bluetooth [![Build Status](https://travis-ci.org/gillstrom/bluetooth.svg?branch=master)](https://travis-ci.org/gillstrom/bluetooth)

> Get or set Bluetooth state.

*Currently OS X systems only*


## Install

```
$ npm install --save bluetooth
```


## Usage

```js
var bluetooth = require('bluetooth');

bluetooth.isOn(function (err, state) {
	console.log(state);
	//=> false
});

bluetooth.on(function (err) {
	console.log('Bluetooth state changed to on');
});

bluetooth.off(function (err) {
	console.log('Bluetooth state changed to off');
});

bluetooth.toggle(function (err) {
	console.log('Bluetooth state changed to on');
});
```


## CLI

```
$ npm install --global bluetooth
```

```
$ bluetooth --help

  Example
    $ bluetooth
    $ bluetooth on
    $ bluetooth off
```


## API

### .isOn(callback)

Check if bluetooth is on or off.

### .on(callback)

Turn bluetooth on.

### .off(callback)

Turn bluetooth off.

### .toggle([force], callback)

Toggle the bluetooth state.

#### force

Type: `boolean`

Force a state when toggling.


## License

MIT © [Andreas Gillström](http://github.com/gillstrom)

# bluetooth [![Build Status](https://travis-ci.org/gillstrom/bluetooth.svg?branch=master)](https://travis-ci.org/gillstrom/bluetooth)

> Get or set Bluetooth state

*Currently OS X only*


## Install

```
$ npm install --save bluetooth
```


## Usage

```js
var bluetooth = require('bluetooth');

bluetooth.get(function (err, state) {
	console.log(state);
	//=> 0
});

bluetooth.set(1, function (err) {
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


## License

MIT © [Andreas Gillström](http://github.com/gillstrom)

'use strict';
var osxBluetooth = require('osx-bluetooth');

exports.on = osxBluetooth.on;
exports.off = osxBluetooth.off;
exports.toggle = osxBluetooth.toggle;
exports.isOn = osxBluetooth.isOn;

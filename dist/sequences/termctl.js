"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.setCursor = exports.switchToNormal = exports.switchToAlternate = exports.clearScreen = void 0;
var clearScreen = { str: 'c' };
exports.clearScreen = clearScreen;
var switchToAlternate = { csi: true, str: '?1049h' };
exports.switchToAlternate = switchToAlternate;
var switchToNormal = { csi: true, str: '?1047l' };
exports.switchToNormal = switchToNormal;
var setCursor = function (x, y) { return ({ csi: true, str: x + ";" + y + "G" }); };
exports.setCursor = setCursor;

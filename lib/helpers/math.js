"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Math = void 0;
class Math {
    add(numA, numB) {
        return numA + numB;
    }
    subtract(numA, numB) {
        return numA - numB;
    }
    multiply(numA, numB) {
        return numA * numB;
    }
    divide(numA, numB) {
        return numA / numB;
    }
    multiplyDouble(numA) {
        return numA * numA;
    }
    square(numA) {
        return numA * numA;
    }
}
exports.Math = Math;
exports.default = new Math();

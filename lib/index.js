"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
/* eslint-disable no-useless-catch */
const porter_1 = __importDefault(require("./porter"));
const porter = new porter_1.default();
class Delivery {
    constructor() {
        this.AllDelivery = (provider, providerData) => __awaiter(this, void 0, void 0, function* () {
            try {
                let func = providerData === null || providerData === void 0 ? void 0 : providerData.functionName;
                if (provider === "porter") {
                    // If provider is Porter then dynamically calls it's function
                    if (typeof porter[func] === "function") {
                        return yield porter[func](providerData);
                    }
                    else {
                        return {
                            message: `Function ${func} does not exist in Porter`
                        };
                    }
                }
                else {
                    return {
                        message: `Provider is not present`
                    };
                }
            }
            catch (error) {
                console.log(error);
                throw error;
            }
        });
        // Nothing to be done here
    }
}
exports.default = Delivery;

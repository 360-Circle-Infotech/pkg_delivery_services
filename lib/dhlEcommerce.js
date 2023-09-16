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
const axios_1 = __importDefault(require("axios"));
class DHLEcommerce {
    constructor() {
        this.generateToken = (data) => __awaiter(this, void 0, void 0, function* () {
            try {
                const url = 'https://apigateway-sandbox.bluedart.com/in/transportation/token/v1/login';
                const response = yield axios_1.default.get(url, {
                    headers: {
                        ClientID: data.apiKey,
                        clientSecret: data.apiSecret
                    }
                });
                return response.data.JWTToken;
            }
            catch (error) {
                throw new Error(error);
            }
        });
        this.registerPickup = (data) => __awaiter(this, void 0, void 0, function* () {
            try {
            }
            catch (error) {
                if (error.response) {
                    throw new Error(JSON.stringify(error.response.data));
                }
                else if (error.request) {
                    throw new Error(JSON.stringify(error.message));
                }
                else {
                    throw new Error(JSON.stringify(error.message));
                }
            }
        });
    }
}
exports.default = DHLEcommerce;

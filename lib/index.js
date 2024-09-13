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
        this.verifyCredentials = (provider, providerData) => __awaiter(this, void 0, void 0, function* () {
            try {
                if (provider == 'porter') {
                    const data = yield porter.verifyCredentials({
                        "key": providerData.apiKey, "data": {
                            "pickup_details": {
                                "lat": 12.935025018880504,
                                "lng": 77.6092605236106
                            },
                            "drop_details": {
                                "lat": 12.947146336879577,
                                "lng": 77.62102993895199
                            },
                            "customer": {
                                "name": "salik",
                                "mobile": {
                                    "country_code": "+91",
                                    "number": "7678139714"
                                }
                            }
                        }
                    });
                    return data;
                }
            }
            catch (error) {
                throw error;
            }
        });
        this.getQuote = (providerData) => __awaiter(this, void 0, void 0, function* () {
            try {
                const data = yield porter.getQuote(providerData);
                return data;
            }
            catch (error) {
                throw error;
            }
        });
        // porter API's
        this.createOrder = (providerData) => __awaiter(this, void 0, void 0, function* () {
            try {
                const data = yield porter.createOrder(providerData);
                return data;
            }
            catch (error) {
                throw error;
            }
        });
        // initiate flow
        this.initiateFlow = (providerData) => __awaiter(this, void 0, void 0, function* () {
            try {
                const data = yield porter.initiate_flow(providerData);
                return data;
            }
            catch (error) {
                throw error;
            }
        });
        // track order
        this.trackOrder = (providerData) => __awaiter(this, void 0, void 0, function* () {
            try {
                const data = yield porter.trackOrder(providerData);
                return data;
            }
            catch (error) {
                throw error;
            }
        });
        // cancel order
        this.cancelOrder = (providerData) => __awaiter(this, void 0, void 0, function* () {
            try {
                const data = yield porter.cancelOrder(providerData);
                return data;
            }
            catch (error) {
                throw error;
            }
        });
        // Nothing to be done here
    }
}
exports.default = Delivery;

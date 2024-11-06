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
// @ts-ignore
const axios_1 = __importDefault(require("axios"));
class PORTER {
    constructor() {
        this.apiUrl = 'https://pfe-apigw-uat.porter.in';
        // do nothing
    }
    generateRequestId() {
        return 'Qafto-' + Date.now().toString(36) + Math.random().toString(36).substr(2);
    }
    sendRequest(method, url, data) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                // console.log(data, method, url, "Here is all the data");
                const response = yield (0, axios_1.default)({
                    headers: {
                        'x-api-key': data === null || data === void 0 ? void 0 : data.key,
                        'Content-Type': 'application/json'
                    },
                    method,
                    url: `${this.apiUrl}${url}`,
                    data: data === null || data === void 0 ? void 0 : data.data,
                });
                console.log("response", response);
                return response;
            }
            catch (error) {
                console.error("An error occurred:", error);
                throw (error === null || error === void 0 ? void 0 : error.response) || (error === null || error === void 0 ? void 0 : error.message) || error;
            }
        });
    }
    ;
    verifyCredentials(providerData) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                let orderRequest = {
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
                };
                // Send request using POST method
                const data = yield this.sendRequest('POST', '/v1/get_quote', { key: providerData === null || providerData === void 0 ? void 0 : providerData.key, data: orderRequest });
                console.log("Here comes true", data);
                return (data === null || data === void 0 ? void 0 : data.status) === 200;
            }
            catch (error) {
                console.error("Error verifying credentials:", error);
                if (error === null || error === void 0 ? void 0 : error.data) {
                    return false;
                }
                else
                    throw error;
            }
        });
    }
    getQuote(providerData) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const data = yield this.sendRequest('POST', '/v1/get_quote', providerData);
                if ((data === null || data === void 0 ? void 0 : data.status) === 200) {
                    return data === null || data === void 0 ? void 0 : data.data;
                }
                return {
                    status: data === null || data === void 0 ? void 0 : data.status,
                    message: "Failed to fetch estimate"
                };
            }
            catch (error) {
                console.error('Error Quoting order ', error);
                throw error;
            }
        });
    }
    ;
    createOrder(providerData) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                providerData.data.request_id = this.generateRequestId();
                this.validateOrderRequest(providerData.data);
                const data = yield this.sendRequest('POST', '/v1/orders/create', providerData);
                console.log(data);
                if ((data === null || data === void 0 ? void 0 : data.status) === 200 || (data === null || data === void 0 ? void 0 : data.status) === 201) {
                    return data === null || data === void 0 ? void 0 : data.data;
                }
                return {
                    status: data === null || data === void 0 ? void 0 : data.status,
                    message: "Failed to create"
                };
            }
            catch (error) {
                console.error('Error creating order:', error);
                throw error;
            }
        });
    }
    ;
    validateOrderRequest(data) {
        if (!data.request_id || typeof data.request_id !== 'string') {
            throw new Error('Invalid order request: requestId is required and must be a string.');
        }
    }
    ;
    initiate_flow(providerData) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const data = yield this.sendRequest('POST', '/v1/simulation/initiate_order_flow', providerData);
                console.log(data);
                if ((data === null || data === void 0 ? void 0 : data.status) === 200) {
                    return data === null || data === void 0 ? void 0 : data.data;
                }
                return {
                    status: data === null || data === void 0 ? void 0 : data.status,
                    message: "Failed initiate_flow"
                };
            }
            catch (error) {
                throw error;
            }
        });
    }
    ;
    trackOrder(providerData) {
        return __awaiter(this, void 0, void 0, function* () {
            var _a;
            try {
                let orderId = (_a = providerData === null || providerData === void 0 ? void 0 : providerData.data) === null || _a === void 0 ? void 0 : _a.orderId;
                const data = yield this.sendRequest('GET', `/v1.1/orders/${orderId}`, providerData);
                console.log(data);
                if ((data === null || data === void 0 ? void 0 : data.status) === 200) {
                    return data === null || data === void 0 ? void 0 : data.data;
                }
                return {
                    status: data === null || data === void 0 ? void 0 : data.status,
                    message: "Can't Track"
                };
            }
            catch (error) {
                throw error;
            }
        });
    }
    ;
    cancelOrder(providerData) {
        return __awaiter(this, void 0, void 0, function* () {
            var _a;
            try {
                let orderId = (_a = providerData === null || providerData === void 0 ? void 0 : providerData.data) === null || _a === void 0 ? void 0 : _a.orderId;
                const data = yield this.sendRequest('POST', `/v1/orders/${orderId}/cancel`, providerData);
                console.log(data);
                if ((data === null || data === void 0 ? void 0 : data.status) === 200) {
                    return data === null || data === void 0 ? void 0 : data.data;
                }
                return {
                    status: data === null || data === void 0 ? void 0 : data.status,
                    message: "Can't Cancel"
                };
            }
            catch (error) {
                throw error;
            }
        });
    }
    ;
}
exports.default = PORTER;

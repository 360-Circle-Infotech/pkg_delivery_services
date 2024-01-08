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
const axios_1 = __importDefault(require("axios"));
class PORTER {
    constructor() {
        this.apiUrl = 'https://pfe-apigw-uat.porter.in/';
        // do nothing
    }
    generateRequestId() {
        return 'Qafto-' + Date.now().toString(36) + Math.random().toString(36).substr(2);
    }
    sendRequest(method, url, data) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const response = yield (0, axios_1.default)({
                    headers: {
                        'x-api-key': '09470b91-a545-4097-82f2-8ce398bad705',
                    },
                    method,
                    url: `${this.apiUrl}${url}`,
                    data,
                });
                return response.data;
            }
            catch (error) {
                throw error.response || error.message || error;
            }
        });
    }
    createOrder(orderRequest) {
        return __awaiter(this, void 0, void 0, function* () {
            orderRequest.request_id = this.generateRequestId();
            this.validateOrderRequest(orderRequest);
            try {
                const data = yield this.sendRequest('post', 'v1/orders/create', orderRequest);
                return data;
            }
            catch (error) {
                console.error('Error creating order:', error);
                throw error;
            }
        });
    }
    validateOrderRequest(orderRequest) {
        if (!orderRequest.request_id || typeof orderRequest.request_id !== 'string') {
            throw new Error('Invalid order request: requestId is required and must be a string.');
        }
        // Add more validation logic as needed for other properties
    }
    initiate_flow(orderRequest) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const data = yield this.sendRequest('post', '/v1/simulation/initiate_order_flow', orderRequest);
                return data;
            }
            catch (error) {
                throw error;
            }
        });
    }
    trackOrder(orderRequest) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const data = yield this.sendRequest('get', `/v1.1/orders/${orderRequest}`);
                return data;
            }
            catch (error) {
                throw error;
            }
        });
    }
    cancelOrder(orderRequest) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const data = yield this.sendRequest('post', `/v1/orders/${orderRequest}/cancel`);
                return data;
            }
            catch (error) {
                throw error;
            }
        });
    }
}
exports.default = PORTER;

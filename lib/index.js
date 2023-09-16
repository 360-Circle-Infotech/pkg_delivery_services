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
const fedex_1 = __importDefault(require("./fedex"));
const dhl_1 = __importDefault(require("./dhl"));
const fedex = new fedex_1.default();
const dhl = new dhl_1.default();
class Delivery {
    constructor() {
        this.createShipment = (provider, providerData) => __awaiter(this, void 0, void 0, function* () {
            try {
                if (provider == 'Fedex') {
                    const data = yield fedex.createShipment(providerData);
                    return data;
                }
                else if (provider == 'DHL') {
                    const data = yield dhl.createShipment(providerData);
                    return data;
                }
            }
            catch (error) {
                throw error;
            }
        });
        this.cancelShipment = (provider, providerData) => __awaiter(this, void 0, void 0, function* () {
            try {
                if (provider == 'Fedex') {
                    const data = yield fedex.cancelShipment(providerData);
                    return data;
                }
            }
            catch (error) {
                throw error;
            }
        });
        this.rateAndDeliveryTime = (provider, providerData) => __awaiter(this, void 0, void 0, function* () {
            try {
                if (provider == 'Fedex') {
                    const data = yield fedex.rateAndTransitTime(providerData);
                    return data;
                }
                else if (provider == 'DHL') {
                    const data = yield dhl.getRates(providerData);
                    // const data = await dhl.landedCost(providerData);
                    return data;
                }
            }
            catch (error) {
                throw error;
            }
        });
        this.trackShipment = (provider, providerData) => __awaiter(this, void 0, void 0, function* () {
            try {
                if (provider == 'Fedex') {
                    const data = yield fedex.trackByTrackingNumber(providerData);
                    return data;
                }
                else if (provider == 'DHL') {
                    const data = yield dhl.trackShipment(providerData);
                    return data;
                }
            }
            catch (error) {
                throw error;
            }
        });
        this.availableProducts = (provider, providerData) => __awaiter(this, void 0, void 0, function* () {
            try {
                if (provider == 'DHL') {
                    const data = yield dhl.getAvailableProducts(providerData);
                    return data;
                }
            }
            catch (error) {
                throw error;
            }
        });
        this.checkPickupAvailibility = (provider, providerData) => __awaiter(this, void 0, void 0, function* () {
            try {
                if (provider == 'DHL') {
                    const data = yield dhl.validateAddress(providerData);
                    return data;
                }
                else if (provider == 'Fedex') {
                    const data = yield fedex.checkPickupAvailability(providerData);
                    return data;
                }
            }
            catch (error) {
                throw error;
            }
        });
        this.createPickup = (provider, providerData) => __awaiter(this, void 0, void 0, function* () {
            try {
                if (provider == 'DHL') {
                    const data = yield dhl.createPickup(providerData);
                    return data;
                }
                else if (provider == 'Fedex') {
                    const data = yield fedex.createPickup(providerData);
                    return data;
                }
            }
            catch (error) {
                throw error;
            }
        });
        this.updatePickup = (provider, providerData) => __awaiter(this, void 0, void 0, function* () {
            try {
                if (provider == 'DHL') {
                    const data = yield dhl.updatePickup(providerData);
                    return data;
                }
            }
            catch (error) {
                throw error;
            }
        });
        this.cancelPickup = (provider, providerData) => __awaiter(this, void 0, void 0, function* () {
            try {
                if (provider == 'DHL') {
                    const data = yield dhl.cancelPickup(providerData);
                    return data;
                }
                else if (provider == 'Fedex') {
                    const data = yield fedex.cancelPickup(providerData);
                    return data;
                }
            }
            catch (error) {
                throw error;
            }
        });
        this.validateAddress = (provider, providerData) => __awaiter(this, void 0, void 0, function* () {
            try {
                if (provider == 'Fedex') {
                    const data = yield fedex.validateAddress(providerData);
                    return data;
                }
            }
            catch (error) {
                throw error;
            }
        });
        this.validatePostalCode = (provider, providerData) => __awaiter(this, void 0, void 0, function* () {
            try {
                if (provider == 'Fedex') {
                    const data = yield fedex.validatePostal(providerData);
                    return data;
                }
            }
            catch (error) {
                throw error;
            }
        });
        this.verifyCredentials = (provider, providerData) => __awaiter(this, void 0, void 0, function* () {
            try {
                if (provider == 'Fedex') {
                    const data = yield fedex.verifyCredentials(providerData);
                    return data;
                }
                else if (provider == 'DHL') {
                    const data = yield dhl.verifyCredentials(providerData);
                    return data;
                }
            }
            catch (error) {
                throw error;
            }
        });
    }
}
exports.default = Delivery;
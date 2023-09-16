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
class DHL {
    constructor() {
        this.generateAuthorizationHeader = (data) => __awaiter(this, void 0, void 0, function* () {
            try {
                const header = Buffer.from(`${data.username}:${data.password}`).toString("base64");
                return header;
            }
            catch (error) {
                throw new Error(error);
            }
        });
        this.getRates = (data) => __awaiter(this, void 0, void 0, function* () {
            try {
                const authHeader = yield this.generateAuthorizationHeader(data.credentials);
                const url = `https://api-mock.dhl.com/mydhlapi/rates`;
                const response = yield axios_1.default.get(url, {
                    params: {
                        accountNumber: '',
                        originCountryCode: '',
                        destinationCountryCode: '',
                        destinationCityName: '',
                        weight: 5,
                        length: 6,
                        width: 58,
                        height: 6,
                        plannedShippingDate: '',
                        isCustomsDeclarable: '',
                        unitOfMeasurement: '',
                        requestEstimatedDeliveryDate: true
                    },
                    headers: {
                        'Message-Reference': 'SOME_STRING_VALUE',
                        'Message-Reference-Date': 'SOME_STRING_VALUE',
                        'Plugin-Name': 'SOME_STRING_VALUE',
                        'Plugin-Version': 'SOME_STRING_VALUE',
                        'Shipping-System-Platform-Name': 'SOME_STRING_VALUE',
                        'Shipping-System-Platform-Version': 'SOME_STRING_VALUE',
                        'Webstore-Platform-Name': 'SOME_STRING_VALUE',
                        'Webstore-Platform-Version': 'SOME_STRING_VALUE',
                        Authorization: `Basic ${authHeader}`
                    }
                });
                return response.data;
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
        this.landedCost = (data) => __awaiter(this, void 0, void 0, function* () {
            try {
                const authHeader = yield this.generateAuthorizationHeader(data.credentials);
                const url = 'https://api-mock.dhl.com/mydhlapi/landed-cost';
                const body = {
                    customerDetails: {
                        shipperDetails: {
                            postalCode: '14800',
                            cityName: 'Prague',
                            countryCode: 'CZ',
                            provinceCode: 'CZ',
                            addressLine1: 'addres1',
                            addressLine2: 'addres2',
                            addressLine3: 'addres3',
                            countyName: 'Central Bohemia'
                        },
                        receiverDetails: {
                            postalCode: '14800',
                            cityName: 'Prague',
                            countryCode: 'CZ',
                            provinceCode: 'CZ',
                            addressLine1: 'addres1',
                            addressLine2: 'addres2',
                            addressLine3: 'addres3',
                            countyName: 'Central Bohemia'
                        }
                    },
                    accounts: [{ typeCode: 'shipper', number: '123456789' }],
                    productCode: 'P',
                    localProductCode: 'P',
                    unitOfMeasurement: 'metric',
                    currencyCode: 'CZK',
                    isCustomsDeclarable: true,
                    isDTPRequested: true,
                    isInsuranceRequested: false,
                    getCostBreakdown: true,
                    charges: [{ typeCode: 'insurance', amount: 1250, currencyCode: 'CZK' }],
                    shipmentPurpose: 'personal',
                    transportationMode: 'air',
                    merchantSelectedCarrierName: 'DHL',
                    packages: [
                        { typeCode: '3BX', weight: 10.5, dimensions: { length: 25, width: 35, height: 15 } }
                    ],
                    items: [
                        {
                            number: 1,
                            name: 'KNITWEAR COTTON',
                            description: 'KNITWEAR 100% COTTON REDUCTION PRICE FALL COLLECTION',
                            manufacturerCountry: 'CN',
                            partNumber: '12345555',
                            quantity: 2,
                            quantityType: 'prt',
                            unitPrice: 120,
                            unitPriceCurrencyCode: 'EUR',
                            customsValue: 120,
                            customsValueCurrencyCode: 'EUR',
                            commodityCode: '851713',
                            weight: 5,
                            weightUnitOfMeasurement: 'metric',
                            category: '204',
                            brand: 'SHOE 1',
                            goodsCharacteristics: [{ typeCode: 'IMPORTER', value: 'Registered' }],
                            additionalQuantityDefinitions: [{ typeCode: 'DPR', amount: 2 }],
                            estimatedTariffRateType: 'default_rate'
                        }
                    ],
                    getTariffFormula: true,
                    getQuotationID: true
                };
                const response = yield axios_1.default.post(url, body, {
                    headers: {
                        'content-type': 'application/json',
                        'Message-Reference': 'SOME_STRING_VALUE',
                        'Message-Reference-Date': 'SOME_STRING_VALUE',
                        'Plugin-Name': 'SOME_STRING_VALUE',
                        'Plugin-Version': 'SOME_STRING_VALUE',
                        'Shipping-System-Platform-Name': 'SOME_STRING_VALUE',
                        'Shipping-System-Platform-Version': 'SOME_STRING_VALUE',
                        'Webstore-Platform-Name': 'SOME_STRING_VALUE',
                        'Webstore-Platform-Version': 'SOME_STRING_VALUE',
                        Authorization: `Basic ${authHeader}`
                    }
                });
                return response.data;
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
        this.getAvailableProducts = (data) => __awaiter(this, void 0, void 0, function* () {
            try {
                const authHeader = yield this.generateAuthorizationHeader(data.credentials);
                const url = `https://api-mock.dhl.com/mydhlapi/products`;
                const body = {};
                const response = yield axios_1.default.get(url, {
                    params: {
                        accountNumber: 'SOME_STRING_VALUE',
                        originCountryCode: 'SOME_STRING_VALUE',
                        originCityName: 'SOME_STRING_VALUE',
                        destinationCountryCode: 'SOME_STRING_VALUE',
                        destinationCityName: 'SOME_STRING_VALUE',
                        weight: 'SOME_NUMBER_VALUE',
                        length: 'SOME_NUMBER_VALUE',
                        width: 'SOME_NUMBER_VALUE',
                        height: 'SOME_NUMBER_VALUE',
                        plannedShippingDate: 'SOME_STRING_VALUE',
                        isCustomsDeclarable: 'SOME_BOOLEAN_VALUE',
                        unitOfMeasurement: 'SOME_STRING_VALUE'
                    },
                    headers: {
                        'Message-Reference': 'SOME_STRING_VALUE',
                        'Message-Reference-Date': 'SOME_STRING_VALUE',
                        'Plugin-Name': 'SOME_STRING_VALUE',
                        'Plugin-Version': 'SOME_STRING_VALUE',
                        'Shipping-System-Platform-Name': 'SOME_STRING_VALUE',
                        'Shipping-System-Platform-Version': 'SOME_STRING_VALUE',
                        'Webstore-Platform-Name': 'SOME_STRING_VALUE',
                        'Webstore-Platform-Version': 'SOME_STRING_VALUE',
                        Authorization: `Basic ${authHeader}`
                    }
                });
                return response.data;
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
        this.createShipment = (data) => __awaiter(this, void 0, void 0, function* () {
            try {
                const authHeader = yield this.generateAuthorizationHeader(data.credentials);
                const url = 'https://api-mock.dhl.com/mydhlapi/shipments';
                const body = {
                    plannedShippingDateAndTime: '2019-08-04T14:00:31GMT+01:00',
                    pickup: {
                        isRequested: false,
                        closeTime: '18:00',
                        location: 'reception',
                        specialInstructions: [{ value: 'please ring door bell', typeCode: 'TBD' }],
                        pickupDetails: {
                            postalAddress: {
                                postalCode: '14800',
                                cityName: 'Prague',
                                countryCode: 'CZ',
                                provinceCode: 'CZ',
                                addressLine1: 'V Parku 2308/10',
                                addressLine2: 'addres2',
                                addressLine3: 'addres3',
                                countyName: 'Central Bohemia',
                                provinceName: 'Central Bohemia',
                                countryName: 'Czech Republic'
                            },
                            contactInformation: {
                                email: 'that@before.de',
                                phone: '+1123456789',
                                mobilePhone: '+60112345678',
                                companyName: 'Company Name',
                                fullName: 'John Brew'
                            },
                            registrationNumbers: [{ typeCode: 'VAT', number: 'CZ123456789', issuerCountryCode: 'CZ' }],
                            bankDetails: [
                                {
                                    name: 'Russian Bank Name',
                                    settlementLocalCurrency: 'RUB',
                                    settlementForeignCurrency: 'USD'
                                }
                            ],
                            typeCode: 'business'
                        },
                        pickupRequestorDetails: {
                            postalAddress: {
                                postalCode: '14800',
                                cityName: 'Prague',
                                countryCode: 'CZ',
                                provinceCode: 'CZ',
                                addressLine1: 'V Parku 2308/10',
                                addressLine2: 'addres2',
                                addressLine3: 'addres3',
                                countyName: 'Central Bohemia',
                                provinceName: 'Central Bohemia',
                                countryName: 'Czech Republic'
                            },
                            contactInformation: {
                                email: 'that@before.de',
                                phone: '+1123456789',
                                mobilePhone: '+60112345678',
                                companyName: 'Company Name',
                                fullName: 'John Brew'
                            },
                            registrationNumbers: [{ typeCode: 'VAT', number: 'CZ123456789', issuerCountryCode: 'CZ' }],
                            bankDetails: [
                                {
                                    name: 'Russian Bank Name',
                                    settlementLocalCurrency: 'RUB',
                                    settlementForeignCurrency: 'USD'
                                }
                            ],
                            typeCode: 'business'
                        }
                    },
                    productCode: 'D',
                    localProductCode: 'D',
                    getRateEstimates: false,
                    accounts: [{ typeCode: 'shipper', number: '123456789' }],
                    valueAddedServices: [
                        {
                            serviceCode: 'II',
                            value: 100,
                            currency: 'GBP',
                            method: 'cash',
                            dangerousGoods: [
                                {
                                    contentId: '908',
                                    dryIceTotalNetWeight: 12,
                                    customDescription: '1 package Lithium ion batteries in compliance with Section II of P.I. 9661',
                                    unCodes: [1234]
                                }
                            ]
                        }
                    ],
                    outputImageProperties: {
                        printerDPI: 300,
                        customerBarcodes: [
                            {
                                content: 'barcode content',
                                textBelowBarcode: 'text below barcode',
                                symbologyCode: '93'
                            }
                        ],
                        customerLogos: [{ fileFormat: 'PNG', content: 'base64 encoded image' }],
                        encodingFormat: 'pdf',
                        imageOptions: [
                            {
                                typeCode: 'label',
                                templateName: 'ECOM26_84_001',
                                isRequested: true,
                                hideAccountNumber: false,
                                numberOfCopies: 1,
                                invoiceType: 'commercial',
                                languageCode: 'eng',
                                languageCountryCode: 'br',
                                encodingFormat: 'png',
                                renderDHLLogo: false,
                                fitLabelsToA4: false,
                                labelFreeText: 'string',
                                labelCustomerDataText: 'string'
                            }
                        ],
                        splitTransportAndWaybillDocLabels: true,
                        allDocumentsInOneImage: true,
                        splitDocumentsByPages: true,
                        splitInvoiceAndReceipt: true,
                        receiptAndLabelsInOneImage: true
                    },
                    customerReferences: [{ value: 'Customer reference', typeCode: 'CU' }],
                    identifiers: [{ typeCode: 'shipmentId', value: '1234567890', dataIdentifier: '00' }],
                    customerDetails: {
                        shipperDetails: {
                            postalAddress: {
                                postalCode: '14800',
                                cityName: 'Prague',
                                countryCode: 'CZ',
                                provinceCode: 'CZ',
                                addressLine1: 'V Parku 2308/10',
                                addressLine2: 'addres2',
                                addressLine3: 'addres3',
                                countyName: 'Central Bohemia',
                                provinceName: 'Central Bohemia',
                                countryName: 'Czech Republic'
                            },
                            contactInformation: {
                                email: 'that@before.de',
                                phone: '+1123456789',
                                mobilePhone: '+60112345678',
                                companyName: 'Company Name',
                                fullName: 'John Brew'
                            },
                            registrationNumbers: [{ typeCode: 'VAT', number: 'CZ123456789', issuerCountryCode: 'CZ' }],
                            bankDetails: [
                                {
                                    name: 'Russian Bank Name',
                                    settlementLocalCurrency: 'RUB',
                                    settlementForeignCurrency: 'USD'
                                }
                            ],
                            typeCode: 'business'
                        },
                        receiverDetails: {
                            postalAddress: {
                                postalCode: '14800',
                                cityName: 'Prague',
                                countryCode: 'CZ',
                                provinceCode: 'CZ',
                                addressLine1: 'V Parku 2308/10',
                                addressLine2: 'addres2',
                                addressLine3: 'addres3',
                                countyName: 'Central Bohemia',
                                provinceName: 'Central Bohemia',
                                countryName: 'Czech Republic'
                            },
                            contactInformation: {
                                email: 'that@before.de',
                                phone: '+1123456789',
                                mobilePhone: '+60112345678',
                                companyName: 'Company Name',
                                fullName: 'John Brew'
                            },
                            registrationNumbers: [{ typeCode: 'VAT', number: 'CZ123456789', issuerCountryCode: 'CZ' }],
                            bankDetails: [
                                {
                                    name: 'Russian Bank Name',
                                    settlementLocalCurrency: 'RUB',
                                    settlementForeignCurrency: 'USD'
                                }
                            ],
                            typeCode: 'business'
                        },
                        buyerDetails: {
                            postalAddress: {
                                postalCode: '14800',
                                cityName: 'Prague',
                                countryCode: 'CZ',
                                provinceCode: 'CZ',
                                addressLine1: 'V Parku 2308/10',
                                addressLine2: 'addres2',
                                addressLine3: 'addres3',
                                countyName: 'Central Bohemia',
                                provinceName: 'Central Bohemia',
                                countryName: 'Czech Republic'
                            },
                            contactInformation: {
                                email: 'buyer@domain.com',
                                phone: '+44123456789',
                                mobilePhone: '+42123456789',
                                companyName: 'Customer Company Name',
                                fullName: 'Mark Companer'
                            },
                            registrationNumbers: [{ typeCode: 'VAT', number: 'CZ123456789', issuerCountryCode: 'CZ' }],
                            bankDetails: [
                                {
                                    name: 'Russian Bank Name',
                                    settlementLocalCurrency: 'RUB',
                                    settlementForeignCurrency: 'USD'
                                }
                            ],
                            typeCode: 'business'
                        },
                        importerDetails: {
                            postalAddress: {
                                postalCode: '14800',
                                cityName: 'Prague',
                                countryCode: 'CZ',
                                provinceCode: 'CZ',
                                addressLine1: 'V Parku 2308/10',
                                addressLine2: 'addres2',
                                addressLine3: 'addres3',
                                countyName: 'Central Bohemia',
                                provinceName: 'Central Bohemia',
                                countryName: 'Czech Republic'
                            },
                            contactInformation: {
                                email: 'that@before.de',
                                phone: '+1123456789',
                                mobilePhone: '+60112345678',
                                companyName: 'Company Name',
                                fullName: 'John Brew'
                            },
                            registrationNumbers: [{ typeCode: 'VAT', number: 'CZ123456789', issuerCountryCode: 'CZ' }],
                            bankDetails: [
                                {
                                    name: 'Russian Bank Name',
                                    settlementLocalCurrency: 'RUB',
                                    settlementForeignCurrency: 'USD'
                                }
                            ],
                            typeCode: 'business'
                        },
                        exporterDetails: {
                            postalAddress: {
                                postalCode: '14800',
                                cityName: 'Prague',
                                countryCode: 'CZ',
                                provinceCode: 'CZ',
                                addressLine1: 'V Parku 2308/10',
                                addressLine2: 'addres2',
                                addressLine3: 'addres3',
                                countyName: 'Central Bohemia',
                                provinceName: 'Central Bohemia',
                                countryName: 'Czech Republic'
                            },
                            contactInformation: {
                                email: 'that@before.de',
                                phone: '+1123456789',
                                mobilePhone: '+60112345678',
                                companyName: 'Company Name',
                                fullName: 'John Brew'
                            },
                            registrationNumbers: [{ typeCode: 'VAT', number: 'CZ123456789', issuerCountryCode: 'CZ' }],
                            bankDetails: [
                                {
                                    name: 'Russian Bank Name',
                                    settlementLocalCurrency: 'RUB',
                                    settlementForeignCurrency: 'USD'
                                }
                            ],
                            typeCode: 'business'
                        },
                        sellerDetails: {
                            postalAddress: {
                                postalCode: '14800',
                                cityName: 'Prague',
                                countryCode: 'CZ',
                                provinceCode: 'CZ',
                                addressLine1: 'V Parku 2308/10',
                                addressLine2: 'addres2',
                                addressLine3: 'addres3',
                                countyName: 'Central Bohemia',
                                provinceName: 'Central Bohemia',
                                countryName: 'Czech Republic'
                            },
                            contactInformation: {
                                email: 'that@before.de',
                                phone: '+1123456789',
                                mobilePhone: '+60112345678',
                                companyName: 'Company Name',
                                fullName: 'John Brew'
                            },
                            registrationNumbers: [{ typeCode: 'VAT', number: 'CZ123456789', issuerCountryCode: 'CZ' }],
                            bankDetails: [
                                {
                                    name: 'Russian Bank Name',
                                    settlementLocalCurrency: 'RUB',
                                    settlementForeignCurrency: 'USD'
                                }
                            ],
                            typeCode: 'business'
                        },
                        payerDetails: {
                            postalAddress: {
                                postalCode: '14800',
                                cityName: 'Prague',
                                countryCode: 'CZ',
                                provinceCode: 'CZ',
                                addressLine1: 'V Parku 2308/10',
                                addressLine2: 'addres2',
                                addressLine3: 'addres3',
                                countyName: 'Central Bohemia',
                                provinceName: 'Central Bohemia',
                                countryName: 'Czech Republic'
                            },
                            contactInformation: {
                                email: 'that@before.de',
                                phone: '+1123456789',
                                mobilePhone: '+60112345678',
                                companyName: 'Company Name',
                                fullName: 'John Brew'
                            },
                            registrationNumbers: [{ typeCode: 'VAT', number: 'CZ123456789', issuerCountryCode: 'CZ' }],
                            bankDetails: [
                                {
                                    name: 'Russian Bank Name',
                                    settlementLocalCurrency: 'RUB',
                                    settlementForeignCurrency: 'USD'
                                }
                            ],
                            typeCode: 'business'
                        },
                        ultimateConsigneeDetails: {
                            postalAddress: {
                                postalCode: '14800',
                                cityName: 'Prague',
                                countryCode: 'CZ',
                                provinceCode: 'CZ',
                                addressLine1: 'V Parku 2308/10',
                                addressLine2: 'addres2',
                                addressLine3: 'addres3',
                                countyName: 'Central Bohemia',
                                provinceName: 'Central Bohemia',
                                countryName: 'Czech Republic'
                            },
                            contactInformation: {
                                email: 'that@before.de',
                                phone: '+1123456789',
                                mobilePhone: '+60112345678',
                                companyName: 'Company Name',
                                fullName: 'John Brew'
                            },
                            registrationNumbers: [{ typeCode: 'VAT', number: 'CZ123456789', issuerCountryCode: 'CZ' }],
                            bankDetails: { typeCode: 'VAT', number: 'CZ123456789', issuerCountryCode: 'CZ' },
                            typeCode: 'string'
                        }
                    },
                    content: {
                        packages: [
                            {
                                typeCode: '2BP',
                                weight: 22.501,
                                dimensions: { length: 15.001, width: 15.001, height: 40.001 },
                                customerReferences: [{ value: 'Customer reference', typeCode: 'CU' }],
                                identifiers: [{ typeCode: 'shipmentId', value: '1234567890', dataIdentifier: '00' }],
                                description: 'Piece content description',
                                labelBarcodes: [
                                    {
                                        position: 'left',
                                        symbologyCode: '93',
                                        content: 'string',
                                        textBelowBarcode: 'text below left barcode'
                                    }
                                ],
                                labelText: [{ position: 'left', caption: 'text caption', value: 'text value' }],
                                labelDescription: 'bespoke label description'
                            }
                        ],
                        isCustomsDeclarable: true,
                        declaredValue: 150,
                        declaredValueCurrency: 'CZK',
                        exportDeclaration: {
                            lineItems: [
                                {
                                    number: 1,
                                    description: 'line item description',
                                    price: 150,
                                    quantity: { value: 1, unitOfMeasurement: 'BOX' },
                                    commodityCodes: [{ typeCode: 'outbound', value: 851713 }],
                                    exportReasonType: 'permanent',
                                    manufacturerCountry: 'CZ',
                                    weight: { netValue: 10, grossValue: 10 },
                                    isTaxesPaid: true,
                                    additionalInformation: ['string'],
                                    customerReferences: [{ typeCode: 'AFE', value: 'custref123' }],
                                    customsDocuments: [{ typeCode: '972', value: 'custdoc456' }],
                                    preCalculatedLineItemTotalValue: 150
                                }
                            ],
                            invoice: {
                                number: '12345-ABC',
                                date: '2020-03-18',
                                signatureName: 'Brewer',
                                signatureTitle: 'Mr.',
                                signatureImage: 'Base64 encoded image',
                                instructions: ['string'],
                                customerDataTextEntries: ['string'],
                                totalNetWeight: 999999999999,
                                totalGrossWeight: 999999999999,
                                customerReferences: [{ typeCode: 'CU', value: 'custref112' }],
                                termsOfPayment: '100 days',
                                indicativeCustomsValues: {
                                    importCustomsDutyValue: 150.57,
                                    importTaxesValue: 49.43,
                                    totalWithImportDutiesAndTaxes: [350.57]
                                },
                                preCalculatedTotalValues: { preCalculatedTotalGoodsValue: 49.43, preCalculatedTotalInvoiceValue: 150.57 }
                            },
                            remarks: [{ value: 'declaration remark' }],
                            additionalCharges: [{ value: 10, caption: 'fee', typeCode: 'freight' }],
                            destinationPortName: 'port details',
                            placeOfIncoterm: 'port of departure or destination details',
                            payerVATNumber: '12345ED',
                            recipientReference: 'recipient reference',
                            exporter: { id: '123', code: 'EXPCZ' },
                            packageMarks: 'marks',
                            declarationNotes: [{ value: 'up to three declaration notes' }],
                            exportReference: 'export reference',
                            exportReason: 'export reason',
                            exportReasonType: 'permanent',
                            licenses: [{ typeCode: 'export', value: 'license' }],
                            shipmentType: 'personal',
                            customsDocuments: [{ typeCode: '972', value: 'custdoc445' }]
                        },
                        description: 'shipment description',
                        USFilingTypeValue: '12345',
                        incoterm: 'DAP',
                        unitOfMeasurement: 'metric'
                    },
                    documentImages: [{ typeCode: 'INV', imageFormat: 'PDF', content: 'base64 encoded image' }],
                    onDemandDelivery: {
                        deliveryOption: 'servicepoint',
                        location: 'front door',
                        specialInstructions: 'ringe twice',
                        gateCode: '1234',
                        whereToLeave: 'concierge',
                        neighbourName: 'Mr.Dan',
                        neighbourHouseNumber: '777',
                        authorizerName: 'Newman',
                        servicePointId: 'SPL123',
                        requestedDeliveryDate: '2020-04-20'
                    },
                    requestOndemandDeliveryURL: false,
                    shipmentNotification: [
                        {
                            typeCode: 'email',
                            receiverId: 'receiver@email.com',
                            languageCode: 'eng',
                            languageCountryCode: 'UK',
                            bespokeMessage: 'message to be included in the notification'
                        }
                    ],
                    prepaidCharges: [{ typeCode: 'freight', currency: 'CZK', value: 200, method: 'cash' }],
                    getTransliteratedResponse: false,
                    estimatedDeliveryDate: { isRequested: false, typeCode: 'QDDC' },
                    getAdditionalInformation: [{ typeCode: 'pickupDetails', isRequested: true }],
                    parentShipment: { productCode: 's', packagesCount: 1 }
                };
                const response = yield axios_1.default.post(url, body, {
                    headers: {
                        'content-type': 'application/json',
                        'Message-Reference': 'SOME_STRING_VALUE',
                        'Message-Reference-Date': 'SOME_STRING_VALUE',
                        'Plugin-Name': 'SOME_STRING_VALUE',
                        'Plugin-Version': 'SOME_STRING_VALUE',
                        'Shipping-System-Platform-Name': 'SOME_STRING_VALUE',
                        'Shipping-System-Platform-Version': 'SOME_STRING_VALUE',
                        'Webstore-Platform-Name': 'SOME_STRING_VALUE',
                        'Webstore-Platform-Version': 'SOME_STRING_VALUE',
                        Authorization: `Basic ${authHeader}`
                    }
                });
                return response.data;
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
        this.trackShipment = (data) => __awaiter(this, void 0, void 0, function* () {
            try {
                const authHeader = yield this.generateAuthorizationHeader(data.credentials);
                const url = `https://api-mock.dhl.com/mydhlapi/shipments/${data.trackingNumber}/tracking`;
                const response = yield axios_1.default.get(url, {
                    headers: {
                        'Message-Reference': 'SOME_STRING_VALUE',
                        'Message-Reference-Date': 'SOME_STRING_VALUE',
                        'Accept-Language': 'SOME_STRING_VALUE',
                        'Plugin-Name': 'SOME_STRING_VALUE',
                        'Plugin-Version': 'SOME_STRING_VALUE',
                        'Shipping-System-Platform-Name': 'SOME_STRING_VALUE',
                        'Shipping-System-Platform-Version': 'SOME_STRING_VALUE',
                        'Webstore-Platform-Name': 'SOME_STRING_VALUE',
                        'Webstore-Platform-Version': 'SOME_STRING_VALUE',
                        Authorization: `Basic ${authHeader}`
                    }
                });
                return response.data;
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
        this.validateAddress = (data) => __awaiter(this, void 0, void 0, function* () {
            try {
                const authHeader = yield this.generateAuthorizationHeader(data.credentials);
                const url = `https://api-mock.dhl.com/mydhlapi/address-validate`;
                const response = yield axios_1.default.get(url, {
                    params: {
                        type: 'SOME_STRING_VALUE',
                        countryCode: 'SOME_STRING_VALUE',
                        postalCode: '',
                    },
                    headers: {
                        'Message-Reference': 'SOME_STRING_VALUE',
                        'Message-Reference-Date': 'SOME_STRING_VALUE',
                        'Plugin-Name': 'SOME_STRING_VALUE',
                        'Plugin-Version': 'SOME_STRING_VALUE',
                        'Shipping-System-Platform-Name': 'SOME_STRING_VALUE',
                        'Shipping-System-Platform-Version': 'SOME_STRING_VALUE',
                        'Webstore-Platform-Name': 'SOME_STRING_VALUE',
                        'Webstore-Platform-Version': 'SOME_STRING_VALUE',
                        Authorization: `Basic ${authHeader}`
                    }
                });
                return response.data;
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
        this.createPickup = (data) => __awaiter(this, void 0, void 0, function* () {
            try {
                const authHeader = yield this.generateAuthorizationHeader(data.credentials);
                const url = 'https://api-mock.dhl.com/mydhlapi/pickups';
                const body = {
                    plannedPickupDateAndTime: '2019-08-04T14:00:31GMT+01:00',
                    closeTime: '18:00',
                    location: 'reception',
                    locationType: 'residence',
                    accounts: [{ typeCode: 'shipper', number: '123456789' }],
                    specialInstructions: [{ value: 'please ring door bell', typeCode: 'TBD' }],
                    remark: 'string',
                    customerDetails: {
                        shipperDetails: {
                            postalAddress: {
                                postalCode: '14800',
                                cityName: 'Prague',
                                countryCode: 'CZ',
                                provinceCode: 'CZ',
                                addressLine1: 'V Parku 2308/10',
                                addressLine2: 'addres2',
                                addressLine3: 'addres3',
                                countyName: 'Central Bohemia'
                            },
                            contactInformation: {
                                email: 'that@before.de',
                                phone: '+1123456789',
                                mobilePhone: '+60112345678',
                                companyName: 'Company Name',
                                fullName: 'John Brew'
                            }
                        },
                        receiverDetails: {
                            postalAddress: {
                                postalCode: '14800',
                                cityName: 'Prague',
                                countryCode: 'CZ',
                                provinceCode: 'CZ',
                                addressLine1: 'V Parku 2308/10',
                                addressLine2: 'addres2',
                                addressLine3: 'addres3',
                                countyName: 'Central Bohemia'
                            },
                            contactInformation: {
                                email: 'that@before.de',
                                phone: '+1123456789',
                                mobilePhone: '+60112345678',
                                companyName: 'Company Name',
                                fullName: 'John Brew'
                            }
                        },
                        bookingRequestorDetails: {
                            postalAddress: {
                                postalCode: '14800',
                                cityName: 'Prague',
                                countryCode: 'CZ',
                                provinceCode: 'CZ',
                                addressLine1: 'V Parku 2308/10',
                                addressLine2: 'addres2',
                                addressLine3: 'addres3',
                                countyName: 'Central Bohemia'
                            },
                            contactInformation: {
                                email: 'that@before.de',
                                phone: '+1123456789',
                                mobilePhone: '+60112345678',
                                companyName: 'Company Name',
                                fullName: 'John Brew'
                            }
                        },
                        pickupDetails: {
                            postalAddress: {
                                postalCode: '14800',
                                cityName: 'Prague',
                                countryCode: 'CZ',
                                provinceCode: 'CZ',
                                addressLine1: 'V Parku 2308/10',
                                addressLine2: 'addres2',
                                addressLine3: 'addres3',
                                countyName: 'Central Bohemia'
                            },
                            contactInformation: {
                                email: 'that@before.de',
                                phone: '+1123456789',
                                mobilePhone: '+60112345678',
                                companyName: 'Company Name',
                                fullName: 'John Brew'
                            }
                        }
                    },
                    shipmentDetails: [
                        {
                            productCode: 'string',
                            localProductCode: 'str',
                            accounts: [{ typeCode: 'shipper', number: '123456789' }],
                            valueAddedServices: [
                                {
                                    serviceCode: 'II',
                                    localServiceCode: 'II',
                                    value: 100,
                                    currency: 'GBP',
                                    method: 'cash'
                                }
                            ],
                            isCustomsDeclarable: true,
                            declaredValue: 150,
                            declaredValueCurrency: 'CZK',
                            unitOfMeasurement: 'metric',
                            shipmentTrackingNumber: '123456790',
                            packages: [
                                { typeCode: '3BX', weight: 10.5, dimensions: { length: 25, width: 35, height: 15 } }
                            ]
                        }
                    ]
                };
                const response = yield axios_1.default.post(url, body, {
                    headers: {
                        'content-type': 'application/json',
                        'Message-Reference': 'SOME_STRING_VALUE',
                        'Message-Reference-Date': 'SOME_STRING_VALUE',
                        'Plugin-Name': 'SOME_STRING_VALUE',
                        'Plugin-Version': 'SOME_STRING_VALUE',
                        'Shipping-System-Platform-Name': 'SOME_STRING_VALUE',
                        'Shipping-System-Platform-Version': 'SOME_STRING_VALUE',
                        'Webstore-Platform-Name': 'SOME_STRING_VALUE',
                        'Webstore-Platform-Version': 'SOME_STRING_VALUE',
                        Authorization: `Basic ${authHeader}`
                    }
                });
                return response.data;
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
        this.updatePickup = (data) => __awaiter(this, void 0, void 0, function* () {
            try {
                const authHeader = yield this.generateAuthorizationHeader(data.credentials);
                const url = `https://api-mock.dhl.com/mydhlapi/pickups/${data.dispatchConfirmationNumber}`;
                const body = {
                    dispatchConfirmationNumber: 'CBJ201220123456',
                    originalShipperAccountNumber: '123456789',
                    plannedPickupDateAndTime: '2019-08-04T14:00:31GMT+01:00',
                    closeTime: '18:00',
                    location: 'reception',
                    locationType: 'residence',
                    accounts: [{ typeCode: 'shipper', number: '123456789' }],
                    specialInstructions: [{ value: 'please ring door bell', typeCode: 'TBD' }],
                    remark: 'string',
                    customerDetails: {
                        shipperDetails: {
                            postalAddress: {
                                postalCode: '14800',
                                cityName: 'Prague',
                                countryCode: 'CZ',
                                provinceCode: 'CZ',
                                addressLine1: 'V Parku 2308/10',
                                addressLine2: 'addres2',
                                addressLine3: 'addres3',
                                countyName: 'Central Bohemia'
                            },
                            contactInformation: {
                                email: 'that@before.de',
                                phone: '+1123456789',
                                mobilePhone: '+60112345678',
                                companyName: 'Company Name',
                                fullName: 'John Brew'
                            }
                        },
                        receiverDetails: {
                            postalAddress: {
                                postalCode: '14800',
                                cityName: 'Prague',
                                countryCode: 'CZ',
                                provinceCode: 'CZ',
                                addressLine1: 'V Parku 2308/10',
                                addressLine2: 'addres2',
                                addressLine3: 'addres3',
                                countyName: 'Central Bohemia'
                            },
                            contactInformation: {
                                email: 'that@before.de',
                                phone: '+1123456789',
                                mobilePhone: '+60112345678',
                                companyName: 'Company Name',
                                fullName: 'John Brew'
                            }
                        },
                        bookingRequestorDetails: {
                            postalAddress: {
                                postalCode: '14800',
                                cityName: 'Prague',
                                countryCode: 'CZ',
                                provinceCode: 'CZ',
                                addressLine1: 'V Parku 2308/10',
                                addressLine2: 'addres2',
                                addressLine3: 'addres3',
                                countyName: 'Central Bohemia'
                            },
                            contactInformation: {
                                email: 'that@before.de',
                                phone: '+1123456789',
                                mobilePhone: '+60112345678',
                                companyName: 'Company Name',
                                fullName: 'John Brew'
                            }
                        },
                        pickupDetails: {
                            postalAddress: {
                                postalCode: '14800',
                                cityName: 'Prague',
                                countryCode: 'CZ',
                                provinceCode: 'CZ',
                                addressLine1: 'V Parku 2308/10',
                                addressLine2: 'addres2',
                                addressLine3: 'addres3',
                                countyName: 'Central Bohemia'
                            },
                            contactInformation: {
                                email: 'that@before.de',
                                phone: '+1123456789',
                                mobilePhone: '+60112345678',
                                companyName: 'Company Name',
                                fullName: 'John Brew'
                            }
                        }
                    },
                    shipmentDetails: [
                        {
                            productCode: 'D',
                            localProductCode: 'D',
                            accounts: [{ typeCode: 'shipper', number: '123456789' }],
                            valueAddedServices: [
                                {
                                    serviceCode: 'II',
                                    localServiceCode: 'II',
                                    value: 100,
                                    currency: 'GBP',
                                    method: 'cash'
                                }
                            ],
                            isCustomsDeclarable: true,
                            declaredValue: 150,
                            declaredValueCurrency: 'CZK',
                            unitOfMeasurement: 'metric',
                            shipmentTrackingNumber: '123456790',
                            packages: [
                                { typeCode: '3BX', weight: 10.5, dimensions: { length: 25, width: 35, height: 15 } }
                            ]
                        }
                    ]
                };
                const response = yield axios_1.default.patch(url, body, {
                    headers: {
                        'content-type': 'application/json',
                        'Message-Reference': 'SOME_STRING_VALUE',
                        'Message-Reference-Date': 'SOME_STRING_VALUE',
                        'Plugin-Name': 'SOME_STRING_VALUE',
                        'Plugin-Version': 'SOME_STRING_VALUE',
                        'Shipping-System-Platform-Name': 'SOME_STRING_VALUE',
                        'Shipping-System-Platform-Version': 'SOME_STRING_VALUE',
                        'Webstore-Platform-Name': 'SOME_STRING_VALUE',
                        'Webstore-Platform-Version': 'SOME_STRING_VALUE',
                        Authorization: `Basic ${authHeader}`
                    }
                });
                return response.data;
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
        this.cancelPickup = (data) => __awaiter(this, void 0, void 0, function* () {
            try {
                const authHeader = yield this.generateAuthorizationHeader(data.credentials);
                const url = `https://api-mock.dhl.com/mydhlapi/pickups/${data.dispatchConfirmationNumber}`;
                const response = yield axios_1.default.delete(url, {
                    headers: {
                        'Message-Reference': 'SOME_STRING_VALUE',
                        'Message-Reference-Date': 'SOME_STRING_VALUE',
                        'Plugin-Name': 'SOME_STRING_VALUE',
                        'Plugin-Version': 'SOME_STRING_VALUE',
                        'Shipping-System-Platform-Name': 'SOME_STRING_VALUE',
                        'Shipping-System-Platform-Version': 'SOME_STRING_VALUE',
                        'Webstore-Platform-Name': 'SOME_STRING_VALUE',
                        'Webstore-Platform-Version': 'SOME_STRING_VALUE',
                        Authorization: `Basic ${authHeader}`
                    },
                    params: {
                        requestorName: 'SOME_STRING_VALUE',
                        reason: 'SOME_STRING_VALUE'
                    }
                });
                return response.data;
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
        this.verifyCredentials = (data) => __awaiter(this, void 0, void 0, function* () {
            try {
                const authHeader = yield this.generateAuthorizationHeader(data.credentials);
                const url = `https://api-mock.dhl.com/mydhlapi/rates`;
                yield axios_1.default.get(url, {
                    params: {
                        accountNumber: '',
                        originCountryCode: '',
                        destinationCountryCode: '',
                        destinationCityName: '',
                        weight: 5,
                        length: 6,
                        width: 58,
                        height: 6,
                        plannedShippingDate: '',
                        isCustomsDeclarable: '',
                        unitOfMeasurement: '',
                        requestEstimatedDeliveryDate: true
                    },
                    headers: {
                        'Message-Reference': 'SOME_STRING_VALUE',
                        'Message-Reference-Date': 'SOME_STRING_VALUE',
                        'Plugin-Name': 'SOME_STRING_VALUE',
                        'Plugin-Version': 'SOME_STRING_VALUE',
                        'Shipping-System-Platform-Name': 'SOME_STRING_VALUE',
                        'Shipping-System-Platform-Version': 'SOME_STRING_VALUE',
                        'Webstore-Platform-Name': 'SOME_STRING_VALUE',
                        'Webstore-Platform-Version': 'SOME_STRING_VALUE',
                        Authorization: `Basic ${authHeader}`
                    }
                });
                return true;
            }
            catch (error) {
                if (error.response) {
                    return false;
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
exports.default = DHL;

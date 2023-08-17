import axios from 'axios';
class Fedex {
    constructor() {

    }
    generateToken = async (data: any) => {
        try {


            const url = `https://apis-sandbox.fedex.com/oauth/token`;
            const body = `grant_type=${data.grantType}&client_id=${data.apiKey}&client_secret=${data.secretKey}`;
            const response = await axios.post(url, body, {
                headers: {
                    "Content-Type": "application/x-www-form-urlencoded"
                }
            });
            return response.data.access_token;
        } catch (error: any) {
            throw new Error(error);


        }

    }

    rateAndTransitTime = async (data: any) => {
        try {
            const token = await this.generateToken(data.credentials);
            const url = 'https://apis-sandbox.fedex.com/rate/v1/rates/quotes';
            const body = {
                accountNumber: {
                    value: ''

                },

                rateRequestControlParameters: {
                    returnTransitTimes: false,

                    servicesNeededOnRateFailure: false,
                    variableOptions: '',

                    rateSortOrder: ''
                },

                requestedShipment: {
                    shipper: {
                        address: {
                            city: data.city,
                            stateOrProvinceCode: data.stateOrProvinceCode,
                            postalCode: data.postalCode,
                            countryCode: data.countryCode,
                            residential: false
                        }
                    },
                    recipient: {
                        address: {
                            city: data.city,

                            stateOrProvinceCode: data.stateOrProvinceCode,

                            postalCode: data.postalCode,

                            countryCode: data.countryCode,

                            residential: false,

                        }
                    },
                    serviceType: '',
                    emailNotificationDetail: {
                        recipients: [{
                            emailAddress: '',
                            notificationEventType: [''],
                            smsDetail: {
                                phoneNumber: '',
                                phoneNumberCountryCode: ''
                            },
                            notificationFormatType: '',
                            emailNotificationRecipientType: '',
                            notificationType: '',
                            locale: ''
                        }],
                        personalMessage: '',
                        PrintedReference: {
                            printedReferenceType: '',
                            value: ''
                        }
                    },
                    preferredCurrency: '',
                    rateRequestType: [''],
                    shipDateStamp: '',
                    pickupType: '',
                    requestedPackageLineItems: [{
                        subPackagingType: '',
                        groupPackageCount: 45,
                        contentRecord: [{
                            itemNumber: '',
                            receivedQuantity: 45,
                            description: '',
                            partNumber: ''
                        }],
                        declaredValue: {
                            amount: 541,
                            currency: ''
                        },
                        weight: {
                            units: '',
                            value: 54
                        },
                        dimensions: {
                            length: 54,
                            width: 45,
                            height: 51,
                            units: ''
                        },
                        variableHandlingChargeDetail: {
                            rateType: '',
                            percentValue: 5,
                            rateLevelType: '',
                            fixedValue: {
                                amount: 5,
                                currency: ''
                            },
                            rateElementBasis: ''
                        },
                        packageSpecialServices: {
                            specialServiceTypes: [''],
                            signatureOptionType: '',
                            alcoholDetail: {
                                alcoholRecipientType: '',
                                shipperAgreementType: ''
                            },
                            dangerousGoodsDetail: {
                                offeror: '',
                                accessibility: '',
                                emergencyContactNumber: '',
                                options: [''],
                                containers: [{
                                    offeror: '',
                                    hazardousCommodities: [{
                                        quantity: {
                                            quantityType: '',
                                            amount: 5,
                                            units: ''
                                        },
                                        innerReceptacles: [{
                                            quantityType: '',
                                            amount: 5,
                                            units: ''
                                        }],
                                        options: {
                                            labelTextOption: '',
                                            customerSuppliedLabelText: ''
                                        },
                                        description: {
                                            sequenceNumber: 5,
                                            processingOptions: [''],
                                            subsidiaryClasses: [''],
                                            labelText: '',
                                            technicalName: '',
                                            packingDetails: {
                                                packingInstructions: '',
                                                cargoAircraftOnly: false
                                            },
                                            authorization: '',
                                            reportableQuantity: false,
                                            percentage: 5,
                                            id: '',
                                            packingGroup: '',
                                            properShippingName: '',
                                            hazardClass: ''
                                        }

                                    }],
                                    numberOfContainers: 5,
                                    containerType: '',
                                    emergencyContactNumber: {
                                        areaCode: '',
                                        extension: '',
                                        countryCode: '',
                                        personalIdentificationNumber: '',
                                        localNumber: ''
                                    },
                                    packaging: {
                                        count: 54,
                                        units: ''
                                    },
                                    packingType: '',
                                    radioactiveContainerClass: ''
                                }],
                                packaging: {
                                    count: 5,
                                    units: ''
                                }
                            },
                            packageCODDetail: {
                                codCollectionAmount: {
                                    amount: 4,
                                    currency: ''
                                },
                                codCollectionType: ''
                            },
                            pieceCountVerificationBoxCount: 5,
                            batteryDetails: [{
                                material: '',
                                regulatorySubType: '',
                                packing: ''
                            }],
                            dryIceWeight: {
                                units: '',
                                value: 4
                            }
                        }

                    }],
                    documentShipment: false,
                    variableHandlingChargeDetail: {
                        rateType: '',
                        percentValue: 5,
                        rateLevelType: '',
                        fixedValue: {
                            amount: 4,
                            currency: ''
                        },
                        rateElementBasis: ''
                    },
                    packagingType: '',
                    totalPackageCount: 55,
                    totalWeight: 51,
                    shipmentSpecialServices: {
                        returnShipmentDetail: {
                            returnType: ''
                        },
                        deliveryOnInvoiceAcceptanceDetail: {
                            recipient: {
                                address: {
                                    city: '',
                                    stateOrProvinceCode: '',
                                    postalCode: '',
                                    countryCode: '',
                                    residential: false,
                                    streetLines: ['']
                                },
                                contact: {
                                    personName: '',
                                    emailAddress: '',
                                    phoneNumber: '',
                                    phoneEntension: '',
                                    faxNumber: '',
                                    companyName: ''
                                },
                                accountNumber: {
                                    value: ''
                                }
                            }
                        },
                        internationalTrafficInArmsRegulationsDetail: {
                            licenseOrExemptionNumber: ''
                        },
                        pendingShipmentDetail: {
                            pendingShipmentType: '',
                            processingOptions: {
                                options: ['']
                            },
                            recommendedDocumentSpecification: {
                                types: ['']
                            },
                            emailLabelDetail: {
                                recipients: [
                                    {
                                        emailAddress: '',
                                        optionsRequested: {
                                            options: ['']
                                        },
                                        role: '',
                                        locale: {
                                            country: '',
                                            language: ''
                                        }
                                    }
                                ],
                                message: ''
                            },
                            documentReferences: [{
                                documentType: '',
                                customerReference: '',
                                description: '',
                                documentId: ''
                            }],
                            expirationTimeStamp: '',
                            shipmentDryIceDetail: {
                                totalWeight: {
                                    units: '',
                                    value: 5
                                },
                                packageCount: 55,

                            }

                        },
                        holdAtLocationDetail: {
                            locationId: '',
                            locationContactAndAddress: {
                                contact: {
                                    personName: '',
                                    emailAddress: '',
                                    phoneNumber: '',
                                    phoneExtension: '',
                                    faxNumber: '',
                                    companyName: ''
                                },
                                address: {
                                    city: '',
                                    stateOrProvinceCode: '',
                                    postalCode: '',
                                    countryCode: '',
                                    residential: false
                                }
                            },
                            locationType: ''
                        },
                        shipmentCODDetail: {
                            addTransportationChargesDetail: {
                                rateType: '',
                                rateLevelType: '',
                                chargeLevelType: '',
                                chargeType: ''
                            },
                            codRecipient: {
                                address: {
                                    city: '',
                                    stateOrProviceCode: '',
                                    postalCode: "",
                                    countryCode: '',
                                    residential: false
                                },
                                contact: {
                                    personName: '',
                                    emailAddress: '',
                                    phoneNumber: '',
                                    phoneExtension: '',
                                    faxNumber: '',
                                    companyName: ''
                                },
                                accountNumber: {
                                    value: ''
                                }
                            },
                            remitToName: '',
                            codCollectionType: '',
                            financialInstitutionContactAndAddress: {
                                contact: {
                                    personName: '',
                                    emailAddress: '',
                                    phoneNumber: '',
                                    phoneExtension: '',
                                    faxNumber: '',
                                    companyName: ''
                                },
                                address: {
                                    city: '',
                                    stateOrProviceCode: '',
                                    postalCode: "",
                                    countryCode: '',
                                    residential: false
                                }
                            },
                            returnReferenceIndicatorType: ''
                        },
                        shipmentDryIceDetail: {
                            totalWeight: {
                                units: '',
                                value: 45
                            },
                            packageCount: 45
                        },
                        internationalControlledExportDetail: {
                            type: ''
                        },
                        homeDeliveryPremiumDetail: {
                            phoneNumber: {
                                areaCode: '',
                                extension: '',
                                countryCode: '',
                                personalIdentificationNumber: '',
                                localNumber: ''
                            },
                            shipTimestamp: '',
                            homedeliveryPremiumType: ''
                        },
                        specialServiceTypes: ['']
                    },
                    customsClearanceDetail: {
                        commercialInvoice: {
                            shipmentPurpose: ''
                        },
                        freightOnValue: '',
                        dutiesPayment: {
                            payor: {
                                responsibleParty: {
                                    address: {
                                        city: '',
                                        stateOrProvinceCode: '',
                                        postalCode: '',
                                        countryCode: '',
                                        residential: false
                                    },
                                    contact: {
                                        personName: '',
                                        emailAddress: '',
                                        phoneNumber: '',
                                        phoneExtension: '',
                                        faxNumber: '',
                                        companyName: ""
                                    },
                                    accountNumber: {
                                        value: ''
                                    }
                                }
                            },
                            paymentType: ''
                        },
                        commodities: [{
                            description: '',
                            weight: {
                                units: '',
                                value: ''
                            },
                            quantity: 55,
                            customsValue: {
                                amount: 55,
                                currency: ''
                            },
                            unitPrice: {
                                amount: '',
                                currency: ''
                            },
                            numberOfPieces: 45,
                            countryOfManufacture: '',
                            quantityUnits: '',
                            name: '',
                            harmonizedCode: '',
                            partNumber: ''
                        }]
                    },
                    groupShipment: false,
                    groundShipment: false,
                },
                carrierCodes: ['']

            };
            const response = await axios.post(url, body, {
                headers: {
                    "Content-Type": 'application/json',
                    Authorization: `Bearer ${token}`,
                    'x-customer-transaction-id': '',
                    'x-locale': ''
                }
            });
            return response.data;
        } catch (error: any) {
            if (error.response) {
                throw new Error(JSON.stringify(error.response.data));

            } else if (error.request) {
                throw new Error(JSON.stringify(error.message));

            } else {
                throw new Error(JSON.stringify(error.message));

            }
        }
    }
    createShipment = async (data: any) => {
        try {
            const token = await this.generateToken(data.credentials);
            const url = '   https://apis-sandbox.fedex.com/ship/v1/shipments';
            const body = {
                mergeLabelDocOption: "",
                labelResponseOptions: '',
                shipAction: '',
                processingOptionType: '',
                oneLabelAtATime: false,
                accountNumber: {
                    value: ''
                },
                requestedShipment: {
                    shipDatestamp: '',
                    totalDeclaredValue: {
                        amount: 54,
                        currency: ''
                    },
                    shipper: {
                        address: {
                            streetLines: [],
                            city: '',
                            stateOrProvinceCode: '',
                            postalCode: '',
                            countryCode: '',
                            residential: false

                        },
                        contact: {
                            personName: '',
                            emailAddress: '',
                            phoneExtension: '',
                            phoneNumber: '',
                            companyName: ''
                        },
                        tins: [{
                            number: '',
                            tinType: '',
                            usage: '',
                            effectiveDate: '',
                            expirationDate: ''
                        }]
                    },
                    soldTo: {
                        address: {
                            address: {
                                streetLines: [],
                                city: '',
                                stateOrProvinceCode: '',
                                postalCode: '',
                                countryCode: '',
                                residential: false
                            },
                            contact: {
                                personName: '',
                                emailAddress: '',
                                phoneExtension: '',
                                phoneNumber: '',
                                companyName: ''
                            },
                            tins: [{
                                number: '',
                                tinType: '',
                                usage: '',
                                effectiveDate: '',
                                expirationDate: ''
                            }],
                            accountNumber: {
                                value: ''
                            }
                        }
                    },
                    recipients: [{
                        address: {
                            address: {
                                streetLines: [],
                                city: '',
                                stateOrProvinceCode: '',
                                postalCode: '',
                                countryCode: '',
                                residential: false
                            }
                        },
                        contact: {
                            personName: '',
                            emailAddress: '',
                            phoneExtension: '',
                            phoneNumber: '',
                            companyName: ''
                        },
                        tins: [{
                            number: '',
                            tinType: '',
                            usage: '',
                            effectiveDate: '',
                            expirationDate: ''
                        }],
                        deliveryInstructions: ''
                    }],
                    recipientLocationNumber: '',
                    pickupType: '',
                    serviceType: '',
                    packagingType: '',
                    totalWeight: 66,
                    origin: {
                        contact: {
                            personName: '',
                            emailAddress: '',
                            phoneExtension: '',
                            phoneNumber: '',
                            companyName: '',
                            faxNumber: ''
                        },
                        address: {
                            streetLines: [],
                            city: '',
                            stateOrProvinceCode: '',
                            postalCode: '',
                            countryCode: '',
                            residential: false
                        }
                    },
                    shippingChargesPayment: {
                        paymentType: '',
                        payor: {
                            responsibleParty: {
                                address: {
                                    streetLines: [],
                                    city: '',
                                    stateOrProvinceCode: '',
                                    postalCode: '',
                                    countryCode: '',
                                    residential: false
                                },
                                contact: {
                                    personName: '',
                                    emailAddress: '',
                                    phoneExtension: '',
                                    phoneNumber: '',
                                    companyName: ''
                                },
                                accountNumber: {
                                    value: ''
                                }
                            }
                        }
                    },
                    shipmentSpecialServices: {
                        specialServiceTypes: [''],
                        etdDetail: {
                            attributes: [''],
                            attachedDocuments: [{
                                documentType: '',
                                documentReference: '',
                                description: '',
                                documentId: ''
                            }],
                            requestedDocumentTypes: ['']

                        },
                        returnShipmentDetails: {
                            returnEmailDetail: {
                                merchantPhoneNumber: '',
                                allowedSpecialService: ['']
                            },
                            rma: {
                                reason: ''
                            },
                            returnAssociationDetail: {
                                shipDatestamp: '',
                                trackingNumber: ''
                            },
                            returnType: ''
                        },
                        deliveryOnInvoiceAcceptanceDetail: {
                            recipient: {
                                address: {
                                    streetLines: [],
                                    city: '',
                                    stateOrProvinceCode: '',
                                    postalCode: '',
                                    countryCode: '',
                                    residential: false
                                },
                                contact: {
                                    personName: '',
                                    emailAddress: '',
                                    phoneExtension: '',
                                    phoneNumber: '',
                                    companyName: ''
                                },
                                tins: [{
                                    number: '',
                                    tinType: '',
                                    usage: '',
                                    effectiveDate: '',
                                    expirationDate: ''
                                }],
                                deliveryInstructions: ''

                            }
                        },
                        internationalTrafficInArmsRegulationsDetail: {
                            licenseOrExemptionNumber: ''
                        },
                        pendingShipmentDetail: {
                            pendingShipmentType: '',
                            processingOptions: {
                                options: [''],

                            },
                            recommendedDocumentSpecification: {
                                types: ['']
                            },
                            emailLabelDetails: {
                                recipients: [{
                                    emailAddress: '',
                                    role: '',
                                    locale: '',
                                    optionsRequested: {
                                        options: ['']
                                    }
                                }],
                                message: ''
                            },
                            attachedDocuments: [{
                                documentType: '',
                                documentReference: '',
                                description: '',
                                documentId: ''
                            }],
                            expirationTimeStamp: ''
                        },
                        holdAtLocationDetail: {
                            locationId: '',
                            locationContactAndAddress: {
                                contact: {
                                    personName: '',
                                    emailAddress: '',
                                    phoneExtension: '',
                                    phoneNumber: '',
                                    companyName: '',
                                    faxNumber: ''
                                },
                                address: {
                                    streetLines: [],
                                    city: '',
                                    stateOrProvinceCode: '',
                                    postalCode: '',
                                    countryCode: '',
                                    residential: false
                                }
                            },
                            locationType: ''
                        },
                        shipmentCODDetail: {
                            addTransportationChargesDetail: {
                                rateType: '',
                                rateLevelType: '',
                                chargeLevelType: '',
                                chargeType: ''
                            },
                            codRecipient: {
                                address: {
                                    streetLines: [''],
                                    city: '',
                                    stateOrProvinceCode: '',
                                    postalCode: '',
                                    countryCode: '',
                                    residential: false
                                },
                                contact: {
                                    personName: '',
                                    emailAddress: '',
                                    phoneExtension: '',
                                    phoneNumber: '',
                                    companyName: ''
                                },
                                accountNumber: {
                                    value: ''
                                },
                                tins: [{
                                    number: '',
                                    tinType: '',
                                    usage: '',
                                    effectiveDate: '',
                                    expirationDate: ''
                                }]
                            },
                            remitToName: '',
                            codCollectionType: '',
                            financialInstitutionContactAndAddress: {
                                contact: {
                                    personName: '',
                                    emailAddress: '',
                                    phoneExtension: '',
                                    phoneNumber: '',
                                    companyName: '',
                                    faxNumber: ''
                                },
                                address: {
                                    streetLines: [''],
                                    city: '',
                                    stateOrProvinceCode: '',
                                    postalCode: '',
                                    countryCode: '',
                                    residential: false
                                }
                            },
                            codCollectionAmount: {
                                amount: 514,
                                currency: ''
                            },
                            returnReferenceIndicatorType: '',
                            shipmentCodAmount: {
                                amount: 514,
                                currency: ''
                            }
                        },
                        shipmentDryIceDetail: {
                            totalWeight: {
                                units: '',
                                value: 524
                            },
                            packageCount: 5

                        },
                        internationalControlledExportDetail: {
                            licenseOrPermitExpirationDate: '',
                            licenseOrPermitNumber: '',
                            entryNumber: '',
                            foreignTradeZoneCode: '',
                            type: ''
                        },
                        homeDeliveryPremiumDetail: {
                            deliveryDate: '',
                            homedeliveryPremiumType: "",
                            phoneNumber: {
                                areaCode: '',
                                localNumber: '',
                                extension: '',
                                personalIdentificationNumber: ''

                            }

                        }


                    },
                    emailNotificationDetail: {
                        aggregationType: '',
                        personalMessage: '',
                        emailNotificationRecipients: [
                            {
                                name: '',
                                emailNotificationRecipientType: '',
                                emailAddress: '',
                                notificationFormatType: '',
                                notificationType: '',
                                locale: '',
                                notificationEventType: ['']
                            }
                        ]
                    },
                    expressFreightDetail: {
                        bookingConfirmationNumber: '',
                        shippersLoadAndCount: 12,
                        packingListEnclosed: false
                    },
                    variableHandlingChargeDetail: {
                        rateType: '',
                        percentValue: 4,
                        rateLevelType: '',
                        rateElementBasis: '',
                        fixedValue: {
                            amount: 6,
                            currency: ''
                        }
                    },
                    customsClearanceDetail: {
                        regulatoryControls: [''],
                        brokers: [{
                            type: '',
                            broker: {
                                address: {
                                    streetLines: [''],
                                    city: '',
                                    stateOrProvinceCode: '',
                                    postalCode: '',
                                    countryCode: '',
                                    residential: false
                                },
                                contact: {
                                    personName: '',
                                    emailAddress: '',
                                    phoneExtension: '',
                                    phoneNumber: '',
                                    companyName: ''
                                },
                                accountNumber: {
                                    value: ''
                                },
                                tins: {
                                    number: '',
                                    tinType: '',
                                    usage: '',
                                    effectiveDate: '',
                                    expirationDate: ''
                                }
                            }

                        }],
                        commercialInvoice: {
                            originatorName: '',
                            comments: [''],
                            customerReferences: [{
                                customerReferenceType: '',
                                value: ''
                            }],
                            taxesOrMiscellaneousCharge: {
                                amount: 45,
                                currency: ''
                            },
                            taxesOrMiscellaneousChargeType: '',
                            freightCharge: {
                                amount: 5,
                                currency: ''
                            },
                            packingCosts: {
                                amount: 5,
                                currency: ''
                            },
                            handlingCosts: {
                                amount: 4,
                                currency: ""
                            },
                            declarationStatement: '',
                            termsOfSale: '',
                            specialInstructions: '',
                            shipmentPurpose: '',
                            emailNotificationDetail: {
                                emailAddress: '',
                                type: '',
                                recipientType: ''
                            }
                        },
                        freightOnValue: '',
                        dutiesPayment: {
                            payor: {
                                responsibleParty: {
                                    address: {
                                        streetLines: [''],
                                        city: '',
                                        stateOrProvinceCode: '',
                                        postalCode: '',
                                        countryCode: '',
                                        residential: false
                                    },
                                    contact: {
                                        personName: '',
                                        emailAddress: '',
                                        phoneExtension: '',
                                        phoneNumber: '',
                                        companyName: '',
                                        faxNumber: ''
                                    },
                                    accountNumber: {
                                        value: ''
                                    },
                                    tins: {
                                        number: '',
                                        tinType: '',
                                        usage: '',
                                        effectiveDate: '',
                                        expirationDate: ''
                                    }
                                }
                            },
                            paymentType: '',
                            billingDetails: {
                                billingCode: '',
                                billingType: '',
                                aliasId: '',
                                accountNickname: '',
                                accountNumber: '',
                                accountNumberCountryCode: ''
                            }
                        },
                        commodities: [{
                            unitPrice: {
                                amount: 6,
                                currency: ''
                            },
                            additionalMeasures: [{
                                quantity: 4,
                                units: ''
                            }],
                            numberOfPieces: 6,
                            quantity: 5,
                            quantityUnits: '',
                            customsValue: {
                                amount: 6,
                                currency: ''
                            },
                            countryOfManufacture: '',
                            cIMarksAndNumbers: '',
                            harmonizedCode: '',
                            description: '',
                            name: '',
                            weight: {
                                units: '',
                                value: 84
                            },
                            exportLicenseNumber: '',
                            exportLicenseExpirationDate: '',
                            partNumber: '',
                            purpose: '',
                            usmcaDetail: {
                                originCriterion: ''
                            }

                        }],
                        isDocumentOnly: false,
                        recipientCustomsId: {
                            type: '',
                            value: ''
                        },
                        customsOption: {
                            description: '',
                            type: ''
                        },
                        importerOfRecord: {
                            address: {
                                streetLines: [''],
                                city: '',
                                stateOrProvinceCode: '',
                                postalCode: '',
                                countryCode: '',
                                residential: false
                            },
                            contact: {
                                personName: '',
                                emailAddress: '',
                                phoneExtension: '',
                                phoneNumber: '',
                                companyName: ''
                            },
                            accountNumber: {
                                value: ''
                            },
                            tins: {
                                number: '',
                                tinType: '',
                                usage: '',
                                effectiveDate: '',
                                expirationDate: ''
                            }
                        },
                        generatedDocumentLocale: '',
                        exportDetail: {
                            permitNumber: '',
                            exportComplianceStatement: '',
                            b13AFilingOption: '',
                            destinationControlDetail: {
                                endUser: '',
                                statementTypes: '',
                                destinationCountries: ['']
                            }
                        },
                        totalCustomsValue: {
                            amount: 5,
                            currency: ''
                        },
                        partiesToTransactionAreRelated: false,
                        declarationStatementDetail: {
                            usmcaLowValueStatementDetail: {
                                countryOfOriginLowValueDocumentRequested: false,
                                customsRole: ''
                            }
                        },
                        insuranceCharge: {
                            amount: 54,
                            currency: ''
                        }
                    },
                    smartPostInfoDetail: {
                        ancillaryEndorsement: '',
                        hubId: '',
                        indicia: '',
                        specialServices: ''
                    },
                    blockInsightVisibility: false,
                    labelSpecification: {
                        labelFormatType: '',
                        labelOrder: '',
                        customerSpecifiedDetail: {
                            maskedData: [''],
                            regulatoryLabels: [{
                                generationOptions: '',
                                type: ''
                            }],
                            additionalLabels: [{
                                type: '',
                                count: 4,

                            }],
                            docTabContent: {
                                docTabContentType: '',
                                zone001: {
                                    docTabZoneSpecifications: [{
                                        zoneNumber: 5,
                                        header: '',
                                        dataField: '',
                                        literalValue: '',
                                        justification: ''
                                    }]
                                },
                                barcoded: {
                                    symbology: '',
                                    specification: {
                                        zoneNumber: '',
                                        header: '',
                                        dataField: '',
                                        literalValue: '',
                                        justification: ''
                                    }
                                }
                            }
                        },
                        printedLabelOrigin: {
                            address: {
                                streetLines: [''],
                                city: '',
                                stateOrProvinceCode: '',
                                postalCode: '',
                                countryCode: '',
                                residential: false
                            },
                            contact: {
                                personName: '',
                                emailAddress: '',
                                phoneExtension: '',
                                phoneNumber: '',
                                companyName: '',
                                faxNumber: ''
                            }
                        },
                        labelStockType: '',
                        labelRotation: '',
                        imageType: '',
                        labelPrintingOrientation: '',
                        returnedDispositionDetail: false
                    },
                    shippingDocumentSpecification: {
                        generalAgencyAgreementDetail: {
                            documentFormat: {
                                provideInstructions: false,
                                optionsRequested: {
                                    options: ['']
                                },
                                stockType: '',
                                dispositions: [{
                                    eMailDetail: {
                                        locale: '',
                                        grouping: '',
                                        eMailRecipients: [{
                                            emailAddress: '',
                                            recipientType: ''
                                        }]
                                    },
                                    dispositionType: ''
                                }],
                                locale: '',
                                docType: ''
                            }
                        },
                        returnInstructionsDetail: {
                            customText: '',
                            documentFormat: {
                                provideInstructions: false,
                                optionsRequested: {
                                    options: ['']
                                },
                                stockType: '',
                                locale: '',
                                docType: '',
                                dispositions: [{
                                    eMailDetail: {
                                        eMailRecipients: [{
                                            emailAddress: '',
                                            recipientType: ''
                                        }],
                                        locale: '',
                                        grouping: ''
                                    },
                                    dispositionType: ''
                                }]
                            },
                            op900Detail: {
                                customerImageUsages: [{
                                    id: '',
                                    type: '',
                                    providedImageType: ''
                                }],
                                signatureName: '',
                                documentFormat: {
                                    provideInstructions: false,
                                    optionsRequested: {
                                        options: ['']
                                    },
                                    stockType: '',
                                    locale: '',
                                    docType: '',
                                    dispositions: [{
                                        eMailDetail: {
                                            eMailRecipients: [{
                                                emailAddress: '',
                                                recipientType: ''
                                            }],
                                            locale: '',
                                            grouping: ''
                                        },
                                        dispositionType: ''
                                    }]
                                }
                            },
                            usmcaCertificationOfOriginDetail: {
                                customerImageUsages: [{
                                    id: '',
                                    type: '',
                                    providedImageType: ' '
                                }],
                                documentFormat: {
                                    provideInstructions: false,
                                    optionsRequested: {
                                        options: ['']
                                    },
                                    stockType: '',
                                    locale: '',
                                    docType: '',
                                    dispositions: [{
                                        eMailDetail: {
                                            eMailRecipients: [{
                                                emailAddress: '',
                                                recipientType: ''
                                            }],
                                            locale: '',
                                            grouping: ''
                                        },
                                        dispositionType: ''
                                    }]
                                },
                                certifierSpecification: '',
                                importerSpecification: '',
                                producerSpecification: '',
                                producer: {
                                    address: {
                                        streetLines: [''],
                                        city: '',
                                        stateOrProvinceCode: '',
                                        postalCode: '',
                                        countryCode: '',
                                        residential: false,
                                        geographicCoordinates: ''
                                    },
                                    contact: {
                                        personName: '',
                                        emailAddress: '',
                                        phoneExtension: '',
                                        phoneNumber: '',
                                        companyName: '',
                                        faxNumber: ''
                                    },
                                    tins: {
                                        number: '',
                                        tinType: '',
                                        usage: '',
                                        effectiveDate: '',
                                        expirationDate: ''
                                    }
                                },
                                blanketPeriod: {
                                    begins: '',
                                    ends: ''
                                },
                                certifierJobTitle: ''
                            },
                            usmcaCommercialInvoiceCertificationOfOriginDetail: {
                                customerImageUsages: [{
                                    id: '',
                                    type: '',
                                    providedImageType: ' '
                                }],
                                documentFormat: {
                                    provideInstructions: false,
                                    optionsRequested: {
                                        options: ['']
                                    },
                                    stockType: '',
                                    locale: '',
                                    docType: '',
                                    dispositions: [{
                                        eMailDetail: {
                                            eMailRecipients: [{
                                                emailAddress: '',
                                                recipientType: ''
                                            }],
                                            locale: '',
                                            grouping: ''
                                        },
                                        dispositionType: ''
                                    }]
                                },
                                certifierSpecification: '',
                                importerSpecification: '',
                                producerSpecification: '',
                                producer: {
                                    address: {
                                        streetLines: [''],
                                        city: '',
                                        stateOrProvinceCode: '',
                                        postalCode: '',
                                        countryCode: '',
                                        residential: false,
                                        geographicCoordinates: ''
                                    },
                                    contact: {
                                        personName: '',
                                        emailAddress: '',
                                        phoneExtension: '',
                                        phoneNumber: '',
                                        companyName: '',
                                        faxNumber: ''
                                    },
                                    tins: {
                                        number: '',
                                        tinType: '',
                                        usage: '',
                                        effectiveDate: '',
                                        expirationDate: ''
                                    }
                                },
                                blanketPeriod: {
                                    begins: '',
                                    ends: ''
                                },
                                certifierJobTitle: ''
                            },
                            shippingDocumentTypes: '',
                            certificateOfOrigin: {
                                customerImageUsages: [{
                                    id: '',
                                    type: '',
                                    providedImageType: ' '
                                }],
                                documentFormat: {
                                    provideInstructions: false,
                                    optionsRequested: {
                                        options: ['']
                                    },
                                    stockType: '',
                                    locale: '',
                                    docType: '',
                                    dispositions: [{
                                        eMailDetail: {
                                            eMailRecipients: [{
                                                emailAddress: '',
                                                recipientType: ''
                                            }],
                                            locale: '',
                                            grouping: ''
                                        },
                                        dispositionType: ''
                                    }]
                                }
                            },
                            commercialInvoiceDetail: {
                                customerImageUsages: [{
                                    id: '',
                                    type: '',
                                    providedImageType: ' '
                                }],
                                documentFormat: {
                                    provideInstructions: false,
                                    optionsRequested: {
                                        options: ['']
                                    },
                                    stockType: '',
                                    locale: '',
                                    docType: '',
                                    dispositions: [{
                                        eMailDetail: {
                                            eMailRecipients: [{
                                                emailAddress: '',
                                                recipientType: ''
                                            }],
                                            locale: '',
                                            grouping: ''
                                        },
                                        dispositionType: ''
                                    }]
                                }
                            }

                        }
                    },
                    rateRequestType: [''],
                    preferredCurrency: '',
                    totalPackageCount: 5,
                    masterTrackingId: {
                        formId: '',
                        trackingIdType: '',
                        uspsApplicationId: '',
                        trackingNumber: ''
                    },
                    requestedPackageLineItems: [{
                        sequenceNumber: 5,
                        subPackagingType: '',
                        customerReferences: [{
                            customerReferenceType: '',
                            value: ''
                        }],
                        declaredValue: {
                            amount: 5,
                            currency: ''
                        },
                        weight: {
                            units: '',
                            value: 5
                        },
                        dimensions: {
                            length: 54,
                            width: 5,
                            height: 6,
                            units: ''
                        },
                        groupPackageCount: 4,
                        itemDescriptionForClearance: '',
                        contentRecord: [{
                            itemNumber: '',
                            receivedQuantity: 5,
                            description: '',
                            partNumber: ''
                        }],
                        itemDescription: '',
                        trackingNumber: '',
                        variableHandlingChargeDetail: {
                            rateType: '',
                            percentValue: '',
                            rateLevelType: '',
                            rateElementBasis: '',
                            fixedValue: {
                                amount: 55,
                                currency: ''
                            }
                        },
                        packageSpecialServices: {
                            specialServiceTypes: [''],
                            signatureOptionType: '',
                            priorityAlertDetail: {
                                enhancementTypes: [''],
                                content: ['']
                            },
                            signatureOptionDetail: {
                                signatureReleaseNumber: ''
                            },
                            alcoholDetail: {
                                alcoholRecipientType: '',
                                shipperAgreementType: ''
                            },
                            dangerousGoodsDetail: {
                                cargoAircraftOnly: false,
                                accessibility: '',
                                options: ['']
                            },
                            packageCODDetail: {
                                codCollectionAmount: {
                                    amount: 5,
                                    currency: ''
                                }
                            },
                            pieceCountVerificationBoxCount: 5,
                            batteryDetails: [{
                                batteryPackingType: '',
                                batteryRegulatoryType: '',
                                batteryMaterialType: ''
                            }],
                            dryIceWeight: {
                                units: '',
                                value: 6
                            }
                        }



                    }]


                }
            };
            const response = await axios.post(url, body, {
                headers: {
                    "Content-Type": 'application/json',
                    Authorization: `Bearer ${token}`,
                    'x-customer-transaction-id': '',
                    'x-locale': ''
                }
            });
            return response.data;
        } catch (error: any) {
            if (error.response) {
                throw new Error(JSON.stringify(error.response.data));

            } else if (error.request) {
                throw new Error(JSON.stringify(error.message));

            } else {
                throw new Error(JSON.stringify(error.message));

            }
        }
    }
    cancelShipment = async (data: any) => {
        try {
            const token = await this.generateToken(data.credentials);
            const url = 'https://apis-sandbox.fedex.com/ship/v1/shipments/cancel';
            const body = {
                accountNumber: {
                    value: ''
                },
                emailShipment: false,
                senderCountryCode: '',
                deletionControl: '',
                trackingNumber: ''
            };
            const response = await axios.put(url, body, {
                headers: {
                    "Content-Type": 'application/json',
                    Authorization: `Bearer ${token}`,
                    'x-customer-transaction-id': '',
                    'x-locale': ''
                }
            });
            return response.data;
        } catch (error: any) {
            if (error.response) {
                throw new Error(JSON.stringify(error.response.data));

            } else if (error.request) {
                throw new Error(JSON.stringify(error.message));

            } else {
                throw new Error(JSON.stringify(error.message));

            }
        }
    }
    trackByTrackingNumber = async (data: any) => {
        try {
            const token = await this.generateToken(data.credentials);
            const url = 'https://apis-sandbox.fedex.com/track/v1/trackingnumbers';
            const body = {
                includeDetailedScans: false,
                trackingInfo: [{
                    shipDateBegin: '',
                    shipDateEnd: '',
                    trackingNumberInfo: {
                        trackingNumber: '',
                        carrierCode: '',
                        trackingNumberUniqueId: ''
                    }
                }]
            };
            const response = await axios.post(url, body, {
                headers: {
                    "Content-Type": 'application/json',
                    Authorization: `Bearer ${token}`,
                    'x-customer-transaction-id': '',
                    'x-locale': ''
                }
            });
            return response.data;
        } catch (error: any) {
            if (error.response) {
                throw new Error(JSON.stringify(error.response.data));

            } else if (error.request) {
                throw new Error(JSON.stringify(error.message));

            } else {
                throw new Error(JSON.stringify(error.message));

            }
        }
    }
    validatePostal = async (data: any) => {
        try {
            const token = await this.generateToken(data.credentials);
            const url = 'https://apis-sandbox.fedex.com/rate/v1/rates/quotes';
            const body = {
                carrierCode: '',
                countryCode: '',
                stateOrProvinceCode: '',

                postalCode: '',
                shipDate: '',
                routingCode: '',
                checkForMismatch: false


            };
            const response = await axios.post(url, body, {
                headers: {
                    "Content-Type": 'application/json',
                    Authorization: `Bearer ${token}`,
                    'x-customer-transaction-id': '',

                    'x-locale': ''

                }
            });
            return response.data;
        } catch (error: any) {
            if (error.response) {
                throw new Error(JSON.stringify(error.response.data));

            } else if (error.request) {
                throw new Error(JSON.stringify(error.message));

            } else {
                throw new Error(JSON.stringify(error.message));

            }
        }
    }
    validateAddress = async (data: any) => {
        try {
            const token = await this.generateToken(data.credentials);
            const url = 'https://apis-sandbox.fedex.com/address/v1/addresses/resolve';
            const body = {
                inEffectAsOfTimestamp: '',
                validateAddressControlParameters: {
                    includeResolutionTokens: false
                },
                addressesToValidate: [{
                    address: {
                        city: '',
                        stateOrProvinceCode: '',
                        postalCode: '',
                        countryCode: '',
                        streetLines: ['']
                    },
                    contact: {
                        personName: '',
                        parsedPersonName: {
                            firstName: '',
                            middleName: '',
                            lastName: '',
                            suffix: ''
                        },
                        companyName: '',
                        phoneNumber: '',
                        phoneExtension: '',
                        emailAddress: '',
                        faxNumber: '',
                        contactId: '',
                        stateTaxId: '',
                        fedralTaxId: ''
                    },
                    contactAncillaryDetail: {
                        emailAddresses: [{
                            emailNotificationFormatType: '',
                            address: '',
                            permissions: ''
                        }],
                        socialMediaDeails: [{
                            attributes: '',
                            platformId: ''


                        }],
                        gender: '',
                        prefix: '',
                        phoneNumberDetails: [{
                            number: {
                                areaCode: '',
                                extension: '',
                                countryCode: '',
                                personalIdentificationNumber: '',
                                localNumber: ''
                            },
                            permissions: '',
                            usage: '',
                            type: '',
                            phoneNotificationFormatType: ''
                        }],
                        companyName: {
                            division: '',
                            companyCd: '',
                            name: '',
                            department: '',
                            storeId: ''
                        },
                        title: ''
                    },
                    clientReferenceId: '',
                    urbanizationCode: '',
                    addressAncillaryDetail: {
                        locationInCity: '',
                        suite: '',
                        addressVerificationOverrideReason: '',
                        locationInProperty: '',
                        addtionalDescriptions: '',
                        department: '',
                        roomFloor: '',
                        crossStreet: '',
                        building: '',
                        apartment: '',
                        room: ''
                    }
                }]


            };
            const response = await axios.post(url, body, {
                headers: {
                    "Content-Type": 'application/json',
                    Authorization: `Bearer ${token}`,
                    'x-customer-transaction-id': '',

                    'x-locale': ''

                }
            });
            return response.data;
        } catch (error: any) {
            if (error.response) {
                throw new Error(JSON.stringify(error.response.data));

            } else if (error.request) {
                throw new Error(JSON.stringify(error.message));

            } else {
                throw new Error(JSON.stringify(error.message));

            }
        }
    }
    createPickup = async (data: any) => {
        try {


            const token = await this.generateToken(data.credentials);
            const url = `https://apis-sandbox.fedex.com/pickup/v1/pickups`;
            const body = {
                associatedAccountNumber: {
                    value: data.associatedAccountNumber

                },

                originDetail: {
                    pickupAddressType: '',

                    pickupLocation: {
                        contact: {
                            companyName: data.companyName,
                            personName: data.personName,


                            phoneNumber: data.phoneNumber,

                            phoneExtenxion: data.phoneExtenxion

                        },

                        address: {
                            streetLines: [data.streetAddress],

                            urbanizationCode: '',

                            city: data.city,

                            stateOrProvinceCode: data.stateOrProvinceCode,

                            postalCode: data.postalCode,

                            countryCode: data.countryCode,

                            residential: false,

                            addressClassification: ''

                        },

                        accountNumber: {
                            value: ''

                        },

                        deliveryInstructions: ''

                    },
                    readyDateTimestamp: data.readyDateTimestamp,

                    customerCloseTime: data.customerCloseTime,

                    pickupDateType: '',

                    packageLocation: '',

                    buildingPart: '',

                    buildingPartDescription: '',
                    earlyPickup: false,
                    suppliesRequested: '',
                    geographicalPostalCode: ''
                },
                associatedAccountNumberType: '',
                totalWeight: {
                    units: '',
                    value: 54
                },
                packageCount: 54,

                carrierCode: data.carrierCode,
                accountAddressOfRecord: {
                    streetLines: [''],
                    city: '',
                    stateOrProvinceCode: '',
                    postalCode: '',
                    countryCode: '',
                    residential: false,
                    addressClassification: '',
                },
                remarks: '',
                countryRelationships: '',
                pickupType: '',
                trackingNumber: '',
                commodityDescription: '',
                expressFreightDetail: {
                    truckType: '',
                    service: '',
                    trailerLength: '',
                    bookingNumber: '',
                    dimensions: {
                        length: 56,
                        width: 415,
                        height: 15,
                        unit: ''
                    }
                },
                oversizePackageCount: 45,
                pickupNotificationDetail: {
                    emailDetails: [{
                        address: '',
                        locale: ''
                    }
                    ],
                    format: '',
                    userMessage: ''
                }
            };
            const response = await axios.post(url, body, {
                headers: {
                    "Content-Type": 'application/json',
                    Authorization: `Bearer ${token}`,
                    'x-customer-transaction-id': '',
                    'x-locale': ''
                }
            });
            return response.data;
        } catch (error: any) {
            if (error.response) {
                throw new Error(JSON.stringify(error.response.data));

            } else if (error.request) {
                throw new Error(JSON.stringify(error.message));

            } else {
                throw new Error(JSON.stringify(error.message));

            }
        }
    }
    checkPickupAvailability = async (data: any) => {
        try {
            const token = await this.generateToken(data.credentials);
            const url = `https://apis-sandbox.fedex.com/pickup/v1/pickups/availabilities`;
            const body = {
                pickupAddress: {
                    streetLines: ['jhsbdiubg'],
                    city: '',
                    stateOrProvinceCode: '',
                    postalCode: '',
                    countryCode: '',
                    urbanizationCode: '',
                    residential: false,
                    addressClassification: 'MIXED or UNKNOWN or BUSINESS or RESIDENTIAL'
                },
                dispatchDate: '',
                packageReadyTime: '',
                customerCloseTime: '',
                pickupType: '',
                pickupRequestType: '',
                shipmentAttributes: {
                    serviceType: '',
                    weight: {
                        units: '',
                        value: '',
                    },
                    packagingType: '',
                    dimensions: {
                        length: 15,
                        width: 5,
                        height: 51,
                        units: ''
                    }
                },
                numberOfBusinessDays: 6,
                packageDetails: [{
                    packageSpecialServices: {
                        specialServiceTypes: ['']
                    }
                }
                ],
                associatedAccountNumber: '',
                associatedAccountNumberType: '',
                carriers: [''],
                countryRelationship: ''
            };
            const response = await axios.post(url, body, {
                headers: {
                    "Content-Type": 'application/json',
                    Authorization: `Bearer ${token}`,
                    'x-customer-transaction-id': '',
                    'x-locale': ''

                }
            });
            return response.data;
        } catch (error: any) {
            if (error.response) {
                throw new Error(JSON.stringify(error.response.data));

            } else if (error.request) {
                throw new Error(JSON.stringify(error.message));

            } else {
                throw new Error(JSON.stringify(error.message));

            }
        }
    }
    cancelPickup = async (data: any) => {
        try {
            const token = await this.generateToken(data.credentials);
            const url = `https://apis-sandbox.fedex.com/pickup/v1/pickups/cancel`;
            const body = {
                associatedAccountNumber: {
                    value: data.associatedAccountNumber
                },
                pickupConfirmationCode: '',
                remarks: '',
                carrierCode: '',
                accountAddressOfRecord: {
                    streetLines: [''],
                    urbanizationCode: '',
                    city: '',
                    stateOrProvinceCode: '',
                    postalCode: '',
                    countryCode: '',
                    residential: false,
                    addressClassification: '',
                },
                scheduledDate: '',
                location: ''
            };
            const response = await axios.put(url, body, {
                headers: {
                    "Content-Type": 'application/json',
                    Authorization: `Bearer ${token}`,
                    'x-customer-transaction-id': '',
                    'x-locale': ''
                }
            });
            return response.data;
        } catch (error: any) {
            if (error.response) {
                throw new Error(JSON.stringify(error.response.data));

            } else if (error.request) {
                throw new Error(JSON.stringify(error.message));

            } else {
                throw new Error(JSON.stringify(error.message));

            }
        }
    }
    verifyCredentials = async (data: any) => {
        try {
            const token = await this.generateToken(data.credentials);
            const url = `https://apis-sandbox.fedex.com/pickup/v1/pickups/availabilities`;
            const body = {
                pickupAddress: {
                    streetLines: ['jhsbdiubg'],
                    city: '',
                    stateOrProvinceCode: '',
                    postalCode: '',
                    countryCode: '',
                    urbanizationCode: '',
                    residential: false,
                    addressClassification: 'MIXED or UNKNOWN or BUSINESS or RESIDENTIAL'
                },
                dispatchDate: '',
                packageReadyTime: '',
                customerCloseTime: '',
                pickupType: '',
                pickupRequestType: '',
                shipmentAttributes: {
                    serviceType: '',
                    weight: {
                        units: '',
                        value: '',
                    },
                    packagingType: '',
                    dimensions: {
                        length: 15,
                        width: 5,
                        height: 51,
                        units: ''
                    }
                },
                numberOfBusinessDays: 6,
                packageDetails: [{
                    packageSpecialServices: {
                        specialServiceTypes: ['']
                    }
                }
                ],
                associatedAccountNumber: '',
                associatedAccountNumberType: '',
                carriers: [''],
                countryRelationship: ''
            };
            await axios.post(url, body, {
                headers: {
                    "Content-Type": 'application/json',
                    Authorization: `Bearer ${token}`,
                    'x-customer-transaction-id': '',
                    'x-locale': ''

                }
            });
            return true;
        } catch (error: any) {
            if (error.response) {
                return false;

            } else if (error.request) {
                throw new Error(JSON.stringify(error.message));

            } else {
                throw new Error(JSON.stringify(error.message));

            }
        }
    }
}
export default Fedex;
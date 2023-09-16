declare class Fedex {
    constructor();
    generateToken: (data: any) => Promise<any>;
    rateAndTransitTime: (data: any) => Promise<any>;
    createShipment: (data: any) => Promise<any>;
    cancelShipment: (data: any) => Promise<any>;
    trackByTrackingNumber: (data: any) => Promise<any>;
    validatePostal: (data: any) => Promise<any>;
    validateAddress: (data: any) => Promise<any>;
    createPickup: (data: any) => Promise<any>;
    checkPickupAvailability: (data: any) => Promise<any>;
    cancelPickup: (data: any) => Promise<any>;
    verifyCredentials: (data: any) => Promise<boolean>;
}
export default Fedex;

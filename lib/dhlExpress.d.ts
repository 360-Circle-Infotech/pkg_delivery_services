declare class DHLExpress {
    constructor();
    generateAuthorizationHeader: (data: any) => Promise<string>;
    getRates: (data: any) => Promise<any>;
    landedCost: (data: any) => Promise<any>;
    getAvailableProducts: (data: any) => Promise<any>;
    createShipment: (data: any) => Promise<any>;
    trackShipment: (data: any) => Promise<any>;
    validateAddress: (data: any) => Promise<any>;
    createPickup: (data: any) => Promise<any>;
    updatePickup: (data: any) => Promise<any>;
    cancelPickup: (data: any) => Promise<any>;
}
export default DHLExpress;

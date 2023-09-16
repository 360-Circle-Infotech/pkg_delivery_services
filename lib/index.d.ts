declare class Delivery {
    constructor();
    createShipment: (provider: string, providerData: any) => Promise<any>;
    cancelShipment: (provider: string, providerData: any) => Promise<any>;
    rateAndDeliveryTime: (provider: string, providerData: any) => Promise<any>;
    trackShipment: (provider: string, providerData: any) => Promise<any>;
    availableProducts: (provider: string, providerData: any) => Promise<any>;
    checkPickupAvailibility: (provider: string, providerData: any) => Promise<any>;
    createPickup: (provider: string, providerData: any) => Promise<any>;
    updatePickup: (provider: string, providerData: any) => Promise<any>;
    cancelPickup: (provider: string, providerData: any) => Promise<any>;
    validateAddress: (provider: string, providerData: any) => Promise<any>;
    validatePostalCode: (provider: string, providerData: any) => Promise<any>;
    verifyCredentials: (provider: string, providerData: any) => Promise<boolean | undefined>;
}
export default Delivery;

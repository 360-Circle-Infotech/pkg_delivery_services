declare class Delivery {
    constructor();
    verifyCredentials: (provider: string, providerData: any) => Promise<boolean | undefined>;
    getQuote: (providerData: any) => Promise<void>;
    createOrder: (providerData: any) => Promise<void>;
    initiateFlow: (providerData: any) => Promise<void>;
    trackOrder: (providerData: any) => Promise<void>;
    cancelOrder: (providerData: any) => Promise<void>;
}
export default Delivery;

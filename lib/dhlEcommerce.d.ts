declare class DHLEcommerce {
    constructor();
    generateToken: (data: any) => Promise<any>;
    registerPickup: (data: any) => Promise<void>;
}
export default DHLEcommerce;

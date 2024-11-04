declare class Delivery {
    constructor();
    AllDelivery: (provider: string, providerData: any) => Promise<any>;
}
export default Delivery;

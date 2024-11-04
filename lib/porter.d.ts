declare class PORTER {
    private apiUrl;
    constructor();
    private generateRequestId;
    private sendRequest;
    verifyCredentials(providerData: any): Promise<boolean>;
    getQuote(providerData: any): Promise<any>;
    createOrder(providerData: any): Promise<any>;
    private validateOrderRequest;
    initiate_flow(providerData: any): Promise<any>;
    trackOrder(providerData: any): Promise<any>;
    cancelOrder(providerData: any): Promise<any>;
}
export default PORTER;

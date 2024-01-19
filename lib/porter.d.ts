interface CreateOrderRequest {
    request_id?: string;
    pickup_details: Address;
    drop_details: Address;
    additional_comments?: string | null;
    delivery_instructions?: DeliveryInstructions;
}
interface Address {
    address: AddressDetails;
}
interface AddressDetails {
    apartment_address?: string | null;
    street_address1: string;
    street_address2?: string | null;
    landmark?: string | null;
    city?: string | null;
    state?: string | null;
    pincode?: string | null;
    country?: string | null;
    lat: number;
    lng: number;
    contact_details: ContactDetails;
}
interface ContactDetails {
    name: string;
    phone_number: string;
}
interface DeliveryInstructions {
    instructions_list: Instruction[];
}
type Instruction = MessageInstruction;
interface MessageInstruction {
    type: string;
    description: string;
}
declare class PORTER {
    private apiUrl;
    constructor();
    private generateRequestId;
    private sendRequest;
    verifyCredentials(orderRequest: {
        "key": string;
        "data": any;
    }): Promise<boolean>;
    getQuote(orderRequest: {
        "key": string;
        "data": any;
    }): Promise<void>;
    createOrder(orderRequest: {
        "key": string;
        "data": CreateOrderRequest;
    }): Promise<void>;
    private validateOrderRequest;
    initiate_flow(orderRequest: {
        "key": string;
        "data": {
            "order_id": string;
            "flow_type": number;
        };
    }): Promise<void>;
    trackOrder(orderRequest: {
        "key": string;
        "data": string;
    }): Promise<void>;
    cancelOrder(orderRequest: {
        "key": string;
        "data": string;
    }): Promise<void>;
}
export default PORTER;

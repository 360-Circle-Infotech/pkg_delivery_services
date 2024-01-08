/* eslint-disable no-useless-catch */
import axios, { AxiosResponse } from "axios";



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


class PORTER {
	private apiUrl = 'https://pfe-apigw-uat.porter.in/';

	constructor() {
		// do nothing
	}

	private generateRequestId(): string {
		return 'Qafto-' + Date.now().toString(36) + Math.random().toString(36).substr(2);
	}

	private async sendRequest<T>(method: string, url: string, data?: any): Promise<T> {
		try {
			const response: AxiosResponse<T> = await axios({
				headers: {
					'x-api-key': '09470b91-a545-4097-82f2-8ce398bad705',
				},
				method,
				url: `${this.apiUrl}${url}`,
				data,
			});
			return response.data;
		} catch (error: any) {
			throw error.response || error.message || error;
		}
	}

	public async createOrder(orderRequest: CreateOrderRequest): Promise<void> {
		orderRequest.request_id = this.generateRequestId();
		this.validateOrderRequest(orderRequest);

		try {
			const data = await this.sendRequest<void>('post', 'v1/orders/create', orderRequest);
			return data;
		} catch (error) {
			console.error('Error creating order:', error);
			throw error;
		}
	}

	private validateOrderRequest(orderRequest: CreateOrderRequest): void {
		if (!orderRequest.request_id || typeof orderRequest.request_id !== 'string') {
			throw new Error('Invalid order request: requestId is required and must be a string.');
		}
		// Add more validation logic as needed for other properties
	}

	public async initiate_flow(orderRequest: { "order_id": string, "flow_type": number }): Promise<void> {
		try {
			const data = await this.sendRequest<void>('post', '/v1/simulation/initiate_order_flow', orderRequest);
			return data;
		} catch (error) {
			throw error
		}
	}

	public async trackOrder(orderRequest: string): Promise<void> {
		try {
			const data = await this.sendRequest<void>('get', `/v1.1/orders/${orderRequest}`);
			return data;
		} catch (error) {
			throw error
		}
	}

	public async cancelOrder(orderRequest: string): Promise<void> {
		try {
			const data = await this.sendRequest<void>('post', `/v1/orders/${orderRequest}/cancel`);
			return data;
		} catch (error) {
			throw error;
		}
	}

}

export default PORTER;
// @ts-ignore
import axios, { AxiosResponse } from "axios";
import { v4 as uuidv4 } from 'uuid';

class PORTER {
	private apiUrl = 'https://pfe-apigw-uat.porter.in';

	constructor() {
		// do nothing
	}

	private generateRequestId(): string {
		return 'Qafto-' + uuidv4().replace(/-/g, '').slice(0, 32);
	};

	private async sendRequest(method: string, url: string, data?: any) {
		try {
			// console.log(data, method, url, "Here is all the data");

			const response: AxiosResponse = await axios({
				headers: {
					'x-api-key': data?.key,
					'Content-Type': 'application/json'
				},
				method,
				url: `${this.apiUrl}${url}`,
				data: data?.data,
			});

			console.log("response", response);
			return response;
		}

		catch (error: any) {
			console.error("An error occurred:", error);
			throw error?.response || error?.message || error;
		}
	};

	public async verifyCredentials(providerData: any) {
		try {
			let orderRequest = {
				"pickup_details": {
					"lat": 12.935025018880504,
					"lng": 77.6092605236106
				},
				"drop_details": {
					"lat": 12.947146336879577,
					"lng": 77.62102993895199
				},
				"customer": {
					"name": "salik",
					"mobile": {
						"country_code": "+91",
						"number": "7678139714"
					}
				}
			};

			// Send request using POST method
			const data = await this.sendRequest('POST', '/v1/get_quote', { key: providerData?.key, data: orderRequest });
			console.log("Here comes true", data);
			return data?.status === 200;

		} catch (error: any) {
			console.error("Error verifying credentials:", error);
			if (error?.data) {
				return false;
			} else throw error;
		}
	}

	public async getQuote(providerData: any) {
		try {
			const data = await this.sendRequest('POST', '/v1/get_quote', providerData);
			if(data?.status === 200){
				return data?.data;
			}

			return {
				status: data?.status,
				message: "Failed to fetch estimate"
			}
		}

		catch (error) {
			console.error('Error Quoting order ', error);
			throw error;
		}
	};

	public async createOrder(providerData: any) {
		try {
			providerData.data.request_id = this.generateRequestId();
			this.validateOrderRequest(providerData.data);
			const data = await this.sendRequest('POST', '/v1/orders/create', providerData);
			console.log(data);

			if(data?.status === 200 || data?.status === 201){
				return data?.data;
			}

			return {
				status: data?.status,
				message:"Failed to create"
			}
		}

		catch (error) {
			console.error('Error creating order:', error);
			throw error;
		}
	};

	private validateOrderRequest(data: any) {
		if (!data.request_id || typeof data.request_id !== 'string') {
			throw new Error('Invalid order request: requestId is required and must be a string.');
		}

	};

	public async initiate_flow(providerData: any) {
		try {
			const data = await this.sendRequest('POST', '/v1/simulation/initiate_order_flow', providerData);
			console.log(data);

			if (data?.status === 200) {
				return data?.data;
			}

			return {
				status: data?.status,
				message: "Failed initiate_flow"
			}
		}

		catch (error) {
			throw error
		}
	};

	public async trackOrder(providerData: any) {
		try {
			let orderId = providerData?.data?.orderId;
			const data = await this.sendRequest('GET', `/v1.1/orders/${orderId}`, providerData);

			console.log(data);

			if (data?.status === 200) {
				return data?.data;
			}

			return {
				status: data?.status,
				message: "Can't Track"
			}
		}

		catch (error) {
			throw error
		}
	};

	public async cancelOrder(providerData: any) {
		try {
			let orderId = providerData?.data?.orderId;
			const data = await this.sendRequest('POST', `/v1/orders/${orderId}/cancel`, providerData);

			console.log(data);

			if (data?.status === 200) {
				return data?.data;
			}

			return {
				status: data?.status,
				message: "Can't Cancel"
			}
		}

		catch (error) {
			throw error;
		}
	};
}

export default PORTER;
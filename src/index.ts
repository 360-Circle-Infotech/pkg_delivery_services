/* eslint-disable no-useless-catch */
import PORTER from "./porter";
const porter = new PORTER();
class Delivery {
	constructor() {
		// Nothing to be done here
	}
	verifyCredentials = async (provider: string, providerData: any) => {
		try {
			if (provider == 'porter') {
				const data = await porter.verifyCredentials({
					"key": providerData.apiKey, "data": {
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
					}
				});
				return data;
			}
		} catch (error: unknown) {
			throw error;

		}
	}
	getQuote = async (providerData: any) => {
		try {
			const data = await porter.getQuote(providerData);
			return data
		} catch (error: unknown) {
			throw error;
		}
	}
	// porter API's
	createOrder = async (providerData: any) => {
		try {
			const data = await porter.createOrder(providerData);
			return data
		} catch (error: unknown) {
			throw error;
		}

	}
	// initiate flow
	initiateFlow = async (providerData: any) => {
		try {
			const data = await porter.initiate_flow(providerData);
			return data;
		} catch (error: unknown) {
			throw error;
		}
	}
	// track order
	trackOrder = async (providerData: any) => {
		try {
			const data = await porter.trackOrder(providerData);
			return data;
		} catch (error: unknown) {
			throw error;
		}
	}
	// cancel order
	cancelOrder = async (providerData: any) => {
		try {
			const data = await porter.cancelOrder(providerData);
			return data;
		} catch (error) {
			throw error;
		}
	}
}

export { Delivery };
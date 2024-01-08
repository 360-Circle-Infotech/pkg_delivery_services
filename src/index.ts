/* eslint-disable no-useless-catch */
import Fedex from "./fedex";
import DHL from "./dhl";
import PORTER from "./porter";
const porter = new PORTER();
const fedex = new Fedex();
const dhl = new DHL();
class Delivery {
	constructor() {
		// Nothing to be done here
	}
	createShipment = async (provider: string, providerData: any) => {
		try {
			if (provider == 'Fedex') {

				const data = await fedex.createShipment(providerData);
				return data;
			} else if (provider == 'DHL') {
				const data = await dhl.createShipment(providerData);
				return data;
			}
		} catch (error: any) {
			throw error;
		}

	}
	cancelShipment = async (provider: string, providerData: any) => {
		try {
			if (provider == 'Fedex') {

				const data = await fedex.cancelShipment(providerData);
				return data;
			}
		} catch (error: any) {
			throw error;
		}

	}
	rateAndDeliveryTime = async (provider: string, providerData: any) => {
		try {
			if (provider == 'Fedex') {

				const data = await fedex.rateAndTransitTime(providerData);
				return data;
			} else if (provider == 'DHL') {
				const data = await dhl.getRates(providerData);
				// const data = await dhl.landedCost(providerData);
				return data;
			}
		} catch (error: any) {
			throw error;
		}
	}
	trackShipment = async (provider: string, providerData: any) => {
		try {
			if (provider == 'Fedex') {

				const data = await fedex.trackByTrackingNumber(providerData);
				return data;
			} else if (provider == 'DHL') {
				const data = await dhl.trackShipment(providerData);
				return data;
			}
		} catch (error: any) {
			throw error;
		}
	}
	availableProducts = async (provider: string, providerData: any) => {
		try {
			if (provider == 'DHL') {
				const data = await dhl.getAvailableProducts(providerData);
				return data;
			}
		} catch (error: any) {
			throw error;

		}
	}
	checkPickupAvailibility = async (provider: string, providerData: any) => {
		try {
			if (provider == 'DHL') {
				const data = await dhl.validateAddress(providerData);
				return data;
			} else if (provider == 'Fedex') {
				const data = await fedex.checkPickupAvailability(providerData);
				return data;
			}
		} catch (error: any) {
			throw error;

		}
	}
	createPickup = async (provider: string, providerData: any) => {
		try {
			if (provider == 'DHL') {
				const data = await dhl.createPickup(providerData);
				return data;
			} else if (provider == 'Fedex') {
				const data = await fedex.createPickup(providerData);
				return data;
			}
		} catch (error: any) {
			throw error;

		}
	}
	updatePickup = async (provider: string, providerData: any) => {
		try {
			if (provider == 'DHL') {
				const data = await dhl.updatePickup(providerData);
				return data;
			}
		} catch (error: any) {
			throw error;

		}
	}
	cancelPickup = async (provider: string, providerData: any) => {
		try {
			if (provider == 'DHL') {
				const data = await dhl.cancelPickup(providerData);
				return data;
			} else if (provider == 'Fedex') {
				const data = await fedex.cancelPickup(providerData);
				return data;
			}
		} catch (error: any) {
			throw error;

		}
	}
	validateAddress = async (provider: string, providerData: any) => {
		try {
			if (provider == 'Fedex') {
				const data = await fedex.validateAddress(providerData);
				return data;
			}
		} catch (error: any) {
			throw error;

		}
	}
	validatePostalCode = async (provider: string, providerData: any) => {
		try {
			if (provider == 'Fedex') {
				const data = await fedex.validatePostal(providerData);
				return data;
			}
		} catch (error: any) {
			throw error;

		}
	}
	verifyCredentials = async (provider: string, providerData: any) => {
		try {
			if (provider == 'Fedex') {
				const data = await fedex.verifyCredentials(providerData);
				return data;
			} else if (provider == 'DHL') {
				const data = await dhl.verifyCredentials(providerData);
				return data;
			}
		} catch (error: any) {
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

	initiateFlow = async (providerData: any) => {
		try {
			const data = await porter.initiate_flow(providerData);
			return data;
		} catch (error: unknown) {
			throw error;
		}
	}

	trackOrder = async (providerData: any) => {
		try {
			const data = await porter.trackOrder(providerData);
			return data;
		} catch (error: unknown) {
			throw error;
		}
	}

	cancelOrder = async (providerData: any) => {
		try {
			const data = await porter.cancelOrder(providerData);
			return data;
		} catch (error) {
			throw error;
		}
	}
}

export default Delivery;
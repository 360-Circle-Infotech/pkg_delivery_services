/* eslint-disable no-useless-catch */
import PORTER from "./porter";
const porter = new PORTER();
class Delivery {
	constructor() {
		// Nothing to be done here
	}

	AllDelivery = async (provider: string, providerData: any) => {
		try {

			let func = providerData?.functionName;
			if (provider === "porter") {
				
				// If provider is Porter then dynamically calls it's function
				if (typeof (porter as any)[func] === "function") {
					return await (porter as any)[func](providerData);
				}

				else {
					return {
						message: `Function ${func} does not exist in Porter`
					}
				}
			}
			else {
				return {
					message: `Provider is not present`
				}
			}

		} catch (error) {
			console.log(error);
			throw error;
		}

	}
}

export default Delivery;
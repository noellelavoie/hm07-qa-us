// eslint-disable-next-line no-undef
const config = require('../config');

const requestBody = {
		"deliveryTime": 9,
		"productsCount": 10,
		"productsWeight": 11
}

test('should return 200 status code', async () => {
	let actualStatus
    try {
		const response = await fetch(`${config.API_URL}/speedy/v1/calculate`, {
			method: 'POST',
			headers: {
			'Content-Type': 'application/json'
			},
			body: JSON.stringify(requestBody)
		}); actualStatus=response.status;
	} catch (error) {
		console.error(error);
	}
	expect(actualStatus).toBe(200);
});
test('should return correct response body', async () => {
    const requestBody = {
        "deliveryTime": 9,
        "productsCount": 10,
        "productsWeight": 11
    };
	
	let actualResponseBody
    try {
		const response = await fetch(`${config.API_URL}/speedy/v1/calculate`, {
			method: 'POST',
			headers: {
			'Content-Type': 'application/json'
			},
			body: JSON.stringify(actualResponseBody)
		}); actualResponseBody=await response.json();
	} catch (error) {
		console.error(error);
	}
	expect(actualResponseBody.name).toBe("Speedy");
});

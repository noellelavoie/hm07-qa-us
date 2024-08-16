// eslint-disable-next-line no-undef
const config = require('../config');

test('should return 200 status code', async () => {
	let actualStatus;
	try {
		const response = await fetch(`${config.API_URL}/api/v1/warehouses`);
		actualStatus=response.status;
	} catch (error) {
		console.error(error);
	}
	expect(actualStatus).toBe(200);
});
test('should return 200 status code', async () => {
	let actualStatus;
	try {
		const response = await fetch(`${config.API_URL}/api/v1/kits/search`);
		actualStatus=response.status;
	} catch (error) {
		console.error(error);
	}
	expect(actualStatus).toBe(200);
});


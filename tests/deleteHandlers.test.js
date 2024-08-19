// eslint-disable-next-line no-undef
const config = require('../config');

test('should return 200 status code', async () => {
	let actualStatus
    try {
		const response = await fetch(`${config.API_URL}/api/v1/kits/5`, {
			method: 'DELETE',
		}); actualStatus=response.status;
	} catch (error) {
		console.error(error);
	}
	expect(actualStatus).toBe(200);
});
test('should return correct response body', async () => {
	let actualResponseBody;
    try {
		const response = await fetch(`${config.API_URL}/api/v1/kits/6`, {
			method: 'DELETE',
		}); actualResponseBody=await response.json();
	} catch (error) {
		console.error(error);
	}
	expect(actualResponseBody.ok).toBeTruthy();
});


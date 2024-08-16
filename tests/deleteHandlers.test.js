// eslint-disable-next-line no-undef
const config = require('../config');

test('should return 200 status code', async () => {
	let actualStatus
    try {
		const response = await fetch(`${config.API_URL}/api/v1/kits/5`, {
			method: 'DELETE',
		});
	} catch (error) {
		console.error(error);
	}
	expect(actualStatus).toBe(200);
});
test('should return "undefined" status code', async () => {
	let actualStatus
    try {
		const response = await fetch(`${config.API_URL}/api/v1/kits/5`, {
			method: 'DELETE',
		});
	} catch (error) {
		console.error(error);
	}
	expect(actualStatus).toBe(undefined);
});

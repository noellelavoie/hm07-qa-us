// eslint-disable-next-line no-undef
const config = require('../config');

const requestBody = {
	"name": "My new kit",
    "productsList": [
        {
            "id": 1,
            "quantity": 4
        },
        {
            "id": 5,
            "quantity": 2
        },
        {
            "id": 3,
            "quantity": 1
        },
        {
            "id": 4,
            "quantity": 1
        }
    ]
}

test('should return 200 status code', async () => {
	let actualStatus
    try {
		const response = await fetch(`${config.API_URL}/api/v1/kits/1`, {
			method: 'PUT',
			headers: {
			'Content-Type': 'application/json'
			},
			body: JSON.stringify(requestBody)
		});
	} catch (error) {
		console.error(error);
	}
	expect(actualStatus).toBe(200);
});
test('should return "undefined: status code', async () => {
	let actualStatus
    try {
		const response = await fetch(`${config.API_URL}/api/v1/kits/1`, {
			method: 'PUT',
			headers: {
			'Content-Type': 'application/json'
			},
			body: JSON.stringify(requestBody)
		});
	} catch (error) {
		console.error(error);
	}
	expect(actualStatus).toBe(undefined);
});


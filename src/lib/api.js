import axios from 'axios';

const instance = axios.create({
	baseURL: 'https://api.coingecko.com/api',
	timeout: 10000,
	headers: {
		'Access-Control-Allow-Origin': '*',
		'Content-Type': 'application/json'
	}
});

instance.interceptors.response.use((response) => {
	if (response.data) {
		return response.data;
	}
	console.log({ response });
	return response;
});

export default instance;

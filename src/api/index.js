import axios from 'axios';

export const api = axios.create({
	baseURL: 'https://api.apilayer.com/exchangerates_data',
	redirect: 'follow',
	headers: {
		apikey: 'ALRDDX61CuXXoyotKZ8L4eOFPYjSAD9t',
	},
});

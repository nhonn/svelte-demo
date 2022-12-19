// @ts-nocheck

export const formatPrice = (price) => {
	const newPrice = new Intl.NumberFormat('en-US', {
		style: 'currency',
		currency: 'USD'
	}).format(price);
	return newPrice;
};

export const parseHTML = (value) => {
	const parser = new DOMParser();

	return parser.parseFromString(value, 'text/html');
};

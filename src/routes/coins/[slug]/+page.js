/* eslint-disable no-undef */
/* eslint-disable @typescript-eslint/ban-ts-comment */
// @ts-nocheck

import { error } from '@sveltejs/kit';
import api from '../../../lib/api';

const fetchData = async (coinId) => {
	const response = await api.get(
		`/v3/coins/${coinId}?tickers=false&market_data=true&community_data=false&developer_data=false&sparkline=false`
	);

	return response;
};

export async function load({ params }) {
	if (params.slug) {
		const data = await fetchData(params.slug);

		return data;
	}

	throw error(404, 'Not found');
}

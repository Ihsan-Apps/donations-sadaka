/* eslint-disable @typescript-eslint/no-explicit-any */
import qs from 'qs';
import axios from 'axios';
import { getApiUrl } from '..';
import { Pagination } from '@/types/common';

const apiUrl = getApiUrl();

export async function fetchApps({ page = 1, pageSize = 25, sort = 'desc' }: Pagination) {
	const query = qs.stringify(
		{
			populate: '*',
			pagination: { page, pageSize },
			sort: [`publishedAt:${sort}`],
		},
		{ encodeValuesOnly: true },
	);
	const { data } = await axios.get(`${apiUrl}/api/apps?${query}`);
	return data;
}

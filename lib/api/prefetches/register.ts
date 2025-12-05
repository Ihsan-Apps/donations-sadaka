import { fetchApps } from '../services/apps.service';

export const globalPrefetches = [
	{
		queryKey: ['apps'],
		queryFn: () => fetchApps({ page: 1, pageSize: 25 }),
		staleTime: 1000 * 60 * 60 * 24 * 7,
	},
	// shto prefetch të tjera këtu...
];

import { fetchApps } from '@/lib/api/services/apps.service';
import { Pagination } from '@/types/common';
import { useQuery } from '@tanstack/react-query';

export function useApps(params: Pagination) {
	return useQuery({
		queryKey: ['apps', params],
		queryFn: () => fetchApps(params),
		staleTime: 60 * 1000, // 1 minute cache
	});
}

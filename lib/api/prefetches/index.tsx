'use client';
import { useEffect } from 'react';
import { useQueryClient } from '@tanstack/react-query';
import { globalPrefetches } from './register';

export default function GlobalPrefetch() {
	const queryClient = useQueryClient();

	useEffect(() => {
		globalPrefetches.forEach((q) => queryClient.prefetchQuery(q));
	}, [queryClient]);

	return null;
}

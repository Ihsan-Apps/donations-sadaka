'use client';

import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import React, { useState } from 'react';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';

function QueryProvider({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	const [queryClient] = useState(() => new QueryClient());
	return (
		<QueryClientProvider client={queryClient}>
			{children}
			<ReactQueryDevtools />
		</QueryClientProvider>
	);
}

export default QueryProvider;

'use client';

import { useQuery } from '@tanstack/react-query';
import Link from 'next/link';
import { fetchApps } from '@/lib/api/services/apps.service';

export default function Footer() {
	const { data, error, isError, isLoading } = useQuery({
		queryKey: ['apps'],
		queryFn: () => fetchApps({ page: 1, pageSize: 25 }),
		enabled: false, // e lexon vetëm nga cache (pa ri-fetch)
	});

	if (isLoading) {
		return <footer className='p-4 '>Loading apps...</footer>;
	}
	if (isError) {
		return <footer className='p-4 '>Error loading apps.</footer>;
	}
	if (!data || !data.data || data.data.length === 0) {
		return <footer className='p-4 '>No apps available.</footer>;
	}

	return (
		<footer className='p-4 w-full mt-auto'>
			<h3 className='font-bold mb-2'>Apps</h3>
			<ul className='max-w-xl mx-auto text-base-content flex flex-col md:flex-row md:justify-between gap-1'>
				{data?.data?.map((app: any) => (
					<li key={app.id}>
						<Link href={`/apps/${app.slug}`}>{app.title}</Link>
					</li>
				))}
			</ul>
		</footer>
	);
}

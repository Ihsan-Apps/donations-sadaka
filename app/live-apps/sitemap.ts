/* eslint-disable @typescript-eslint/no-explicit-any */
import { fetchApps } from '@/lib/api/services/apps.service';
import { MetadataRoute } from 'next';

const liveUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://example.tech';
const LIMIT = 50000; // Google's max limit

// 1️⃣ Dynamically generate the number of sitemaps needed
export async function generateSitemaps() {
	const initialFetch = await fetchApps({ page: 1, pageSize: 1 }); // Fetch just meta data

	const totalApps = initialFetch.meta.pagination.total;
	const numberOfSitemaps = Math.ceil(totalApps / LIMIT);

	// Return an array of sitemap indexes
	return Array.from({ length: numberOfSitemaps }, (_, index) => ({ id: index }));
}

// 2️⃣ Fetch tours for each specific sitemap chunk
export default async function sitemap({ id }: { id: number }): Promise<MetadataRoute.Sitemap> {
	// Fetch paginated tours
	const apps = await fetchApps({
		page: Number(await id) + 1, // API pagination starts from 1
		pageSize: LIMIT,
	});

	// Ensure apps.data exists
	if (!apps.data || !Array.isArray(apps.data)) {
		console.error('🚀 ~ Invalid response from fetchAllApps:', apps);
		return [];
	}

	// Map apps to sitemap format
	return apps.data.map((tour: any) => ({
		url: `${liveUrl}/live-apps/${tour.slug}`,
		lastModified: tour.updatedAt,
	}));
}

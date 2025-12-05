export type ApiEnvironment = 'local' | 'live' | 'auto';

const LOCAL_API = 'http://localhost:1333';
const LIVE_API = process.env.NEXT_PUBLIC_API_URL ?? '';

/**
 * Returns the correct API base URL.
 * @param env - The environment to use: 'local', 'live', or 'auto'
 * @returns The base URL of the API as a string.
 * @example http://localhost:1333
 *  Remember to put /api/`your_collection_path` or similar suffixes when calling specific endpoints.
 * const apiUrl = getApiUrl(); // auto mode
 *
 */
export function getApiUrl(env: ApiEnvironment = 'auto') {
	// Manual override
	if (env === 'local') return LOCAL_API;
	if (env === 'live') return LIVE_API;

	// Auto mode
	if (process.env.NODE_ENV === 'development') {
		// Always use local API in dev
		return LOCAL_API;
	}

	// In production
	return LIVE_API || LOCAL_API; // fallback, just in case
}

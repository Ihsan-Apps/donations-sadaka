import { cookies } from 'next/headers';

export async function getCurrentTheme(): Promise<string> {
	return (await cookies()).get('theme')?.value || 'light';
}

import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import Navbar from '@/components/Navbar';
import Providers from '@/lib/providers';
import Footer from '@/components/Footer';
import GlobalPrefetch from '@/lib/api/prefetches';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
	title: 'Hive Starter',
	description: 'This is a Hive starter template.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
	return (
		/* Both next-themes and our own script will modify the root element in the client,
    we should then deactivate hydration mismatch warnings. */
		<html lang='en' suppressHydrationWarning>
			<body className={inter.className + ' flex  flex-col'}>
				<Providers>
					<Navbar />
					<GlobalPrefetch />
					{children}
					<Footer />
				</Providers>
			</body>
		</html>
	);
}

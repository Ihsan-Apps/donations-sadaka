import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import Navbar from '@/components/Navbar';
import Providers from '@/lib/providers';
import Footer from '@/components/Footer';
import GlobalPrefetch from '@/lib/api/prefetches';
import GoogleAnalytics from '@/lib/tracking/GA4';
import CookieConsent from '@/lib/tracking/CookieConsent';
import Script from 'next/script';
import DonationSubmitForm from '@/components/forms/DonationSubmitForm';
import { Toaster } from 'react-hot-toast';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
	title: 'Donations Links Hub',
	description: 'This is a Hive starter template.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
	return (
		/* Both next-themes and our own script will modify the root element in the client,
    we should then deactivate hydration mismatch warnings. */
		<html lang='en' suppressHydrationWarning>
			<head>
				{/* Silktide CSS */}
				<link rel='stylesheet' href='https://consent-manager.net/lib/cookieconsent/css/cookieconsent.min.css' />
			</head>

			<body className={inter.className}>
				<Providers>
					<Navbar />
					<Toaster />
					<GlobalPrefetch />
					{children}
					<DonationSubmitForm />
					<Footer />

					{/* Scripts must be in body */}
					<GoogleAnalytics />

					{/* Silktide vendor script */}
					<Script src='https://consent-manager.net/lib/cookieconsent/cookieconsent.min.js' strategy='afterInteractive' />

					{/* CookieConsent config */}
					<CookieConsent />
				</Providers>
			</body>
		</html>
	);
}

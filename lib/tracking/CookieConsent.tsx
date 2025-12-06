'use client';
import { useEffect } from 'react';

declare global {
	interface Window {
		silktideCookieBannerManager?: any;
		gtag?: any;
		dataLayer?: any[];
	}
}

export default function CookieConsent() {
	useEffect(() => {
		let tries = 0;
		const init = () => {
			if (!window.silktideCookieBannerManager && tries < 10) {
				tries++;
				return setTimeout(init, 200);
			}

			if (!window.silktideCookieBannerManager) return;

			window.silktideCookieBannerManager.updateCookieBannerConfig({
				background: { showBackground: true },
				cookieIcon: { position: 'bottomLeft' },

				cookieTypes: [
					{
						id: 'necessary',
						name: 'Necessary',
						required: true,
						onAccept: () => console.log('Necessary enabled'),
					},
					{
						id: 'analytics',
						name: 'Analytics',
						required: true,
						onAccept: function () {
							console.log('Add logic for the required Analytics here');
						},
					},
					{
						id: 'advertising',
						name: 'Advertising',
						required: false,
						onAccept: () =>
							window.gtag?.('consent', 'update', {
								ad_storage: 'granted',
								ad_user_data: 'granted',
								ad_personalization: 'granted',
							}),
						onReject: () =>
							window.gtag?.('consent', 'update', {
								ad_storage: 'denied',
								ad_user_data: 'denied',
								ad_personalization: 'denied',
							}),
					},
				],
			});
		};

		init();
	}, []);

	return null;
}

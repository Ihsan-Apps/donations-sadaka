'use client';

import React, { useState } from 'react';
import ReactCookieBot from 'react-cookiebot';
const domainGroupId = '66a40474-ae5a-45c2-b703-8ad67450b9dd'; // Donations Sadaka

const CookieBot = () => {
	const [hasCookieBot, setHasCookieBot] = useState(false);

	return (
		<div>
			{process.env.NODE_ENV === 'development' ? (
				<button title='TEST' onClick={() => setHasCookieBot(!!document.querySelector('#CookieBot'))}>
					TEST Cookies
				</button>
			) : null}
			<ReactCookieBot domainGroupId={domainGroupId} />
		</div>
	);
};

export default CookieBot;

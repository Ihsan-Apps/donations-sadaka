/** @type {import('next-sitemap').IConfig} */
module.exports = {
	siteUrl: process.env.NEXT_PUBLIC_SITE_URL || 'https://donations.slickhive.tech',
	generateRobotsTxt: true, // (optional)
	changefreq: 'daily',
	sitemapSize: 7000,
};

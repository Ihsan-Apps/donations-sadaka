import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';

interface DonationProps {
	title: string;
	organization_url: string;
	desc: string;
	cover: string;
}

export default function DonationPage({ donation }: { donation: DonationProps }) {
	const { title, organization_url, desc, cover } = donation;

	const schemaData = {
		'@context': 'https://schema.org',
		'@type': 'NGO',
		name: title,
		url: organization_url,
		description: desc,
		image: cover,
	};

	return (
		<>
			<Head>
				<title>{title} | Support Verified NGO</title>
				<script
					type='application/ld+json'
					// JSON.stringify ensures quotes are correct
					dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
				/>
			</Head>

			<main>
				<h1>{title}</h1>
				<p>{desc}</p>
				<Link href={organization_url} target='_blank' rel='noopener noreferrer'>
					Donate Here
				</Link>
				<Image src={cover} alt={title} />
			</main>
		</>
	);
}

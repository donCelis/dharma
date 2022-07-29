import { Html, Head, Main, NextScript } from 'next/document';

export default function Document() {
	return (
		<Html lang='en'>
			<Head>
				{/* ------- */}

				<meta name='viewport' content='initial-scale=1, width=device-width' />
				<meta httpEquiv='X-UA-Compatible' content='IE=edge' />

				<meta name='twitter:card' content='summary_large_image' />
				<meta property='og:type' content='website' />

				<meta name='language' content='english' />
				<meta name='author' content='Dharma Team' />
				<meta name='copyright' content='DHARMA app - Protect Your Energy' />

				<meta name='twitter:url' content='https://mydharma.app/' />
				<meta name='twitter:image' content='./images/cover_c.jpg' />

				<meta property='og:url' content='https://mydharma.app/' />
				<meta property='og:image' content='./images/cover_c.jpg' />

				<meta
					name='description'
					content='Find Bilingual Energy Healers in Medellin today —> Sound Healing, Reiki Therapy, and much more.. Session are safe and offered ~in-studio ~at- home or ~virtually …'
				/>
				<meta
					name='twitter:description'
					content='Find Bilingual Energy Healers in Medellin today —> Sound Healing, Reiki Therapy, and much more.. Session are safe and offered ~in-studio ~at- home or ~virtually …'
				/>
				<meta
					property='og:description'
					content='Find Bilingual Energy Healers in Medellin today —> Sound Healing, Reiki Therapy, and much more.. Session are safe and offered ~in-studio ~at- home or ~virtually …'
				/>

				{/* ------- */}

				<link
					rel='icon'
					type='image/png'
					sizes='16x16'
					href='./images/favicons/favicon-16x16.png'
				/>
				<link
					rel='icon'
					type='image/png'
					sizes='32x32'
					href='./images/favicons/favicon-32x32.png'
				/>
				<link
					rel='apple-touch-icon'
					sizes='57x57'
					href='./images/favicons/apple-touch-icon-57x57.png'
				/>
				<link
					rel='apple-touch-icon'
					sizes='60x60'
					href='./images/favicons/apple-touch-icon-60x60.png'
				/>
				<link
					rel='apple-touch-icon'
					sizes='72x72'
					href='./images/favicons/apple-touch-icon-72x72.png'
				/>
				<link
					rel='apple-touch-icon'
					sizes='76x76'
					href='./images/favicons/apple-touch-icon-76x76.png'
				/>
				<link
					rel='icon'
					type='image/png'
					sizes='96x96'
					href='./images/favicons/apple-touch-icon-96x96.png'
				/>
				<link
					rel='apple-touch-icon'
					sizes='114x114'
					href='./images/favicons/apple-touch-icon-114x114.png'
				/>
				<link
					rel='apple-touch-icon'
					sizes='120x120'
					href='./images/favicons/apple-touch-icon-120x120.png'
				/>
				<link
					rel='apple-touch-icon'
					sizes='144x144'
					href='./images/favicons/apple-touch-icon-144x144.png'
				/>
				<link
					rel='apple-touch-icon'
					sizes='152x152'
					href='./images/favicons/apple-touch-icon-152x152.png'
				/>
				<link
					rel='apple-touch-icon'
					sizes='180x180'
					href='./images/favicons/apple-touch-icon-180x180.png'
				/>
				<link
					rel='icon'
					type='image/png'
					sizes='192x192'
					href='./images/favicons/android-icon-192x192.png'
				/>
			</Head>
			<body>
				<Main />
				<NextScript />
			</body>
		</Html>
	);
}

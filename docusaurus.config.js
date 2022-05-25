// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Drop Commander Web App',
  tagline: 'DropZone & DropFleet Commander fan made web app',
  url: 'https://drop-commander.web.app',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  // organizationName: 'facebook', // Usually your GitHub org/user name.
  // projectName: 'docusaurus', // Usually your repo name.

  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'es',
    locales: ['es', 'en'],
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
        },
        blog: {
          showReadingTime: true,
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      navbar: {
        title: 'Drop Commander Web App',
        logo: {
          alt: 'Drop Commander Logo',
          src: 'img/lunar-module.png',
        },
        items: [
          {
            type: 'doc',
            docId: 'intro',
            position: 'left',
            label: 'Reglamentos',
          },
          {to: '/blog', label: 'Blog', position: 'left'},
          {
            href: 'https://www.ttcombat.com',
            label: 'TTCombat',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Reglamentos',
            items: [
              {
                label: 'Introducción',
                to: '/docs/intro',
              },
            ],
          },
          {
            title: 'Enlaces',
            items: [
							{
								label: 'TTCombat',
								href: 'https://www.ttcombat.com',
							},
							// {
              //   label: 'Stack Overflow',
              //   href: 'https://stackoverflow.com/questions/tagged/docusaurus',
              // },
              // {
              //   label: 'Discord',
              //   href: 'https://discordapp.com/invite/docusaurus',
              // },
              // {
              //   label: 'Twitter',
              //   href: 'https://twitter.com/docusaurus',
              // },
            ],
          },
          {
            title: 'Más',
            items: [
              {
                label: 'Blog',
                to: '/blog',
              },
							{
								label: 'Spaceship icons created by Yogi Aprelliyanto - Flaticon',
								href: 'https://www.flaticon.com/free-icons/spaceship',
							},
							{
								label: 'Moon landing icons created by Yogi Aprelliyanto - Flaticon',
								href: 'https://www.flaticon.com/free-icons/moon-landing',
							},
							{
								label: 'Planetarium icons created by Yogi Aprelliyanto - Flaticon',
								href: 'https://www.flaticon.com/free-icons/planetarium',
							},
							{
								label: 'Architecture and city icons created by Yogi Aprelliyanto - Flaticon',
								href: 'https://www.flaticon.com/free-icons/architecture-and-city',
							}
              // {
              //   label: 'GitHub',
              //   href: 'https://github.com/facebook/docusaurus',
              // },
            ],
          },
        ],
        copyright: `Made by fans of DropFleet & DropZone Commander Universe. <br> Copyright © ${new Date().getFullYear()} TTCombat.`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),

	plugins: [
		[
			'@docusaurus/plugin-pwa',
			{
				debug: true,
				offlineModeActivationStrategies: [
					'appInstalled',
					'standalone',
					'queryString',
				],
				pwaHead: [
					{
						tagName: 'link',
						rel: 'icon',
						href: '/img/lunar-module.png',
					},
					{
						tagName: 'link',
						rel: 'manifest',
						href: '/site.webmanifest', // your PWA manifest
					},
					{
						tagName: 'meta',
						name: 'theme-color',
						content: '#3b9235',
					},
					{
						tagName: 'meta',
						name: 'apple-mobile-web-app-capable',
						content: 'yes',
					},
					{
						tagName: 'meta',
						name: 'apple-mobile-web-app-status-bar-style',
						content: '#3b9235',
					},
					{
						tagName: 'link',
						rel: 'apple-touch-icon',
						href: '/img/apple-touch-icon.png',
					},
					{
						tagName: 'link',
						rel: 'mask-icon',
						href: '/img/safari-pinned-tab.svg',
						color: '#444444',
					},
					{
						tagName: 'meta',
						name: 'msapplication-config',
						content: '/browserconfig.xml',
					},
					{
						tagName: 'meta',
						name: 'msapplication-TileColor',
						content: '#ffffff',
					},
				],
			},
		],
	],
};

module.exports = config;

// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Drop Commander',
  tagline: 'Dropzone & Dropfleet Commander fan site',
  url: 'https://drop-commander.web.app',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',
	titleDelimiter: '🚀',

  // More info: https://docusaurus.io/docs/i18n/tutorial
  i18n: {
    defaultLocale: 'en',
    locales: ['en', 'es'],
		localeConfigs: {
			en: {
				label: 'English',
				htmlLang: 'en-US',
			},
			es: {
				label: 'Español',
				htmlLang: 'es-ES',
			}
		}
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
        title: 'Drop Commander',
        logo: {
          alt: 'Drop Commander Logo',
          src: 'img/lunar-module.png',
        },
        items: [
					{
						type: 'localeDropdown',
						position: 'left',
					},
					// {
					// 	type: 'docsVersionDropdown',
					// 	position: 'left',
					// 	dropdownItemsAfter: [{to: '/versions', label: 'All versions'}],
					// 	dropdownActiveClassDisabled: true,
					// },
          {
            type: 'doc',
            docId: 'intro',
            position: 'left',
            label: 'Rules',
          },
          {
						to: '/blog',
						label: 'Blog',
						position: 'left'
					},
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
            title: 'Rules',
            items: [
              {
                label: 'Introduction',
                to: '/docs/intro',
              },
            ],
          },
          {
            title: 'Links',
            items: [
							{
								label: 'TTCombat',
								href: 'https://www.ttcombat.com',
							},
            ],
          },
          {
            title: 'More',
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
							},							{
								label: 'Miscellaneous icons created by Yogi Aprelliyanto - Flaticon',
								href: 'https://www.flaticon.com/free-icons/miscellaneous',
							},
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
		// [
    //   '@docusaurus/plugin-content-docs',
    //   {
    //     async sidebarItemsGenerator({
    //       isCategoryIndex: defaultCategoryIndexMatcher, // The default matcher implementation, given below
    //       defaultSidebarItemsGenerator,
    //       ...args
    //     }) {
    //       return defaultSidebarItemsGenerator({
    //         ...args,
    //         isCategoryIndex(doc) {
    //           return (
    //             // Also pick intro.md in addition to the default ones
    //             doc.fileName.toLowerCase() === 'intro' ||
    //             defaultCategoryIndexMatcher(doc)
    //           );
    //         },
    //       });
    //     },
    //   },
    // ],
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

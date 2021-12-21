// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'LabVIEW 编程经验',
  tagline: 'Dinosaurs are cool',
  url: 'https://ruanqizhen.github.io/test/',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',
  projectName: 'labview_book', // Usually your repo name.

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
		  sidebarCollapsed: false,
          // Please change this to your repo.
          editUrl: 'https://github.com/ruanqizhen/labview_book/edit/main/',
		  routeBasePath: '/',
		  path: './docs',
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
	  hideableSidebar: true,
      colorMode: {
        defaultMode: 'light',
        disableSwitch: false,
        respectPrefersColorScheme: true,
      },
      navbar: {
        title: 'LabVIEW 编程经验',
        logo: {
          alt: 'LabVIEW',
          src: 'img/logo.png',
		  href: '/'
        },
        items: [
          {
            href: 'https://github.com/ruanqizhen/labview_book',
            label: 'GitHub',
            position: 'right',
          },
        ],
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
  stylesheets: [
    {
      rel: "preconnect",
      href: "https://fonts.gstatic.com",
      type: "text/css",
    },
    {
      href: "https://fonts.font.im/css?family=Raleway:500,700&display=swap",
      type: "text/css",
      rel: "stylesheet",
    },
  ],
  i18n: {
    defaultLocale: 'zh-CN',
    locales: ['zh-CN'],
  },
};

module.exports = config;

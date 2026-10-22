import {themes as prismThemes} from 'prism-react-renderer';
import type {Config} from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

const config: Config = {
  title: 'Agent SaaS Docs',
  tagline: 'User guides and API documentation for Agent SaaS',
  favicon: 'img/favicon.svg',

  // Set the production url of your site here
  url: 'https://docs.theaicommunity.net',
  // Set the /<baseUrl>/ pathname under which your site is served
  baseUrl: '/',

  onBrokenLinks: 'throw',

  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      {
        docs: {
          sidebarPath: './sidebars.ts',
          editUrl: 'https://github.com/TheAiCommunity/agent-saas-docs/edit/main/',
        },
        theme: {
          customCss: './src/css/custom.css',
        },
      } satisfies Preset.Options,
    ],
  ],

  themeConfig: {
    colorMode: {
      respectPrefersColorScheme: true,
    },
    navbar: {
      title: 'Agent SaaS',
      logo: {
        alt: 'Agent SaaS logo',
        src: 'img/logo.svg',
      },
      items: [
        {
          type: 'docSidebar',
          sidebarId: 'docs',
          position: 'left',
          label: 'Docs',
        },
        {
          href: 'https://github.com/TheAiCommunity',
          label: 'GitHub',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Docs',
          items: [
            {
              label: 'Getting started',
              to: '/docs/getting-started/quickstart',
            },
            {
              label: 'API reference',
              to: '/docs/developer/api-reference',
            },
          ],
        },
        {
          title: 'Product',
          items: [
            {
              label: 'Agent SaaS',
              href: 'https://saas.theaicommunity.net/',
            },
            {
              html: '<a href="https://theaicommunity.net/agent" target="_blank" rel="noreferrer noopener">About Agent SaaS</a>',
            },
          ],
        },
        {
          title: 'More',
          items: [
            {
              label: 'GitHub',
              href: 'https://github.com/TheAiCommunity',
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} The AI Community. Built with Docusaurus.`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  } satisfies Preset.ThemeConfig,
};

export default config;

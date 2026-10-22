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
          to: '/docs/',
          label: 'Docs',
          position: 'left',
        },
        {
          to: '/docs/guides/first-task',
          label: 'Guides',
          position: 'left',
        },
        {
          to: '/docs/developer/api-reference',
          label: 'API reference',
          position: 'left',
        },
        {
          href: 'https://saas.theaicommunity.net/',
          label: 'Product',
          position: 'right',
        },
        {
          href: 'https://github.com/TheAiCommunity/agent-saas-docs',
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
              label: 'Guides',
              to: '/docs/guides/first-task',
            },
            {
              label: 'Integrations',
              to: '/docs/integrations/platforms',
            },
            {
              label: 'FAQ',
              to: '/docs/reference/faq',
            },
          ],
        },
        {
          title: 'Developers',
          items: [
            {
              label: 'Developer overview',
              to: '/docs/developer/overview',
            },
            {
              label: 'API reference',
              to: '/docs/developer/api-reference',
            },
            {
              label: 'Examples',
              to: '/docs/developer/examples',
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

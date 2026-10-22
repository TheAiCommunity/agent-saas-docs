import type {SidebarsConfig} from '@docusaurus/plugin-content-docs';

const sidebars: SidebarsConfig = {
  docs: [
    'intro',
    'skills/index',
    {
      type: 'category',
      label: 'Getting started',
      link: {type: 'doc', id: 'getting-started/quickstart'},
      items: ['getting-started/quickstart', 'getting-started/accounts'],
    },
    {
      type: 'category',
      label: 'Guides',
      link: {type: 'doc', id: 'guides/first-task'},
      items: [
        'guides/first-task',
        'guides/assets',
        'guides/review-and-publish',
        'guides/automation',
      ],
    },
    {
      type: 'category',
      label: 'Integrations',
      link: {type: 'doc', id: 'integrations/platforms'},
      items: ['integrations/platforms', 'integrations/mcp'],
    },
    {
      type: 'category',
      label: 'Developer guide',
      link: {type: 'doc', id: 'developer/overview'},
      items: [
        'developer/overview',
        'developer/authentication',
        'developer/conventions',
        'developer/api-reference',
        'developer/admin-api',
        'developer/platform-api',
        'developer/examples',
      ],
    },
    {
      type: 'category',
      label: 'Reference',
      link: {type: 'doc', id: 'reference/faq'},
      items: ['reference/faq', 'reference/glossary', 'reference/changelog'],
    },
  ],
};

export default sidebars;

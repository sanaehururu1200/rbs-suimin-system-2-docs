import {themes as prismThemes} from 'prism-react-renderer';
import type {Config} from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

const config: Config = {
  title: 'RBS SuiminSystem 2',
  tagline: '高機能なVRChat用睡眠システム。',
  favicon: 'img/favicon.ico',

  // Set the production url of your site here
  url: 'https://sanaehururu1200.github.io',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/rbs-suimin-system-2-docs',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'sanaehururu1200', // Usually your GitHub org/user name.
  projectName: 'rbs-suimin-system-2-docs', // Usually your repo name.

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'ja',
    locales: ['ja'],
  },

  presets: [
    [
      'classic',
      {
        docs: {
          sidebarPath: './sidebars.ts',
        },
        theme: {
          customCss: './src/css/custom.css',
        },
      } satisfies Preset.Options,
    ],
  ],

  themeConfig: {
    // Replace with your project's social card
    navbar: {
      title: 'RBS SuiminSystem 2',
      items: [
        {
          type: 'docSidebar',
          sidebarId: 'tutorialSidebar',
          position: 'left',
          label: '説明書',
        }
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Docs',
          items: [
            {
              label: '説明書',
              to: '/docs/intro',
            },
          ],
        },
        {
          title: 'More',
          items: [
            {
              label: 'GitHub',
              href: 'https://github.com/sanaehururu1200//rbs-suimin-system-2-release/',
            },
            {
              label: 'BOOTH',
              href: 'https://raspberry-studio.booth.pm/items/4373167',
            },
          ],
        },
        {
          title: 'RASPBERRY Studio',
          items: [
            {
              label: 'Web',
              href: 'https://www.raspberry.studio/',
            },
            {
              label: 'BOOTH',
              href: 'https://raspberry-studio.booth.pm/',
            },
            {
              label: 'X (Twitter)',
              href: 'https://x.com/RBS_Haruru',
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} HaruruSanae. Built with Docusaurus.`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  } satisfies Preset.ThemeConfig,
};

export default config;

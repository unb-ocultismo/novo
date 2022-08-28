// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'HanabiWorks',
  tagline: 'Somos uma fansub focada em traduzir Visuais Novels devido nossa paixão por esse gênero. Nosso objetivo é deixar esse tipo de jogo acessível atravéz de nossas traduções.',
  url: 'https://your-docusaurus-test-site.com',
  baseUrl: '/novo/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  //favicon: 'img/favicon.ico',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'unb-ocultismo', // Usually your GitHub org/user name.
  projectName: 'nome', // Usually your repo name.

  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        /*
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
        },
        **/
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
        title: 'HanabiWorks',
        items: [
          {
            type: 'doc',
            docId: 'intro',
            position: 'left',
            label: 'Traduções',
          },
          {to: '/blog', label: 'Blog', position: 'left'},
          {
            href: 'https://discord.com/invite/ATTxJYuTvm',
            label: 'Discord',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Páginas',
            items: [
              {
                label: 'Traduções',
                to: '/docs/intro',
              },
            ],
          },
          {
            title: 'Contatos',
            items: [
              {
                label: 'Discord',
                href: 'https://discord.com/invite/ATTxJYuTvm',
              },
              {
                label: 'Twitter',
                href: 'https://twitter.com/HanabiWork',
              },
            ],
          },
          {
            title: 'Outros',
            items: [
              {
                label: 'Blog',
                to: '/blog',
              },
              {
                label: 'Recrutamento',
                href: 'https://docs.google.com/forms/d/e/1FAIpQLSeOv1kAlmf5yoxc6I5l3vFD9DxJpAWE1KB9TirJXypVDLKA5w/viewform',
              },
            ],
          },
        ],
        //copyright: `Copyright © ${new Date().getFullYear()} My Project, Inc. Built with Docusaurus.`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
};

module.exports = config;

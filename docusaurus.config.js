// @ts-check
import {themes as prismThemes} from 'prism-react-renderer';

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Age Inclusive Web',
  tagline: 'An age inclusive web',
  favicon: 'img/logo.png',

  future: {
    v4: true,
  },

  url: 'https://ageinclusiveweb.netlify.app/',
  baseUrl: '/',
  organizationName: 'Efury1',
  projectName: 'Age-Inclusive-Web',
  trailingSlash: false,

  onBrokenLinks: 'throw',

  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      {
        docs: false,
        blog: {
          showReadingTime: true,
          feedOptions: {
            type: ['rss', 'atom'],
            xslt: true,
          },
        },
        theme: {
          customCss: './src/css/custom.css',
        },
      },
    ],
  ],

  themeConfig: {
    image: 'img/docusaurus-social-card.jpg',

    colorMode: {
      respectPrefersColorScheme: true,
    },

    navbar: {
      title: 'Age Inclusive Web',

      items: [
        { to: '/blog', label: 'Blog', position: 'left' },
        { to: '/about', label: 'About', position: 'left' },

        {
          label: 'Explore',
          position: 'left',
          items: [
            { to: '/resources', label: 'Resources' },
            { to: '/contribute', label: 'Contribute' },
            { to: '/pilot', label: 'Pilot' },
          ],
        },

        {
          href: 'https://github.com/Efury1/Age-Inclusive-Web',
          label: 'GitHub',
          position: 'left',
        },
      ],
    },

    footer: {
      style: 'dark',

      links: [
        {
          title: 'Navigate',
          items: [
            { label: 'Blog', to: '/blog' },
            { label: 'About', to: '/about' },
            { label: 'Resources', to: '/resources' },
            { label: 'Contribute', to: '/contribute' },
            { label: 'Pilot', to: '/pilot' },
          ],
        },
        {
          title: 'External',
          items: [
            {
              label: 'GitHub',
              href: 'https://github.com/Efury1/Age-Inclusive-Web',
            },
          ],
        },
      ],

      copyright: `Copyright © ${new Date().getFullYear()} Age Inclusive Web.`,
    },

    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  },
};

export default config;
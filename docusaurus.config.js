// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require("prism-react-renderer/themes/github");
const darkCodeTheme = require("prism-react-renderer/themes/dracula");
const math = require("remark-math");
const katex = require("rehype-katex");

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: "Int3face Docs",
  tagline: "Int3face",
  url: "https://int3facechain.github.io",
  baseUrl: "/docs",
  onBrokenLinks: "warn",
  onBrokenMarkdownLinks: "warn",
  favicon: "img/favicon.ico",

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: "Int3facechain", // Usually your GitHub org/user name.
  projectName: "docs", // Usually your repo name.
  deploymentBranch: "gh-pages",

  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: "en",
    locales: ["en"],
  },

  presets: [
    [
      "classic",
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve("./sidebars.js"),
          routeBasePath: "/", // Serve the docs at the site's root
          remarkPlugins: [math],
          rehypePlugins: [katex],
          lastVersion: "current",
          versions: {
            current: {
              label: "1.0",
              path: "/",
            },
          },
        },
      }),
    ],
  ],

  plugins: [
    [
      require.resolve("@easyops-cn/docusaurus-search-local"),
      { indexBlog: false, docsRouteBasePath: "/", indexPages: true },
    ],
  ],

  stylesheets: [
    {
      href: "https://cdn.jsdelivr.net/npm/katex@0.13.24/dist/katex.min.css",
      type: "text/css",
      integrity:
        "sha384-odtC+0UGzzFL/6PNoE8rX/SPcQDXBJ+uRepguP4QkPCm2LBxH3FA3y+fKSiJ+AmM",
      crossorigin: "anonymous",
    },
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      navbar: {
        title: "Int3face",
        logo: {
          alt: "Int3face Logo",
          src: "img/logo.jpg",
        },
        items: [
          {
            type: "doc",
            docId: "int3face/overview",
            position: "left",
            label: "Introduction",
          },
          {
            href: "https://github.com/Int3facechain",
            label: "GitHub",
            position: "right",
          },
          {
            type: "docsVersionDropdown",
            position: "right",
            dropdownActiveClassDisabled: true,
          },
        ],
      },
      footer: {
        style: "dark",
        links: [
          {
            title: "Docs",
            items: [
              {
                label: "Intro",
                to: "/",
              },
            ],
          },
          {
            title: "Community",
            items: [
              {
                label: "Discord",
                href: "https://discord.com/invite/2xs9YvtpjF",
              },
              {
                label: "Twitter",
                href: "https://twitter.com/_Bitfrost",
              },
              {
                label: "Website",
                href: "https://www.int3face.io",
              },
            ],
          },
          {
            title: "More",
            items: [
              {
                label: "GitHub",
                href: "https://github.com/Int3facechain",
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} Int3face. Built with Docusaurus.`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
        additionalLanguages: ["go", "protobuf", "rust", "toml"],
      },
    }),
};

module.exports = config;

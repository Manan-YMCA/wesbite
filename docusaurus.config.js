module.exports = {
  title: "Manan",
  tagline: "A Techno Surge",
  url: "https://manantechnosurge.com",
  baseUrl: "/",
  onBrokenLinks: "throw",
  favicon: "img/logo.png",
  organizationName: "manan", // Usually your GitHub org/user name.
  projectName: "club-website", // Usually your repo name.
  themeConfig: {
    navbar: {
      title: "Manan",
      logo: {
        alt: "Manan",
        src: "img/logo.png",
      },
      items: [
        { to: "event", label: "Events", position: "left" },
        {
          href: "https://github.com/Manan-YMCA",
          label: "GitHub",
          position: "right",
        },
      ],
    },
    footer: {
      style: "dark",
      links: [
        {
          title: "Secy",
          items: [
            {
              label: "Anshul",
              href: "https://www.anshulgoyal.dev",
            },
          ],
        },
        {
          title: "Community",
          items: [
            {
              label: "Linkedin",
              href: "https://www.linkedin.com/company/manan-ymca/",
            },
            {
              label: "Reddit",
              href: "https://www.reddit.com/r/manantechnosurge/",
            },
            {
              label: "Twitter",
              href: "https://twitter.com/manantechsurge",
            },
          ],
        },
        {
          title: "More",
          items: [
            {
              label: "Events",
              to: "event",
            },
            {
              label: "GitHub",
              href: "https://github.com/Manan-YMCA",
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} Manan,
    },
  },
  presets: [
    [
      "@docusaurus/preset-classic",
      {
        blog: {
          showReadingTime: false,
          path: "./event",
          routeBasePath: "/event",
        },
        docs: {
          path: "./info",
          routeBasePath: "/",
        },
        theme: {
          customCss: require.resolve("./src/css/custom.css"),
        },
      },
    ],
  ],
};

const withNextra = require('nextra')({
  theme: 'nextra-theme-blog',
  themeConfig: './theme.config.jsx',
});

module.exports = withNextra({
  output: 'export',
  images: {
    unoptimized: true,
  },
});

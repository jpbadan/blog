const withMDX = require('@next/mdx')({
  extension: /\.mdx$/
});

module.exports = withMDX({
  pageExtensions: ['js', 'jsx', 'ts', 'tsx', 'md', 'mdx']
});

module.exports = {
  webpack: (config, { isServer }) => {
    // console.log({ config });
    // Fixes npm packages that depend on `fs` module
    if (!isServer) {
      config.node = { fs: 'empty' };
    }
    return config;
  },
  images: {
    domains: ['img.traveltriangle.com'],
  },
};


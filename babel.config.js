module.exports = {
  // Include recommended preset configs
  presets: [
    '@babel/preset-react',
    '@babel/preset-env',
  ],

  // Include plugins
  plugins: [
    '@babel/plugin-proposal-class-properties',
    '@babel/plugin-transform-runtime',
    '@babel/plugin-proposal-throw-expressions',
  ],
};

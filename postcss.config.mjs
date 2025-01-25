/** @type {import('postcss-load-config').Config} */
const config = {
  plugins: {
    tailwindcss: {},
    autoprefixer: {},
    ...(process.env.NODE_ENV === 'production'
        ? {
          cssnano: {},
          'postcss-modules': {
            generateScopedName: '[hash:base64:6]', // Short hashed class names
          },
        }
        : {}),
  },
};

export default config;

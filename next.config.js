module.exports = {
    reactStrictMode: true,
    env: {
      customKey: 'customValue',
    },
    compress: true,
    async redirects() {
      return [
        {
          source: '/hola',
          destination: 'hello',
          permanent: true,
        }
      ]
    }
  }
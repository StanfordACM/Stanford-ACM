module.exports = {
  async redirects() {
    return [
      {
        source: '/hacky-evenings',
        destination: '/hackyEvenings',
        permanent: true
      },
      {
        source: '/proco/past-contests',
        destination: '/proco/pastContests',
        permanent: true
      }
    ];
  }
};

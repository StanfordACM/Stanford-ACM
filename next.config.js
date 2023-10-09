module.exports = {
  async redirects() {
    return [
      {
        source: '/proco/past-contests',
        destination: '/proco/pastContests',
        permanent: true
      }
    ];
  }
};

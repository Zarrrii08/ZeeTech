/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: 'https://zaryabhayatkhan.dev',
  generateRobotsTxt: true,
  robotsTxtOptions: {
    policies: [
      { userAgent: '*', allow: '/' },
    ],
  },
};

module.exports = {
  plugins: [
    {
      resolve: '@elegantstack/gatsby-theme-flexiblocks',
      options: {
        createDemoPages: false,
        colorMode: false
      }
    },
    {
      resolve: 'gatsby-plugin-sitemap'
    },
    {
      resolve: 'gatsby-plugin-robots-txt',
      options: {
        host: 'https://test02cwb.netlify.app',
        sitemap: 'https://test02cwb.netlify.app/sitemap-0.xml',
        policy: [{userAgent: '*', allow: '/'}]
      }
    }
  ],
  // Customize your site metadata
  siteMetadata: {
    title: 'cane sentio dev site wb',
    name: 'canesentio',
    description: 'my dev site wb...',
    //siteUrl: process.env.URL || process.env.VERCEL_URL
    siteUrl: 'https://test02cwb.netlify.app'
  }
}

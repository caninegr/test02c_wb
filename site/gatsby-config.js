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
      // ATTENTION: Match the theme name with the theme you installed
      resolve: '@elegantstack/gatsby-theme-flexiblog-news',
      options: {
        // ATTENTION: Blog will be created on this path
        basePath: '/blog/'
      }
    },    
    {
      resolve: 'gatsby-plugin-sitemap'
    },
    {
      resolve: 'gatsby-plugin-robots-txt',
      options: {
        host: 'https://thetruthaboutdogs.gr',
        sitemap: 'https://thetruthaboutdogs.gr/sitemap-0.xml',
        policy: [{userAgent: '*', allow: '/'}]
      }
    }
  ],
  // Customize your site metadata
  // siteMetadata: {
  //   title: 'cane sentio dev site wb',
  //   name: 'canesentio',
  //   description: 'my dev site wb...',
  //   //siteUrl: process.env.URL || process.env.VERCEL_URL
  //   siteUrl: 'https://test02cwb.netlify.app'
  // },
  siteMetadata: {
    //General Site Metadata
    title: 'Cane Sentio Dev',
    name: 'CaneSentio',
    description: 'Dog training, behaviour and boarding',
    address: 'Drymos, Thessaloniki',
    email: 'info@cane.gr',
    phone: '+30 2311 115099',
    siteUrl: 'https://thetruthaboutdogs.gr',

    //Site Social Media Links
    social: [
      {
        name: 'Github',
        url: 'https://github.com/gatsbyjs'
      },
      {
        name: 'Twitter',
        url: 'https://twitter.com/gatsbyjs'
      },
      {
        name: 'Instagram',
        url: 'https://github.com/gatsbyjs'
      }
    ],

    //Header Menu Items
    headerMenu: [
      {
        name: 'Home',
        slug: '/'
      },
      {
        name: 'Our Team',
        slug: '/authors'
      },
      {
        name: 'Contact',
        slug: '/contact'
      }
    ],

    //Footer Menu Items (2 Sets)
    footerMenu: [
      {
        title: 'Quick Links',
        items: [
          {
            name: 'Advertise with us',
            slug: '/contact'
          },
          {
            name: 'About Us',
            slug: '/about'
          },
          {
            name: 'Contact Us',
            slug: '/contact'
          }
        ]
      },
      {
        title: 'Legal Stuff',
        items: [
          {
            name: 'Privacy Notice',
            slug: '/'
          },
          {
            name: 'Cookie Policy',
            slug: '/'
          },
          {
            name: 'Terms Of Use',
            slug: '/'
          }
        ]
      }
    ]
  }
}

const siteMetadata = {
  title: "Kyo's Blog - Indie Hacker",
  author: 'Quang Dieu',
  fullName: 'Tran Quang Dieu',
  headerTitle: "Kyo's Blog",
  description: 'My desire to build indie projects to solve real-world problems.',
  language: 'en-us',
  theme: 'system',
  siteUrl: 'https://kyotran.dev',
  // TODO: Update analytics URL
  analyticsURL: 'https://analytics.kyotran.dev/share/Z3eSINRnbzydz1gK/karhdo.dev',
  siteRepo: 'https://github.com/kyotrandev/kyotran.dev',
  siteLogo: '/static/images/avatar.jpg',
  image: '/static/images/avatar.jpg',
  // TODO: Update social banner
  socialBanner: '/static/images/projects/kyotran-blog.png',
  email: 'kyotran.dev@gmail.com',
  github: 'https://github.com/kyotrandev',
  facebook: 'https://www.facebook.com/kyotran.dev',
  // TODO: Update linkedin URL
  linkedin: 'https://www.linkedin.com/in/kyotran',
  twitter: 'https://x.com/kyotrandev',
  locale: 'en-US',
  stickyNav: false,
  socialAccounts: {
    github: 'kyotrandev',
    // TODO: Update linkedin URL
    linkedin: 'kyotrandev',
    facebook: 'kyotran.dev',
  },
  analytics: {
    umamiAnalytics: {
      umamiWebsiteId: process.env.UMAMI_WEBSITE_ID,
    },
  },
  newsletter: {
    provider: 'buttondown',
  },
  comments: {
    provider: 'giscus',
    giscusConfig: {
      repo: process.env.NEXT_PUBLIC_GISCUS_REPO,
      repositoryId: process.env.NEXT_PUBLIC_GISCUS_REPOSITORY_ID,
      category: process.env.NEXT_PUBLIC_GISCUS_CATEGORY,
      categoryId: process.env.NEXT_PUBLIC_GISCUS_CATEGORY_ID,
      mapping: 'title',
      reactions: '1',
      metadata: '0',
      theme: 'light',
      darkTheme: 'transparent_dark',
      themeURL: '',
      lang: 'en',
      inputPosition: 'bottom',
    },
  },
  search: {
    provider: 'kbar',
    kbarConfig: {
      // path to load documents to search
      searchDocumentsPath: `${process.env.BASE_PATH || ''}/search.json`,
    },
  },
};

module.exports = siteMetadata;

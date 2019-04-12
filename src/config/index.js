module.exports = {
  siteTitle: 'Thirafi Wian | Software Engineer',
  siteDescription:
    'Thirafi Wian is a software engineer based in Boston, MA who specializes in developing (and occasionally designing) exceptional, high-quality websites and applications.',
  siteKeywords:
    'Thirafi Wian, software engineer, front-end engineer, web developer, javascript, northeastern',
  siteUrl: 'https://brittanychiang.com',
  siteLanguage: 'en_US',

  googleVerification: 'DCl7VAf9tcz6eD9gb67NfkNnJ1PKRNcg8qQiwpbx9Lk',

  name: 'Thirafi Wian',
  location: 'Bandung, West Java',
  email: 'thirafi.wian@gmail.com',
  socialMedia: [
    {
      name: 'Github',
      url: 'https://https://github.com/wianoski/',
    },
    {
      name: 'Linkedin',
      url: 'https://www.linkedin.com/in/thirafi-wian',
    },
    {
      name: 'Codepen',
      url: '#',
    },
    {
      name: 'Instagram',
      url: 'https://www.instagram.com/thirafi.wian/',
    },
    {
      name: 'Twitter',
      url: 'https://twitter.com/naiww__',
    },
  ],

  nav: [
    {
      name: 'About',
      url: '#about',
    },
    {
      name: 'Experience',
      url: '#jobs',
    },
    {
      name: 'Work',
      url: '#projects',
    },
    {
      name: 'Contact',
      url: '#contact',
    },
  ],

  twitterHandle: '@naiww__',
  googleAnalyticsID: 'UA-45666519-2',

  headerHeight: 100,

  greenColor: '#64ffda',
  navyColor: '#0a192f',
  darkNavyColor: '#020c1b',

  srConfig: (delay = 200) => {
    return {
      origin: 'bottom',
      distance: '20px',
      duration: 500,
      delay,
      rotate: { x: 0, y: 0, z: 0 },
      opacity: 0,
      scale: 1,
      easing: 'cubic-bezier(0.645, 0.045, 0.355, 1)',
      mobile: true,
      reset: false,
      useDelay: 'always',
      viewFactor: 0.25,
      viewOffset: { top: 0, right: 0, bottom: 0, left: 0 },
    };
  },
};

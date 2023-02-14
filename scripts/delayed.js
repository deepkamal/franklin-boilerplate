// eslint-disable-next-line import/no-cycle
import { buildBlock, loadBlocks, sampleRUM } from './lib-franklin.js';
import react1 from './react1.js';
import Footer from './footer.index.js';
import footerStyles from './styled-footer/footer.style.js';

const {
  StyledCopyright,
  StyledFooter,
  StyledLink,
  StyledRightLink,
} = footerStyles;

// Core Web Vitals RUM collection
sampleRUM('cwv');

// add more delayed functionality here
console.log('Loaded react 1', react1);

const section = document.createElement('div');
section.setAttribute('id', 'lazyLoadedReact');
react1(section, 'Delay Loaded');
document.querySelector('div#reactSection')
  .append(section);

const resp = JSON.parse(await (await fetch(`diff.json`)).text());
console.log(resp);

const leftLinks = [
  {
    element: (React.createElement(StyledLink, { text: 'TEST TEST' })),
    key: 'changeRegion',
  },
  // {
  //   dataT: 'license',
  //   href: '/license',
  //   text: 'License terms',
  //   title: 'License terms',
  // },
  // {
  //   dataT: 'learn',
  //   href: '/learn',
  //   text: 'Learn & Support',
  //   title: 'Learn & Support',
  // },
  // {
  //   dataT: 'blog',
  //   href: '/blog',
  //   text: 'Blog',
  //   title: 'Blog',
  // },
  // {
  //   dataT: 'company',
  //   href: '/company',
  //   text: 'Company',
  //   title: 'Company',
  // },
  // {
  //   dataT: 'sell ',
  //   href: '/sell',
  //   text: 'Sell Images',
  //   title: 'Sell Images',
  // },
  {
    dataT: 'enterprise',
    href: '/enterprise',
    text: 'Enterprise',
    title: 'Enterprise',
  },
  ...resp.flinks.data,
];
const rightLinks = [
  {
    dataT: 'privacy',
    href: '/privacy',
    text: 'Privacy',
    title: 'Privacy',
  },
  {
    dataT: 'terms',
    href: '/terms',
    text: 'Terms of Use',
    title: 'Terms of Use',
  },
  {
    dataT: 'cookies',
    href: '/cookies',
    text: 'Cookies',
    title: 'Cookies',
  },
  {
    dataT: 'ads',
    href: '/ads',
    text: 'AdChoices',
    title: 'AdChoices',
  },
 ];

const defaultProps = {
  copyright: `\u00A9 ${new Date().getFullYear()} Adobe. All rights reserved.`,
  leftLinks,
  rightLinks
};

const footerSection = document.createElement('div');
footerSection.setAttribute('id', 'footerContainer');
footerSection.setAttribute('style', `position: fixed;
                                                      bottom: 0;
                                                      width: 100%;`);

ReactDOM.render(Footer({ ...defaultProps }), footerSection);

document.querySelector('div#reactSection')
  .append(footerSection);


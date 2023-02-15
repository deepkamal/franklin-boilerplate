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

const locale_keys = {
  "en":"en",
  "jp":"jp",
  "es":"es",
  "default":"en"
}

const params = new Proxy(new URLSearchParams(window.location.search), {
  get: (searchParams, prop) => searchParams.get(prop),
});

const resp = JSON.parse(await (await fetch(`menu.json?sheet=${locale_keys[params.locale||'default']}`)).text());
console.log(resp);


const leftLinks = [
  {
    element: (React.createElement(StyledLink, { text: 'TEST TEST' })),
    key: 'changeRegion',
  },
  ...resp.data,
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


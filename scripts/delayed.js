// eslint-disable-next-line import/no-cycle
import { buildBlock, loadBlocks, sampleRUM } from './lib-franklin.js';
import react1 from './react1.js';

// Core Web Vitals RUM collection
sampleRUM('cwv');

// add more delayed functionality here
console.log("Loaded react 1",react1)

const section = document.createElement('div');
section.setAttribute("id","lazyLoadedReact")
react1(section,"Delay Loaded")
document.querySelector('div#reactSection').append(section);


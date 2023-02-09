// eslint-disable-next-line import/no-cycle
import { buildBlock, loadBlocks, sampleRUM } from './lib-franklin.js';
import react1 from './react1.js';

// Core Web Vitals RUM collection
sampleRUM('cwv');

// add more delayed functionality here
console.log("Loaded react 1",react1)

const main = document.querySelector('main');
const section = document.createElement('div');
react1(section)
// section.append(react1);
main.prepend(section);

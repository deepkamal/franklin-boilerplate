/*************************************************************************
 * ADOBE CONFIDENTIAL
 * ___________________
 *
 *  Copyright 2019 Adobe
 *  All Rights Reserved.
 *
 * NOTICE:  All information contained herein is, and remains
 * the property of Adobe and its suppliers, if any. The intellectual
 * and technical concepts contained herein are proprietary to Adobe
 * and its suppliers and are protected by all applicable intellectual
 * property laws, including trade secret and copyright laws.
 * Dissemination of this information or reproduction of this material
 * is strictly forbidden unless prior written permission is obtained
 * from Adobe.
 **************************************************************************/

const { css } = styled;
import { STOCK_BREAKPOINTS } from './breakpoints.js';

/**
 * Media query helper for supported breakpoints on Stock (STOCK_BREAKPOINTS).
 *
 * {
 *   initial: Function,
 *   xxsmall: Function,
 *   xsmall: Function
 *   etc.
 * }
 *
 * For every breakpoint this helper implements a function that wraps a media query around the CSS
 * present in the interpolation (see example below with the font-size).
 *
 * When the function is called, the `css` helper splits the template literal into an array
 * of strings that will be printed out in the interpolation.
 *
 * @see https://www.styled-components.com/docs/api#css
 *
 * Example of usage:
 * media[STOCK_BREAKPOINT_MEDIUM]`
 *   font-size: 18px;
 * `;
 *
 * The function returns:
 * ['↵    @media (min-width: ', '992', 'px) {↵      ', '↵  font-size: 18px;↵', '↵    }↵  ']
 *
 * The final CSS output in the interpolation:
 * @media (min-width: 992px) {
 *   font-size: 18px;
 * }
 *
 */
export const media = Object.keys(STOCK_BREAKPOINTS).reduce((acc, bpName) => {
  // iterating over each breakpoint and passing down the arguments (CSS) to the media query
  acc[bpName] = (...args) => css`
    @media (min-width: ${STOCK_BREAKPOINTS[bpName]}px) {
      ${css(...args)}
    }
  `;
  return acc;
}, {});

/**
 * Font smoothing helper.
 *
 * @param {boolean} enable Enable or disable font smoothing
 * @returns {string}
 */
export const fontSmoothing = (enable = true) => `
  -webkit-font-smoothing: ${enable ? 'antialiased' : 'auto'};
  -moz-osx-font-smoothing: ${enable ? 'grayscale' : 'auto'};
`;

/**
 * Add alpha props to styled component.
 *
 * @param {object} props
 * @returns {string}
 */
export const withAlpha = css`
  opacity: ${props => (props.alpha ? 0.5 : 1)};
`;
